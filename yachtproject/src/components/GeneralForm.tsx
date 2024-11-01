import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import '../App.css'

const { TextArea } = Input;

const GeneralForm: React.FC = () => {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, margin: '0 auto' }} // Center the form horizontally
      >
        <Form.Item label="Name" className="form-label">
          <Input />
        </Form.Item>
        <Form.Item label="Email" className="form-label">
          <Input />
        </Form.Item>
        <Form.Item label="Service Type" className="form-label">
          <Select>
            <Select.Option value="Management">Management</Select.Option>
            <Select.Option value="Service">Servicing</Select.Option>
            <Select.Option value="Repairs">Repairs</Select.Option>
            <Select.Option value="Rentals">Rentals</Select.Option>
            <Select.Option value="Train">Training</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tell us more" className="form-label">
          <TextArea rows={4} />
        </Form.Item>
        {/* Center the button using a Form.Item with centered styling */}
        <Form.Item className="submit-button" wrapperCol={{ span: 14 }} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <GeneralForm />;
