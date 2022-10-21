import { Button, Form, Input, Row, Col } from "antd";

import React from "react";
import MetaData from "../MetaData";
const CreateVendorForm = () => {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
 <MetaData title="CREATE VENDOR"/>

     <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row>
        <Col span={12}>
          <Form.Item
            label="Vendor Name"
            name="vendorname"
            rules={[
              {
                required: true,
                message: "Please input vendorname!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Bank Name"
            name="bankname"
            rules={[
              {
                required: true,
                message: "Please input your bank name",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Account Number"
            name="accountnumber"
            rules={[
              {
                required: true,
                message: "Please input your account number",
              },
            ]}
          >
            <Input size="large" placeholder="Enter 16 digits account number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Address One"
            name="addressone"
            rules={[
              {
                required: true,
                message: "Please input your address one ",
              },
            ]}
          >
            <TextArea rows={3} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Address Two"
            name="addresstwo"
            rules={[
              {
                required: true,
                message: "Please input your address two ",
              },
            ]}
          >
            <TextArea rows={3} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: "Please input your city!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: "Please input your country",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Zip Code"
            name="zipcode"
            rules={[
              {
                required: true,
                message: "Please input your zip code",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        ,
        <Col span={12}>
          <Form.Item>
            <Button type="primary" htmlType="submit" shape="round" size="large"> 
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
    </>
   
  );
};
export default CreateVendorForm;
