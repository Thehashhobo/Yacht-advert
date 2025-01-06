import React from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import emailjs from '@emailjs/browser';
import '../App.css';

const { TextArea } = Input;

const GeneralForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    // EmailJS parameters
    const emailParams = {
      Name: values.Name,
      Email: values.Email,
      Service: values.Service,
      Details: values.Details,
    };

    try {
      // Show loading message
      message.loading('Sending your message...', 0);

      // Send the email via EmailJS
      await emailjs.send(
        'service_ievyfw8', // Replace with your EmailJS Service ID
        'template_p7x4cey', // Replace with your EmailJS Template ID
        emailParams,
        'jWOxeHqPjgs3G2q-l' // Replace with your EmailJS Public Key
      );

      message.destroy(); // Remove loading message
      message.success('Message sent successfully!');

      // Reset the form
      form.resetFields();
    } catch (error) {
      console.error('Email sending failed:', error);
      message.destroy(); // Remove loading message
      message.error('Failed to send the message. Please try again.');
    }
  };

  return (
    <>
      <Form
        form={form}
        onFinish={handleFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        className="custom-form"
        style={{ maxWidth: 600, margin: '0 auto'}} // Center the form horizontally
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
          className="form-label"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
          className="form-label"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Service"
          name="Service"
          className="form-label"
        >
          <Select>
            <Select.Option value="Management">Management</Select.Option>
            <Select.Option value="Repairs">Repairs</Select.Option>
            <Select.Option value="Rentals">Rentals</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Tell us more"
          name="Details"
          rules={[{ required: true, message: 'Please provide more details' }]}
          className="form-label"
        >
          <TextArea rows={4} />
        </Form.Item>
        {/* Center the button using a Form.Item with centered styling */}
        <Form.Item
          className="submit-button"
          wrapperCol={{ span: 24 }}
          style={{ textAlign: 'center' }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GeneralForm;

