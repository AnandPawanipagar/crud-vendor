import React, { useState } from "react";
import MetaData from "../MetaData";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Vendor Name",
    dataIndex: "vendorName",
    key: "vendorName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Account Number",
    dataIndex: "accountNumber",
    key: "accountNumber",
  },
  {
    title: "Bank Name",
    dataIndex: "bankName",
    key: "bankName",
  },
  {
    title: "Address One",
    dataIndex: "addressOne",
    key: "addressOne",
  },
  {
    title: "Address Two",
    dataIndex: "addressTwo",
    key: "addressTwo",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Zip Code",
    dataIndex: "zipcode",
    key: "zipcode",
  },
];

const AllVendors = ({ vendorsData }) => {
  return (
    <>
      <MetaData title="ALL VENDORS" />
      <Table columns={columns} dataSource={vendorsData} />
    </>
  );
};

export default AllVendors;
