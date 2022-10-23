import React, { useState } from "react";
import MetaData from "../MetaData";
import { Space, Table, Tag } from "antd";
import axios from "axios";

const AllVendors = ({ vendorsData,setVendorsData }) => {
  const columns = [
    {
      title: "Options",
      key: "vendorName",
      dataIndex: "vendorName",
      render: (text, record) => (
        <button
          onClick={async () => {
            let res = await axios.delete(
              `http://localhost:5000/vendor/${record._id}`
            );
            // console.log(vendorsData.filter((o)=>{
            //   return o._id!==record._id
            // }))
            if (res.status == 200 || res.status == 204){
              setVendorsData({vendors:vendorsData.filter((o)=>{
                return o._id!==record._id
              })})
            }else{
              
            }
            
            // console.log(text, record, "I data");
          }}
        >
          {"Delete"}
        </button>
      ),
    },
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
  return (
    <>
      <MetaData title="ALL VENDORS" />
      <Table columns={columns} dataSource={vendorsData} />
    </>
  );
};

export default AllVendors;
