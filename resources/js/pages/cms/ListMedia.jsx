import React, { useState, useEffect } from 'react';
import { Upload, Button, message, Card, Row, Col, Table, Tag, Modal, Progress, Typography, Space } from 'antd';
import { UploadOutlined, EyeOutlined, PlayCircleOutlined, DeleteOutlined, InboxOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';
import axios from 'axios';
import MainLayout from '../../layouts/MainLayout';

const { Text } = Typography;
const { Dragger } = Upload;

const ListMedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [localPreview, setLocalPreview] = useState({ url: null, type: null, name: null, rawFile: null });



  const handleFileChange = (info) => {
    // Ambil file asli
    const file = info.file.originFileObj || info.file;

    if (file) {
      const isVideo = file.type.startsWith('video/');
      const isImage = file.type.startsWith('image/');

      if (!isVideo && !isImage) {
        message.error('Format file tidak didukung!');
        return;
      }

      if (localPreview.url) URL.revokeObjectURL(localPreview.url);

      const objectUrl = URL.createObjectURL(file);

      setLocalPreview({
        url: objectUrl,
        type: isVideo ? 'video' : 'image',
        name: file.name,
        rawFile: file
      });
    }
  };

  const processUpload = async () => {
    if (!localPreview.rawFile) return message.warning('Pilih file terlebih dahulu');

    const formData = new FormData();
    formData.append('file', localPreview.rawFile);

    setIsUploading(true);
    setUploadProgress(0);


  };

  const handleCancelUpload = () => {
    if (localPreview.url) URL.revokeObjectURL(localPreview.url);
    setLocalPreview({ url: null, type: null, name: null, rawFile: null });
  };

  const columns = [
    {
      title: 'Preview',
      key: 'preview',
      render: (_, record) => (
        record.type === 'video' ?
          <PlayCircleOutlined style={ { fontSize: '20px', color: '#1890ff' } } /> :
          <img src={ record.url } alt="thumb" style={ { width: 40, height: 40, objectFit: 'cover', borderRadius: 4 } } />
      ),
    },
    { title: 'Nama File', dataIndex: 'name', key: 'name', ellipsis: true },
    {
      title: 'Tipe',
      dataIndex: 'type',
      key: 'type',
      render: (type) => <Tag color={ type === 'video' ? 'volcano' : 'green' }>{ type.toUpperCase() }</Tag>,
    },
    {
      title: 'Aksi',
      key: 'action',
      render: (_, record) => (
        <Button icon={ <EyeOutlined /> } onClick={ () => { setSelectedMedia(record); setIsPreviewOpen(true); } }>
          Lihat
        </Button>
      ),
    },
  ];

  console.log(localPreview);


  return (
    <MainLayout>


      <Row gutter={ [16, 16] }>
        <Col xs={ 24 } md={ 10 }>
          <Card title="Upload & Preview" className="shadow-sm">
            { !localPreview.url ? (
              <Dragger
                beforeUpload={ () => false }
                onChange={ handleFileChange }
                showUploadList={ false }
                accept="video/*,image/*"
              >
                <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                <p className="ant-upload-text">Klik atau seret file ke area ini</p>
                <p className="ant-upload-hint">Format Video (MP4) atau Gambar (JPG/PNG)</p>
              </Dragger>
            ) : (
              <div style={ { textAlign: 'center' } }>
                <Text strong style={ { display: 'block', marginBottom: 10 } }>{ localPreview.name }</Text>

                <div style={ {
                  margin: '0 auto 15px auto',
                  background: '#000',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center'
                } }>
                  { localPreview.type === 'video' ? (
                    <video src={ localPreview.url } controls style={ { width: '100%', height: '100%' } } />
                  ) : (
                    <img src={ localPreview.url } alt="local" style={ { width: '100%', height: '100%', objectFit: 'contain' } } />
                  ) }
                </div>

                { isUploading && (
                  <div style={ { marginBottom: 15 } }>
                    <Progress percent={ uploadProgress } status="active" />
                    <Text type="secondary">Mengirim ke server...</Text>
                  </div>
                ) }

                <Space>
                  <Button
                    type="primary"
                    icon={ <UploadOutlined /> }
                    onClick={ processUpload }
                    loading={ isUploading }
                    size="large"
                  >
                    Push to Screen
                  </Button>
                  <Button
                    danger
                    icon={ <DeleteOutlined /> }
                    onClick={ handleCancelUpload }
                    disabled={ isUploading }
                    size="large"
                  >
                    Ganti File
                  </Button>
                </Space>
              </div>
            ) }
          </Card>
        </Col>

        <Col xs={ 24 } md={ 14 }>
          <Card title="List Media di Server" className="shadow-sm">
            <Table columns={ columns } dataSource={ data } rowKey="id" loading={ loading } pagination={ { pageSize: 6 } } />
          </Card>
        </Col>
      </Row>




    </MainLayout>
  );
};

export default ListMedia;
