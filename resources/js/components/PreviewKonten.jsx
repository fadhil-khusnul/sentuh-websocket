import React from 'react';
import { Carousel } from 'antd';
import { VideoCameraOutlined, PictureOutlined } from '@ant-design/icons';

const PreviewKonten = ({ videoUrl, images = [], runningText, title }) => {

  const getImageSrc = (img) => {
    if (!img) return null;
    if (typeof img === 'string') {
      return img.startsWith('http') ? img : `/storage/${img}`;
    }
    return img.thumbUrl || (img.originFileObj ? URL.createObjectURL(img.originFileObj) : null);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '320px',
      aspectRatio: '9/16',
      height: 'auto',
      minHeight: '568px',
      margin: '0 auto',
      background: '#000',
      borderRadius: '16px',
      border: '8px solid #333',
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
    }}>

      <div style={{ flex: 6, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #333', overflow: 'hidden' }}>
        {videoUrl ? (
          <video src={videoUrl} style={{ width: '100%', height: '100%', objectFit: 'contain' }} autoPlay muted loop />
        ) : (
          <div style={{ color: '#555', fontSize: 24, textAlign: 'center' }}>
            <VideoCameraOutlined style={{ fontSize: 40, marginBottom: 10 }} /> <br/>
            <span style={{fontSize: 12}}>No Video</span>
          </div>
        )}
      </div>

      <div style={{ flex: 3.5, background: '#222', overflow: 'hidden', position: 'relative' }}>
        {images && images.length > 0 ? (
          <Carousel autoplay autoplaySpeed={3000} effect="fade" dots={false}>
            {images.map((file, idx) => (
              <div key={idx} style={{ height: '100%' }}>
                <div style={{
                    height: '200px',
                    width: '100%',
                    backgroundImage: `url(${getImageSrc(file)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', flexDirection: 'column' }}>
            <PictureOutlined style={{ fontSize: 30, marginBottom: 5 }} />
            <span style={{fontSize: 10}}>No Images</span>
          </div>
        )}
      </div>

      <div style={{ flex: 0.5, background: '#002140', display: 'flex', alignItems: 'center', overflow: 'hidden', borderTop: '1px solid #000' }}>
        <div style={{
          whiteSpace: 'nowrap',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 8s linear infinite'
        }}>
          {runningText || "PREVIEW RUNNING TEXT..."}
        </div>
      </div>

      <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '2px 8px', borderRadius: 4, fontSize: 10 }}>
        {title || "Judul Konten"}
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

export default PreviewKonten;
