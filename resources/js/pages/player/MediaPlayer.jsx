import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const MediaPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const appKey = import.meta.env.VITE_REVERB_APP_KEY;
    const wsHost = import.meta.env.VITE_REVERB_HOST || 'localhost';
    const wsPort = import.meta.env.VITE_REVERB_PORT || 8080;

    console.log("🔑 Menggunakan App Key:", appKey);

    window.Pusher = Pusher;

    const echo = new Echo({
      broadcaster: 'reverb',
      key: appKey,
      wsHost: wsHost,
      wsPort: wsPort,
      wssPort: wsPort,
      forceTLS: false,
      encrypted: false,
      disableStats: true,
      enabledTransports: ['ws'],
      cluster: 'mt1'
    });


    const channel = echo.channel('media-channel');

    channel.listen('.media.uploaded', (newMedia) => {
      console.log("🔥 EVENT DITERIMA:", newMedia);

      api.info({
        message: 'Media Baru Diterima',
        description: newMedia.judul_media,
        placement: 'topRight',
      });

      handleNewContent(newMedia);
    });

    fetchPlaylist();

    return () => echo.disconnect();
  }, []);

  const fetchPlaylist = async () => {
    try {
      const baseURL = 'http://localhost:8000';
      const res = await axios.get(`${baseURL}/get-playlist`);
      const serverList = res.data;
      processDownloadQueue(serverList);
    } catch (err) {
      console.error("Gagal fetch playlist", err);
    }
  };

  const handleNewContent = (mediaData) => {
    const newItem = {
      id: mediaData.id,
      name: mediaData.judul_media || `media-${mediaData.id}`,
      type: mediaData.type,
      url: mediaData.url,
      local_path: null
    };

    setPlaylist(prev => [newItem, ...prev]);

    const key = `open${Date.now()}`;
    api.open({
      title: 'Mendownload Konten...',
      description: newItem.name,
      icon: <Spin indicator={ <LoadingOutlined spin /> } />,
      key,
      duration: 0,
    });

    downloadSingleFile(newItem).then(localUrl => {
      if (localUrl) {
        newItem.local_path = localUrl;
        setCurrentMedia(newItem);

        api.success({
          key,
          title: 'Now Playing',
          description: newItem.name,
          duration: 4,
        });
      }
    });
  };

  const processDownloadQueue = async (list) => {
    setIsDownloading(true);
    const updatedList = [...list];

    for (let i = 0; i < updatedList.length; i++) {
      const item = updatedList[i];

      if (window.dsAPI) {
        try {
          const localUrl = await window.dsAPI.downloadMedia(item.url, item.name);
          updatedList[i].local_path = localUrl;

          if (i === 0) {
            setCurrentMedia(updatedList[i]);
          }
        } catch (e) {
          console.error("Gagal download di Electron:", e);
        }
      } else {
        if (i === 0) setCurrentMedia(item);
      }
    }
    setPlaylist(updatedList);
    setIsDownloading(false);
  };

  const downloadSingleFile = async (item) => {
    if (window.dsAPI) {
      return await window.dsAPI.downloadMedia(item.url, item.name);
    }
    await new Promise(r => setTimeout(r, 1000));
    return item.url;
  };

  if (!currentMedia) {
    return (
      <div style={ { backgroundColor: '#000', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' } }>
        { contextHolder }
        <Spin indicator={ <LoadingOutlined style={ { fontSize: 48, color: 'white' } } spin /> } />
        <h2 style={ { marginTop: 20 } }>{ isDownloading ? "Sinkronisasi Data..." : "Menunggu Sinyal..." }</h2>
      </div>
    );
  }



  return (
    <div style={ { backgroundColor: '#000', height: '100vh', width: '100vw', overflow: 'hidden' } }>
      { contextHolder }

      <div style={ { position: 'absolute', top: 10, left: 10, color: 'lime', zIndex: 999, background: 'rgba(0,0,0,0.7)', padding: '5px 10px', borderRadius: 4, fontSize: 12 } }>
        Showing: { currentMedia.name }
      </div>

      { currentMedia.type === 'video' ? (
        <video
          key={ currentMedia.local_path || currentMedia.url }
          src={ currentMedia.local_path || currentMedia.url }
          style={ { width: '100%', height: '100%', objectFit: 'contain' } }
          autoPlay
          loop
          controls
          muted
          playsInline
        />
      ) : (
        <img
          key={ currentMedia.local_path || currentMedia.url }
          src={ currentMedia.local_path || currentMedia.url }
          style={ { width: '100%', height: '100%', objectFit: 'contain' } }
          alt="Signage Content"
        />
      ) }
    </div>
  );
};

export default MediaPlayer;
