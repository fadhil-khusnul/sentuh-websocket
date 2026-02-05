import React, { useState, useEffect } from 'react';
import { Upload, Button, notification, Card, Table, Tag, Modal, Progress, Typography, Space, Tooltip, Popconfirm, Form, Input, Carousel, Badge, Row, Col, Divider } from 'antd';
import { EyeOutlined, CheckOutlined, DeleteOutlined, RocketOutlined, PlusOutlined, VideoCameraOutlined, PictureOutlined, UploadOutlined } from '@ant-design/icons';
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


  const handleApproveAction = (id) => router.post(`/media/approve/${id}`, {}, { onSuccess: () => api.success({ message: 'Disetujui' }) });
  const handlePlay = (record) => router.post(`/media/${record.id}/play`, {}, { onSuccess: () => api.success({ message: 'Tayang!' }) });
  const handleDelete = (id) => router.delete(`/media/${id}`, { onSuccess: () => api.success({ message: 'Dihapus' }) });

  const columns = [
    {
      title: 'Status',
      key: 'status',
      width: 120,
      render: (_, r) => (
        <Space direction="vertical" size={ 0 }>
          { r.is_active ? <Tag color="green">PLAYING</Tag> : <Tag>IDLE</Tag> }
          { r.status === 'pending' ? <Tag color="orange">PENDING</Tag> : <Tag color="blue">APPROVED</Tag> }
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
          <Tooltip title="Preview">
            <Button icon={ <EyeOutlined /> } onClick={ () => { setSelectedMedia(r); setIsPreviewOpen(true); } } />
          </Tooltip>
          { r.status === 'pending' && (
            <Popconfirm title="Approve?" onConfirm={ () => handleApproveAction(r.id) }>
              <Button type="primary" ghost icon={ <CheckOutlined /> }>Approve</Button>
            </Popconfirm>
          ) }
          { r.status === 'approved' && (
            <Button type="primary" icon={ <RocketOutlined /> } disabled={ r.is_active } onClick={ () => handlePlay(r) } />
          ) }
          <Popconfirm title="Hapus?" onConfirm={ () => handleDelete(r.id) }>
            <Button danger icon={ <DeleteOutlined /> } />
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

      {/* --- MODAL PREVIEW (EXISTING DATA) --- */ }
      <Modal title="Preview Konten" open={ isPreviewOpen } onCancel={ () => setIsPreviewOpen(false) } footer={ null } width={ 400 }>
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

    </MainLayout>
  );
};

export default ListMedia;
