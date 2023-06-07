import {

  Button,
  Form,
  Input
} from "antd";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrRegistererCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrRegistererCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const AddProduct = () => {
  const [form] = Form.useForm();
  const [imageName, setImageName] = useState("");
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

 
  async function addProduct(value) {
    console.log(value);
    try {
      const response = await fetch("http://localhost:5000/products/", {
        method: 'POST',
        body: JSON.stringify({imageName}),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
          Authorization: localStorage.getItem("jwt"),
        },
      });
  
      const data = await response.json();
      if (data.message === "Created") {
         const successMessage = document.getElementById("success-message");
      successMessage.textContent = "Product created successfully!";
      }
    } catch (error) {
      console.log("An error occurred while creating the product:", error);
    }
  }
  
  
  return (
    <div  className="registerCont">
      <div className="registerChild">
    <Form
    id="success-message"
      {...formItemLayout}
      form={form}
      name="addProduct"
      onFinish={addProduct}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h1>Add Product</h1>
    <Form.Item
        name="product_name"
        label="Product Name"
        rules={[
          {
            required: true,
            message: "Please input your product name!",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input your product description!",
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
            message: "Please input your product's price!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="categoryId"
        label="Category ID"
        rules={[
          {
            required: true,
            message: "Please input your Category ID !",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    <div>
    <ImgCrop rotationSlider>
      <Upload
        action="http://localhost:5000/products/"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
    </div> 
    <Form.Item
        name="product_color"
        label="Product Color"
        rules={[
          {
            required: true,
            message: "Please input your product's color !",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[
          {
            required: true,
            message: "Please input product's quantity",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
    </div>
  </div>
  );
};
export default AddProduct;
