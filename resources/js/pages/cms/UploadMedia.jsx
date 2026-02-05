import React, { useState, useEffect } from 'react';
import { Upload, Button, notification, Card, Table, Tag, Modal, Progress, Typography, Space, Tooltip, Popconfirm, Form, Input, Carousel, Badge, Row, Col, Divider } from 'antd';
import { EyeOutlined, CheckOutlined, DeleteOutlined, RocketOutlined, PlusOutlined, VideoCameraOutlined, PictureOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
import MainLayout from '../../layouts/MainLayout';
import axios from 'axios';
import { router } from '@inertiajs/react';
import PreviewKonten from '../../components/PreviewKonten';

const { Text } = Typography;
const { TextArea } = Input;

const UploadMedia = () => {

  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);
  const [imageList, setImageList] = useState([]);

  const watchedTitle = Form.useWatch('judul_media', form);
  const watchedRunningText = Form.useWatch('running_text', form);


  const handleVideoChange = ({ fileList }) => {
    const file = fileList[0]?.originFileObj;
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoPreviewUrl(url);
    } else {
      setVideoPreviewUrl(null);
    }
  };

  const handleImageChange = ({ fileList }) => {
    setImageList(fileList);
  };

  useEffect(() => {
    return () => {
      if (videoPreviewUrl) URL.revokeObjectURL(videoPreviewUrl);
    };
  }, [videoPreviewUrl]);

  const handleUploadSubmit = async (values) => {
    const { judul_media, deskripsi, running_text, video_file } = values;

    if (!video_file || video_file.length === 0) {
      return api.error({ message: 'Video Wajib Diisi!' });
    }
    if (imageList.length === 0) {
      return api.error({ message: 'Gambar Wajib Diisi (Minimal 1)!' });
    }

    const formData = new FormData();
    formData.append('judul_media', judul_media);
    formData.append('deskripsi', deskripsi || '');
    formData.append('running_text', running_text);

    formData.append('video_file', video_file[0].originFileObj);

    imageList.forEach((file) => {
      formData.append('image_files[]', file.originFileObj);
    });

    setIsUploading(true);

    try {
      await axios.post('/upload-media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (ev) => setUploadProgress(Math.round((ev.loaded * 100) / ev.total))
      });

      api.success({ message: 'Upload Sukses', description: 'Konten berhasil disimpan.' });

      form.resetFields();
      setVideoPreviewUrl(null);
      setImageList([]);
      router.reload({ only: ['mediaList'] });

    } catch (err) {
      api.error({ message: 'Gagal', description: 'Terjadi kesalahan saat upload.' });
      console.error(err);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={ { marginTop: 8 } }>Upload</div>
    </div>
  );


  return (
    <MainLayout>
      { contextHolder }
      <Card title="Buat Konten Baru" style={ { marginBottom: 24 } } className="shadow-sm">
        <Form form={ form } layout="vertical" onFinish={ handleUploadSubmit }>
          <Row gutter={ 24 }>

            <Col xs={ 24 } md={ 14 }>
              <Row gutter={ 16 }>
                <Col span={ 12 }>
                  <Form.Item label="Judul Konten" name="judul_media" rules={ [{ required: true }] }>
                    <Input placeholder="Contoh: Promo Ramadhan" />
                  </Form.Item>
                </Col>
                <Col span={ 12 }>
                  <Form.Item label="Running Text" name="running_text" rules={ [{ required: true }] }>
                    <Input placeholder="Teks berjalan..." />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Deskripsi Internal" name="deskripsi">
                <TextArea rows={ 2 } placeholder="Deskripsi ..." />
              </Form.Item>

              <Divider titlePlacement="left">Media Assets</Divider>

              <Form.Item
                label="1. Video Header (MP4)"
                name="video_file"
                valuePropName="fileList"
                getValueFromEvent={ (e) => Array.isArray(e) ? e : e && e.fileList }
              >
                <Upload
                  listType="picture"
                  maxCount={ 1 }
                  beforeUpload={ () => false }
                  accept="video/*"
                  onChange={ handleVideoChange }
                >
                  <Button icon={ <UploadOutlined /> }>Pilih Video</Button>
                </Upload>
              </Form.Item>


              <Form.Item label="2. Image Slider (Banyak Gambar)" required>
                <Upload
                  listType="picture-card"
                  fileList={ imageList }
                  onPreview={ (file) => window.open(file.thumbUrl || file.url, '_blank') }
                  onChange={ handleImageChange }
                  beforeUpload={ () => false }
                  accept="image/*"
                  multiple
                >
                  { imageList.length >= 8 ? null : uploadButton }
                </Upload>
              </Form.Item>

              { isUploading && <Progress percent={ uploadProgress } status="active" style={ { marginBottom: 10 } } /> }

              <Button type="primary" htmlType="submit" loading={ isUploading } size="large" icon={ <SaveOutlined /> }>
                Submit
              </Button>
            </Col>

            <Col xs={ 24 } md={ 10 }>
              <Card
                title="Live Preview"
                size="small"
                style={ { background: '#f0f2f5', textAlign: 'center' } }
                styles={ {
                  body: {
                    display: 'flex', justifyContent: 'center', padding: 20
                  }
                } }

              >
                <PreviewKonten
                  videoUrl={ videoPreviewUrl }
                  images={ imageList }
                  runningText={ watchedRunningText }
                  title={ watchedTitle }
                />

              </Card>
            </Col>
          </Row>
        </Form>
      </Card>

    </MainLayout>
  );
}

export default UploadMedia;
