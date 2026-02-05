import React, { useState } from 'react';
import { Upload, Button, notification, Card, Row, Col, Table, Tag, Modal, Progress, Typography, Space, Tooltip, Popconfirm, Input, Form } from 'antd';
import { UploadOutlined, EyeOutlined, PlayCircleOutlined, DeleteOutlined, InboxOutlined, RocketOutlined, EditOutlined, CheckCircleOutlined, PlayCircleFilled } from '@ant-design/icons';
import MainLayout from '../../layouts/MainLayout';
import axios from 'axios';
import { router } from '@inertiajs/react';

const { Text } = Typography;
const { Dragger } = Upload;

const ListMedia = ({ mediaList }) => {
  const [api, contextHolder] = notification.useNotification();

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [localPreview, setLocalPreview] = useState({ url: null, type: null, name: null, rawFile: null });

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState(null);
  const [form] = Form.useForm();

  const handleFileChange = (info) => {
    const file = info.file.originFileObj || info.file;
    if (file) {
      const isVideo = file.type.startsWith('video/');
      const isImage = file.type.startsWith('image/');

      if (!isVideo && !isImage) {
        api.error({ message: 'Format Salah', description: 'Hanya Video/Gambar.' });
        return;
      }
      if (localPreview.url) URL.revokeObjectURL(localPreview.url);
      setLocalPreview({
        url: URL.createObjectURL(file),
        type: isVideo ? 'video' : 'image',
        name: file.name,
        rawFile: file
      });
    }
  };

  const processUpload = async () => {
    if (!localPreview.rawFile) return api.warning({ message: 'Pilih file dulu' });

    const formData = new FormData();
    formData.append('file', localPreview.rawFile);

    setIsUploading(true);
    setUploadProgress(0);

    try {
      await axios.post('/upload-media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (ev) => setUploadProgress(Math.round((ev.loaded * 100) / ev.total))
      });
      api.success({ message: 'Berhasil', description: 'Media sedang diputar.' });
      handleCancelUpload();
      router.reload({ only: ['mediaList'] });
    } catch (err) {
      api.error({ message: 'Gagal Upload', description: err.response?.status === 413 ? 'File terlalu besar' : 'Error server' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelUpload = () => {
    if (localPreview.url) URL.revokeObjectURL(localPreview.url);
    setLocalPreview({ url: null, type: null, name: null, rawFile: null });
    setUploadProgress(0);
  };


  const handlePlayExisting = (id) => {
    router.post(`/media/${id}/play`, {}, {
      onSuccess: () => {
        api.success({ message: 'Tayang!', description: 'Media berhasil dipush ke layar.' });
      },
      onError: () => api.error({ message: 'Gagal memutar media.' })
    });
  };

  const handleDelete = (id) => {
    router.delete(`/media/${id}`, {
      onSuccess: () => api.success({ message: 'Terhapus', description: 'Media dihapus dari database & storage.' }),
      onError: () => api.error({ message: 'Gagal menghapus.' })
    });
  };

  const openEditModal = (record) => {
    setEditingMedia(record);
    form.setFieldsValue({ judul_media: record.judul_media });
    setIsEditOpen(true);
  };

  const handleUpdate = () => {
    form.validateFields().then(values => {
      router.put(`/media/${editingMedia.id}`, values, {
        onSuccess: () => {
          api.success({ message: 'Diupdate', description: 'Nama media berhasil diubah.' });
          setIsEditOpen(false);
        }
      });
    });
  };

  const columns = [
    {
      title: 'Status',
      key: 'status',
      width: 120,
      render: (_, record) => (
        record.is_active ?
          <Tag icon={ <CheckCircleOutlined /> } color="success" className="animate-pulse">PLAYING</Tag> :
          <Tag color="default">IDLE</Tag>
      )
    },
    {
      title: 'Preview',
      key: 'preview',
      width: 80,
      render: (_, record) => (
        <div style={ { cursor: 'pointer' } } onClick={ () => { setSelectedMedia(record); setIsPreviewOpen(true); } }>
          { record.type === 'video' ?
            <PlayCircleOutlined style={ { fontSize: '24px', color: '#1890ff' } } /> :
            <img src={ record.url } alt="t" style={ { width: 40, height: 40, objectFit: 'cover', borderRadius: 4 } } />
          }
        </div>
      ),
    },
    { title: 'Nama File', dataIndex: 'judul_media', key: 'name', ellipsis: true },
    {
      title: 'Tipe',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      render: (type) => <Tag color={ type === 'video' ? 'volcano' : 'green' }>{ type.toUpperCase() }</Tag>,
    },
    {
      title: 'Aksi',
      key: 'action',
      width: 200,
      render: (_, record) => (
        <Space>
          <Tooltip title="Tayangkan Sekarang">
            <Button
              type="primary"
              shape="circle"
              icon={ <PlayCircleFilled /> }
              disabled={ record.is_active }
              onClick={ () => handlePlayExisting(record.id) }
            />
          </Tooltip>

          <Tooltip title="Preview">
            <Button icon={ <EyeOutlined /> } shape="circle" onClick={ () => { setSelectedMedia(record); setIsPreviewOpen(true); } } />
          </Tooltip>

          <Tooltip title="Edit Nama">
            <Button icon={ <EditOutlined /> } shape="circle" onClick={ () => openEditModal(record) } />
          </Tooltip>

          <Popconfirm title="Hapus media ini?" onConfirm={ () => handleDelete(record.id) } okText="Ya" cancelText="Batal">
            <Button danger icon={ <DeleteOutlined /> } shape="circle" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <MainLayout>
      { contextHolder }

      <Row gutter={ [16, 16] }>
        {/* KOLOM UPLOAD */ }
        <Col xs={ 24 } md={ 10 }>
          <Card title="Upload Media Baru" className="shadow-sm">
            { !localPreview.url ? (
              <Dragger beforeUpload={ () => false } onChange={ handleFileChange } showUploadList={ false } accept="video/*,image/*" style={ { padding: 20 } }>
                <p className="ant-upload-drag-icon"><InboxOutlined /></p>

                <p className="ant-upload-text">Klik atau seret file ke area ini</p>
                <p className="ant-upload-hint">Format Video (MP4) atau Gambar (JPG/PNG)</p>
              </Dragger>
            ) : (
              <div style={ { textAlign: 'center' } }>
                <Text strong>{ localPreview.name }</Text>
                <div style={ { margin: '10px auto', background: '#000', borderRadius: 8, overflow: 'hidden', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
                  { localPreview.type === 'video' ? <video src={ localPreview.url } controls style={ { width: '100%', maxHeight: '100%' } } /> : <img src={ localPreview.url } style={ { maxWidth: '100%', maxHeight: '100%' } } /> }
                </div>
                { isUploading && <Progress percent={ uploadProgress } status="active" size="small" /> }
                <Space style={ { marginTop: 10 } }>
                  <Button type="primary" icon={ <UploadOutlined /> } onClick={ processUpload } loading={ isUploading }>Push to Screen</Button>
                  <Button danger icon={ <DeleteOutlined /> } onClick={ handleCancelUpload } disabled={ isUploading }>Batal</Button>
                </Space>
              </div>
            ) }
          </Card>
        </Col>

        {/* KOLOM LIST MEDIA */ }
        <Col xs={ 24 } md={ 14 }>
          <Card title="Daftar Media" className="shadow-sm" bodyStyle={ { padding: 0 } }>
            <Table columns={ columns } dataSource={ mediaList } rowKey="id" pagination={ { pageSize: 5 } } />
          </Card>
        </Col>
      </Row>

      {/* MODAL PREVIEW */ }
      <Modal title={ selectedMedia?.judul_media } open={ isPreviewOpen } onCancel={ () => setIsPreviewOpen(false) } footer={ null } width={ 800 } centered destroyOnClose>
        <div style={ { background: '#000', display: 'flex', justifyContent: 'center', borderRadius: 8, overflow: 'hidden' } }>
          { selectedMedia?.type === 'video' ? (
            <video src={ selectedMedia.url } controls autoPlay style={ { maxWidth: '100%', maxHeight: '60vh' } } />
          ) : (
            <img src={ selectedMedia?.url } style={ { maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' } } alt="Preview" />
          ) }
        </div>
      </Modal>

      {/* MODAL EDIT */ }
      <Modal title="Edit Nama Media" open={ isEditOpen } onOk={ handleUpdate } onCancel={ () => setIsEditOpen(false) }>
        <Form form={ form } layout="vertical">
          <Form.Item name="judul_media" label="Nama File" rules={ [{ required: true }] }>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

    </MainLayout>
  );
};

export default ListMedia;
