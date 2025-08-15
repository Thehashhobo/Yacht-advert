import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker, Button, message } from 'antd';
import emailjs from '@emailjs/browser';

export interface FlexModalFormProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  title: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'number' | 'select' | 'date' | 'textarea';
    options?: { label: string; value: string }[];
    defaultValue?: any;
    rules?: any[];
  }[];
}

const FlexModalForm: React.FC<FlexModalFormProps> = ({ isVisible, onClose, onSubmit, fields, title }) => {
  const [form] = Form.useForm();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleFinish = (values: any) => {
    // Prepare data for EmailJS
    const emailParams = {
      ...values,
      title: title,
      date: values.date?.format('YYYY-MM-DD') || '',
    };

    // Send email with EmailJS
    emailjs
      .send(
        'service_ievyfw8',
        'template_p7x4cey',
        emailParams,
        'jWOxeHqPjgs3G2q-l'
      )
      .then(
        (response) => {
          console.log('Email successfully sent!', response);
          message.success('Your inquiry has been successfully submitted. An email has been sent.');
          form.resetFields();
          onClose();
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );

    onSubmit(values);
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case 'text':
        return <Input placeholder={`Enter ${field.label.toLowerCase()}`} />;
      
      case 'number':
        return <Input type="number" placeholder={`Enter ${field.label.toLowerCase()}`} />;
      
      case 'textarea':
        return (
          <Input.TextArea 
            rows={4} 
            placeholder={`Enter ${field.label.toLowerCase()}`}
            style={{ resize: 'vertical' }}
          />
        );
      
      case 'select':
        return (
          <Select placeholder={`Select ${field.label.toLowerCase()}`}>
            {field.options?.map((option: { label: string; value: string }) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        );
      
      case 'date':
        return <DatePicker style={{ width: '100%' }} />;
      
      default:
        return <Input />;
    }
  };

  return (
    <Modal
      title={title}
      open={isVisible}
      onCancel={onClose}
      footer={null}
      width={600}
      maskClosable={false}
      keyboard={false}
      centered
      destroyOnClose
      style={{ top: 20 }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ marginTop: '1rem' }}
      >
        {fields.map((field) => (
          <Form.Item
            key={field.name}
            name={field.name}
            label={field.label}
            rules={field.rules}
            initialValue={field.defaultValue}
            style={{ marginBottom: '12px' }}
          >
            {renderField(field)}
          </Form.Item>
        ))}
        
        <Form.Item style={{ marginBottom: 0, marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FlexModalForm;
