import React from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import emailjs from '@emailjs/browser';
import styles from './GeneralForm.module.css';

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
    <div className={styles.formContainer}>
      <Form
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        className={styles.customForm}
      >
        <div className={styles.formItem}>
          <Form.Item
            label={
              <span className={styles.formLabel}>
                Name <span className={styles.requiredIndicator}>*</span>
              </span>
            }
            name="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input 
              className={styles.formInput}
              placeholder="Enter your full name"
            />
          </Form.Item>
        </div>

        <div className={styles.formItem}>
          <Form.Item
            label={
              <span className={styles.formLabel}>
                Email <span className={styles.requiredIndicator}>*</span>
              </span>
            }
            name="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input 
              className={styles.formInput}
              placeholder="Enter your email address"
              type="email"
            />
          </Form.Item>
        </div>

        <div className={styles.formItem}>
          <Form.Item
            label={<span className={styles.formLabel}>Service</span>}
            name="Service"
          >
            <Select
              className={styles.formSelect}
              placeholder="Select a service (optional)"
              allowClear
            >
              <Select.Option value="Management">Yacht Management</Select.Option>
              <Select.Option value="Repairs">Repairs & Maintenance</Select.Option>
              <Select.Option value="Rentals">Yacht Rentals</Select.Option>
              <Select.Option value="Other">Other Services</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div className={styles.formItem}>
          <Form.Item
            label={
              <span className={styles.formLabel}>
                Tell us more <span className={styles.requiredIndicator}>*</span>
              </span>
            }
            name="Details"
            rules={[{ required: true, message: 'Please provide more details' }]}
          >
            <TextArea 
              className={styles.formTextArea}
              rows={4}
              placeholder="Please describe your requirements or questions..."
            />
          </Form.Item>
        </div>

        <div className={styles.submitButtonContainer}>
          <Button 
            type="primary" 
            htmlType="submit"
            className={styles.submitButton}
          >
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default GeneralForm;

