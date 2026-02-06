import React, { useState, useEffect } from 'react';
import { Upload, Button, notification, Card, Progress, Form, Input, Row, Col, Divider, Alert } from 'antd';
import { UploadOutlined, SaveOutlined, PlusOutlined, VideoCameraOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import MainLayout from '../../layouts/MainLayout';
import { router, usePage } from '@inertiajs/react';
import PreviewKonten from '../../components/PreviewKonten';

const { TextArea } = Input;

const EditMedia = ({ media }) => {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [videoPreviewUrl, setVideoPreviewUrl] = useState(media.video_url);
  const [imageList, setImageList] = useState(media.images || []);

  const watchedTitle = Form.useWatch('judul_media', form);
  const watchedRunningText = Form.useWatch('running_text', form);

  useEffect(() => {
    form.setFieldsValue({
      judul_media: media.judul_media,
      deskripsi: media.deskripsi,
      running_text: media.running_text,
      image_files: media.images
    });
  }, [media, form]);

  const handleVideoChange = ({ fileList }) => {
    const file = fileList[0]?.originFileObj;
    if (file) setVideoPreviewUrl(URL.createObjectURL(file));
  };

  const handleImageChange = ({ fileList }) => setImageList(fileList);

  const handleUpdateSubmit = (values) => {
    const { judul_media, deskripsi, running_text, video_file, image_files } = values;

    const formData = new FormData();

    formData.append('judul_media', judul_media);
    formData.append('deskripsi', deskripsi || '');
    formData.append('running_text', running_text);

    if (video_file && video_file.length > 0 && video_file[0].originFileObj) {
      formData.append('video_file', video_file[0].originFileObj);
    }

    if (image_files && image_files.length > 0) {
      image_files.forEach((file) => {
        if (file.originFileObj) {
          formData.append('image_files[]', file.originFileObj);
        } else if (file.path) {

          formData.append('existing_images[]', file.path);
        }
      });
    } else {
      formData.append('image_files[]', '');
    }

    setIsUploading(true);

    router.post(`/media/${media.id}/update`, formData, {
      forceFormData: true,
      onProgress: (ev) => {
        const percent = Math.round((ev.loaded * 100) / ev.total);
        setUploadProgress(percent);
      },
      onSuccess: () => {
        api.success({ message: 'Update Berhasil', description: 'Data telah diperbarui.' });
        setIsUploading(false);
      },
      onError: (err) => {
        api.error({ message: 'Gagal Update', description: 'Cek inputan anda.' });
        setIsUploading(false);
        console.error(err);
      }
    });
  };

  const uploadButton = (
    <div><PlusOutlined /><div style={ { marginTop: 8 } }>Ganti</div></div>
  );

  return (
    <MainLayout>
      { contextHolder }

      <div style={ { marginBottom: 16 } }>
        <Button icon={ <ArrowLeftOutlined /> } onClick={ () => router.get('/halaman-cms') }>Kembali</Button>
      </div>

      <Card title={ `Edit Konten: ${media.judul_media}` } className="shadow-sm">

        <Form form={ form } layout="vertical" onFinish={ handleUpdateSubmit }>
          <Row gutter={ 24 }>
            {/* FORM INPUT */ }
            <Col xs={ 24 } md={ 14 }>
              <Row gutter={ 16 }>
                <Col span={ 12 }>
                  <Form.Item label="Judul Konten" name="judul_media" rules={ [{ required: true }] }>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={ 12 }>
                  <Form.Item label="Running Text" name="running_text" rules={ [{ required: true }] }>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Deskripsi Internal" name="deskripsi">
                <TextArea rows={ 2 } />
              </Form.Item>

              <Divider orientation="left">Update Media Assets</Divider>

              <Form.Item label="Ganti Video (Biarkan kosong jika tidak ingin mengubah)" name="video_file" valuePropName="fileList" getValueFromEvent={ (e) => Array.isArray(e) ? e : e && e.fileList }>
                <Upload listType="picture" maxCount={ 1 } beforeUpload={ () => false } accept="video/*" onChange={ handleVideoChange }>
                  <Button icon={ <UploadOutlined /> }>Upload Video Baru</Button>
                </Upload>
              </Form.Item>

              <Form.Item label="Ganti Gambar Slider (Upload baru akan menggantikan SEMUA gambar lama)" name="image_files" valuePropName="fileList" getValueFromEvent={ (e) => Array.isArray(e) ? e : e && e.fileList }>
                <Upload
                  listType="picture-card"
                  fileList={ imageList }
                  onPreview={ (file) => window.open(file.url || file.thumbUrl, '_blank') }
                  onChange={ handleImageChange }
                  beforeUpload={ () => false }
                  accept="image/*"
                  multiple
                >
                  { uploadButton }
                </Upload>
              </Form.Item>

              { isUploading && <Progress percent={ uploadProgress } status="active" style={ { marginBottom: 10 } } /> }

              <Button type="primary" htmlType="submit" loading={ isUploading } size="large" icon={ <SaveOutlined /> }>
                Simpan Perubahan
              </Button>
            </Col>

            <Col xs={ 24 } md={ 10 }>
              <Card title="Preview Edit" size="small" style={ { background: '#f0f2f5', textAlign: 'center' } } bodyStyle={ { display: 'flex', justifyContent: 'center', padding: 20 } }>
                <PreviewKonten
                  videoUrl={ videoPreviewUrl }
                  images={ imageList }
                  runningText={ watchedRunningText || media.running_text }
                  title={ watchedTitle || media.judul_media }
                />
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
    </MainLayout>
  );
}

export default EditMedia;
