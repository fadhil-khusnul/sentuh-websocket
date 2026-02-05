import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { notification, Carousel, Progress, Typography } from 'antd';
import { LoadingOutlined, CloudDownloadOutlined } from '@ant-design/icons';

const MediaPlayer = () => {
  const [api, contextHolder] = notification.useNotification();

  const [activePackage, setActivePackage] = useState(null);

  const [runningText, setRunningText] = useState("SELAMAT DATANG DI SENTUH DIGITAL SIGNAGE");

  useEffect(() => {
    const appKey = import.meta.env.VITE_REVERB_APP_KEY;
    const wsPort = import.meta.env.VITE_REVERB_PORT || 8080;

    window.Pusher = Pusher;

    const echo = new Echo({
        broadcaster: 'reverb',
        key: appKey,
        wsHost: 'localhost',
        wsPort: wsPort,
        wssPort: wsPort,
        forceTLS: false,
        encrypted: false,
        disableStats: true,
        enabledTransports: ['ws'],
        cluster: 'mt1'
    });

    echo.connector.pusher.connection.bind('connected', () => {
      api.success({ message: 'Online', description: 'Terhubung ke server.', duration: 2 });
    });

    const channel = echo.channel('media-channel');
    channel.listen('.media.uploaded', (eventData) => {
        console.log("🔥 EVENT MASUK:", eventData);
        handleNewContent(eventData);
    });

    fetchInitialContent();

    return () => echo.disconnect();
  }, []);


  const fetchInitialContent = async () => {
    try {
      const res = await axios.get('http://localhost:8000/get-playlist');
      const playlist = res.data;

      if (playlist.length > 0) {
        const content = playlist[0];
        const formattedData = {
            id: content.id,
            judul_media: content.name,
            running_text: content.running_text,
            video_url: content.video_url,
            images_url: content.images_url
        };
        await handleNewContent(formattedData);
      }
    } catch (err) {
      console.error("Gagal fetch playlist", err);
    }
  };

  const handleNewContent = async (mediaData) => {
      const notificationKey = 'download_progress';

      api.open({
          key: notificationKey,
          message: 'Mengunduh Konten Baru...',
          description: (
            <div style={{ marginTop: 8 }}>
                <div style={{ marginBottom: 5 }}>{mediaData.judul_media}</div>
                <Progress percent={0} status="active" size="small" />
            </div>
          ),
          icon: <CloudDownloadOutlined style={{ color: '#1890ff' }} />,
          duration: 0,
      });

      try {
          await preloadAssets(mediaData, (percent) => {
              api.open({
                  key: notificationKey,
                  message: 'Mengunduh Konten Baru...',
                  description: (
                    <div style={{ marginTop: 8 }}>
                        <div style={{ marginBottom: 5 }}>{mediaData.judul_media}</div>
                        <Progress percent={percent} status="active" size="small" />
                    </div>
                  ),
                  icon: <LoadingOutlined style={{ color: '#1890ff' }} />,
                  duration: 0,
              });
          });

          setActivePackage(mediaData);
          if (mediaData.running_text) setRunningText(mediaData.running_text);

          api.destroy(notificationKey);
          api.success({
              message: 'Now Playing',
              description: mediaData.judul_media,
              duration: 3
          });

      } catch (error) {
          console.error("Gagal download aset:", error);
          api.error({
              key: notificationKey,
              message: 'Gagal Memutar',
              description: 'Gagal mengunduh aset media.'
          });
      }
  };

  const preloadAssets = async (data, onProgress) => {
      const assets = [];
      if (data.video_url) assets.push(data.video_url);
      if (data.images_url && Array.isArray(data.images_url)) {
          assets.push(...data.images_url);
      }

      let loadedCount = 0;
      const total = assets.length;

      const updateProgress = () => {
          loadedCount++;
          const percent = Math.round((loadedCount / total) * 100);
          if (onProgress) onProgress(percent);
      };

      const promises = assets.map(url => {
          return new Promise((resolve) => {
              const isVideo = url.match(/\.(mp4|mov|ogg)$/i);
              if (isVideo) {
                  const vid = document.createElement('video');
                  vid.src = url;
                  vid.onloadeddata = () => { updateProgress(); resolve(); };
                  vid.onerror = () => { updateProgress(); resolve(); };
              } else {
                  const img = new Image();
                  img.src = url;
                  img.onload = () => { updateProgress(); resolve(); };
                  img.onerror = () => { updateProgress(); resolve(); };
              }
          });
      });

      await Promise.all(promises);
  };

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', width: '100vw', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {contextHolder}

      <div style={{ flex: 6, position: 'relative', background: '#111', overflow: 'hidden' }}>
         {activePackage?.video_url ? (
             <video
                key={activePackage.video_url}
                src={activePackage.video_url}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                autoPlay muted loop playsInline
             />
         ) : (
             <div style={{height: '100%', display: 'flex', alignItems:'center', justifyContent:'center', color: '#555', flexDirection: 'column'}}>
                 <LoadingOutlined style={{ fontSize: 40, marginBottom: 20 }} />
                 <h3>Menunggu Video...</h3>
             </div>
         )}
      </div>

      <div style={{ flex: 3.5, position: 'relative', background: '#222', overflow: 'hidden', borderTop: '4px solid #000' }}>
         {activePackage?.images_url && activePackage.images_url.length > 0 ? (
             <Carousel
                autoplay
                autoplaySpeed={3000}
                speed={3000}
                effect="fade"
                dots={true}
                pauseOnHover={false}
             >
                {activePackage.images_url.map((url, idx) => (
                    <div key={idx}>
                        <div style={{
                            height: '35vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#000'
                        }}>
                            <img
                                src={url}
                                alt={`slide-${idx}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                ))}
             </Carousel>
         ) : (
            <div style={{height: '100%', display: 'flex', alignItems:'center', justifyContent:'center', color: '#555'}}>
                 <h3>Menunggu Gambar...</h3>
             </div>
         )}
      </div>

      {/* 3. RUNNING TEXT (5%) */}
      <div style={{ flex: 0.5, background: '#002140', display: 'flex', alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', borderTop: '4px solid #000' }}>
          <div style={{
              display: 'inline-block',
              paddingLeft: '100%',
              animation: 'marquee 15s linear infinite',
              color: 'white', fontWeight: 'bold', fontSize: '1.5rem', textTransform: 'uppercase'
          }}>
              {runningText}
          </div>
      </div>

      <style>{`
        @keyframes marquee {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-100%, 0); }
        }
      `}</style>
    </div>
  );
};

export default MediaPlayer;
