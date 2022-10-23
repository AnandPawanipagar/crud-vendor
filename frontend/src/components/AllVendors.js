import React, { useState } from "react";
import MetaData from "../MetaData";
import { Space, Table, Tag } from "antd";
import axios from "axios";
import EditVendorForm from "./EditVendorForm";
const AllVendors = ({ vendorsData, setVendorsData }) => {
  const [editedRecord, setEditedRecord] = useState({status:false,data:{}});
  const handleDelete = async (record) => {
    let res = await axios.delete(`http://localhost:5000/vendor/${record._id}`);
    // console.log(vendorsData.filter((o)=>{
    //   return o._id!==record._id
    // }))
    if (res.status == 200 || res.status == 204) {
      setVendorsData({
        vendors: vendorsData.filter((o) => {
          return o._id !== record._id;
        }),
      });
    } else {
      window.alert("Unable to delete (Network issue)");
    }

    // console.log(text, record, "I data");
  };
  const handleEdit = async (record) => {
    setEditedRecord({ status: true, data: { ...record } });
  };
  const columns = [
    {
      title: "Options",
      key: "vendorName",
      dataIndex: "vendorName",
      render: (text, record) => (
        <>
          <button
            onClick={() => {
              handleDelete(record);
            }}
          >
            {"Delete"}
          </button>
          <button
            onClick={() => {
              handleEdit(record);
            }}
          >
            {"Edit"}
          </button>
        </>
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
      {editedRecord.status ?<>
        <EditVendorForm record={editedRecord.data}/>
      </>:<>
      <MetaData title="ALL VENDORS" />
      <Table columns={columns} dataSource={vendorsData} />
      </>}
    </>
  );
};

export default AllVendors;
