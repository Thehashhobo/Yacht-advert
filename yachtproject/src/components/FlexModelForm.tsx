import React from 'react';
import { Modal, Form, Input, Select, Button, DatePicker, message } from 'antd';
import emailjs from '@emailjs/browser';

interface FlexModalFormProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'number' | 'select' | 'date';
    options?: { label: string; value: string }[]; // For select inputs
    defaultValue?: any;
    rules?: any[];
  }[];
  title: string;
}

const FlexModalForm: React.FC<FlexModalFormProps> = ({ isVisible, onClose, onSubmit, fields, title }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    // Prepare data for EmailJS
    const emailParams = {
      ...values, // Send all form values
      title: title, // Send the modal title
      date: values.date?.format('YYYY-MM-DD') || '', // Format date if available
    };

    // Send email with EmailJS
    emailjs
      .send(
        'service_ievyfw8', // Replace with your EmailJS Service ID
        'template_p7x4cey', // Replace with your EmailJS Template ID
        emailParams,
        'jWOxeHqPjgs3G2q-l' // Replace with your EmailJS Public Key
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

    // Call the onSubmit prop (optional)
    onSubmit(values);
  };

  return (
    <Modal
      title={title}
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleFinish} layout="vertical">
        {fields.map((field) => (
          <Form.Item
            key={field.name}
            name={field.name}
            label={field.label}
            rules={field.rules || []}
            initialValue={field.defaultValue}
          >
            {field.type === 'text' && <Input />}
            {field.type === 'number' && <Input type="number" />}
            {field.type === 'select' && (
              <Select>
                {field.options?.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            )}
            {field.type === 'date' && <DatePicker style={{ width: '100%' }} />}
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FlexModalForm;
export type { FlexModalFormProps };
