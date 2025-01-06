import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Row, Col, message } from 'antd';

const ContactModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('How can We help');
  const [showForm, setShowForm] = useState(true);

  const [form] = Form.useForm(); // Initialize Ant Design form instance

  const { TextArea } = Input;

  const showModal = () => {
    setOpen(true);
    setShowForm(true);
    setModalText('How can We help');
    form.resetFields(); // Reset form fields when the modal is opened
  };

  const handleOk = async () => {
    try {
      // Validate form fields
      const values = await form.validateFields();
      console.log('Form submitted:', values);

      // Simulate async operation and success feedback
      setModalText('The form has been submitted, expect a response within 2 business days');
      message.success('Form submitted successfully!');

      setTimeout(() => {
        setOpen(false);
        setShowForm(false);
      }, 3500);
    } catch (error) {
      message.error('Please fill in all required fields correctly.');
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" size="large" onClick={showModal}>
        Contact Us Now!
      </Button>
      <Modal open={open} onCancel={handleCancel} footer={null}>
        <h3 style={{ marginBottom: '0.5rem' }}>{modalText}</h3>
        {showForm && (
          <Form
            form={form}
            layout="vertical" // Use vertical layout for better control over custom grid
            style={{
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            <Form.Item style={{ marginBottom: 16 }}>
              <Row align="middle">
                <Col xs={24} sm={8}>
                  <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>
                    Name
                  </label>
                </Col>
                <Col xs={0} sm={2} /> {/* Empty column for spacing */}
                <Col xs={24} sm={14}>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                    noStyle
                  >
                    <Input id="name" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item style={{ marginBottom: 16 }}>
              <Row align="middle">
                <Col xs={24} sm={8}>
                  <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
                    Email
                  </label>
                </Col>
                <Col xs={0} sm={2} /> {/* Empty column for spacing */}
                <Col xs={24} sm={14}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' },
                    ]}
                    noStyle
                  >
                    <Input id="email" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item style={{ marginBottom: 16 }}>
              <Row align="middle">
                <Col xs={24} sm={8}>
                  <label
                    htmlFor="serviceType"
                    className="form-label"
                    style={{ fontWeight: 'bold' }}
                  >
                    Service Type
                  </label>
                </Col>
                <Col xs={0} sm={2} /> {/* Empty column for spacing */}
                <Col xs={24} sm={14}>
                  <Form.Item
                    name="serviceType"
                    rules={[{ required: true, message: 'Please select a service type' }]}
                    noStyle
                  >
                    <Select id="serviceType">
                      <Select.Option value="Management">Management</Select.Option>
                      <Select.Option value="Service">Services</Select.Option>
                      <Select.Option value="Repairs">Repairs</Select.Option>
                      <Select.Option value="Rentals">Rentals</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item style={{ marginBottom: 16 }}>
              <Row align="middle">
                <Col xs={24} sm={8}>
                  <label
                    htmlFor="details"
                    className="form-label"
                    style={{ fontWeight: 'bold' }}
                  >
                    Tell us more
                  </label>
                </Col>
                <Col xs={0} sm={2} /> {/* Empty column for spacing */}
                <Col xs={24} sm={14}>
                  <Form.Item
                    name="details"
                    rules={[{ required: true, message: 'Please provide more details' }]}
                    noStyle
                  >
                    <TextArea id="details" rows={4} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" onClick={handleOk}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default ContactModal;
