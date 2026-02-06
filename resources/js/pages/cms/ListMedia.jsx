import React, { useState, useEffect } from 'react';
import { Upload, Button, notification, Card, Table, Tag, Modal, Progress, Typography, Space, Tooltip, Popconfirm, Form, Input, Carousel, Badge, Row, Col, Divider } from 'antd';
import { EyeOutlined, CheckOutlined, DeleteOutlined, RocketOutlined, PlusOutlined, VideoCameraOutlined, PictureOutlined, UploadOutlined, EditOutlined, PlayCircleFilled } from '@ant-design/icons';
import MainLayout from '../../layouts/MainLayout';
import axios from 'axios';
import { router } from '@inertiajs/react';
import PreviewKonten from '../../components/PreviewKonten';

const { Text } = Typography;
const { TextArea } = Input;

const ListMedia = ({ mediaList }) => {
  const [api, contextHolder] = notification.useNotification();

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);


  const handleApproveAndPlay = (id) => {
    router.post(`/media/approve-play/${id}`, {}, {
      onSuccess: () => {
        api.success({ message: 'Sukses!', description: 'Konten disetujui dan ditayangkan.' });
        setIsPreviewOpen(false);
      },
      onError: () => api.error({ message: 'Gagal', description: 'Terjadi kesalahan server.' })
    });
  };


  const handlePlay = (record) => router.post(`/media/${record.id}/play`, {}, { onSuccess: () => api.success({ message: 'Tayang!' }) });
  const handleDelete = (id) => router.delete(`/media/${id}`, { onSuccess: () => api.success({ message: 'Dihapus' }) });

  const openPreview = (record) => {
    setSelectedMedia(record);
    setIsPreviewOpen(true);
  };

  const columns = [
    {
      title: 'Status',
      key: 'status',
      width: 120,
      render: (_, r) => (
        <Space>

          { r.is_active ? <Tag color="green">PLAYING</Tag> : <Tag>IDLE</Tag> }

          { r.status === 'pending' ? <Tag color="orange">PENDING</Tag> : r.status === 'rejected' ? <Tag color="red">REJECTED</Tag> : <Tag color="blue">APPROVED</Tag> }
        </Space>
      )
    },
    {
      title: 'Konten',
      key: 'info',
      render: (_, r) => (
        <div>
          <Text strong>{ r.judul_media }</Text> <br />
          <Text type="secondary" style={ { fontSize: 12 } }>"{ r.running_text }"</Text>
        </div>
      )
    },
    {
      title: 'Assets',
      key: 'assets',
      render: (_, r) => (
        <Space>
          <Tag icon={ <VideoCameraOutlined /> } color="volcano">Video</Tag>
          <Badge count={ r.images ? r.images.length : 0 } showZero color="cyan">
            <Tag icon={ <PictureOutlined /> } color="cyan">Images</Tag>
          </Badge>
        </Space>
      )
    },
    {
      title: 'Aksi',
      key: 'action',
      render: (_, r) => (
        <Space>

          { r.status === 'pending' && (
            <Space>

              <Popconfirm title="Sebelum Approve Silahkan Preview Terlebih Dahulu?" onConfirm={ () => openPreview(r) }>
                <Button shape='round' type="primary" ghost icon={ <CheckOutlined /> }>Approve</Button>
              </Popconfirm>
              <Popconfirm title='Apakah anda yakin reject konten ini?' onConfirm={ () => router.post(`/media/reject/${r.id}`, {}, {
                onSuccess: () => {
                  api.success({ message: 'Konten Ditolak' });
                },
                onError: () => {
                  api.error({ message: 'Gagal Menolak Konten' });
                }
              }) }>
                <Button shape='round' danger>Reject</Button>
              </Popconfirm>
            </Space>
          ) }
          { r.status === 'approved' && (
            <Button shape='circle' type="primary" icon={ <PlayCircleFilled /> } disabled={ r.is_active } onClick={ () => handlePlay(r) } />
          ) }
          <Tooltip title="Preview">
            <Button shape='circle' icon={ <EyeOutlined /> } onClick={ () => { setSelectedMedia(r); setIsPreviewOpen(true); } } />
          </Tooltip>

          <Tooltip title="Edit Konten">
            <Button shape='circle' icon={ <EditOutlined /> } onClick={ () => router.get(`/media/${r.id}/edit`) } />
          </Tooltip>

          <Popconfirm title="Hapus?" onConfirm={ () => handleDelete(r.id) }>
            <Button shape='circle' danger icon={ <DeleteOutlined /> } />
          </Popconfirm>
        </Space>
      )
    }
  ];



  return (
    <MainLayout>
      { contextHolder }


      <Card title="Media List" extra={ <Button type="primary" icon={ <PlusOutlined /> } onClick={ () => router.get('/buat-media') }>Buat Konten</Button> } style={ { marginBottom: 16 } }>
        <Table dataSource={ mediaList } columns={ columns } rowKey="id" pagination={ { pageSize: 5 } } />
      </Card>

      <Modal
        title="Preview Konten"
        open={ isPreviewOpen }
        onCancel={ () => setIsPreviewOpen(false) }
        width={ 400 }
        centered

        footer={
          <div style={ { display: 'flex', justifyContent: 'center', width: '100%' } }>
            { selectedMedia && selectedMedia.status !== 'rejected' && (
              <Button
                key="approve"
                type="primary"
                size="large"
                icon={ selectedMedia.status === 'pending' ? <CheckOutlined /> : <PlayCircleFilled /> }
                onClick={ () => handleApproveAndPlay(selectedMedia.id) }
              >
                { selectedMedia.status === 'pending' ? 'Approve & Tayangkan' : 'Tayangkan Ulang' }
              </Button>
            ) }
          </div>
        }

      >
        <div style={ { display: 'flex', justifyContent: 'center' } }>
          { selectedMedia && (
            <PreviewKonten
              videoUrl={ selectedMedia.url }
              images={ selectedMedia.images }
              runningText={ selectedMedia.running_text }
              title={ selectedMedia.judul_media }
            />
          ) }
        </div>
      </Modal>

    </MainLayout >
  );
};

export default ListMedia;
