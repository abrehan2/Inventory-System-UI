// IMPORTS -
import React, { useCallback, useState } from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  deleteAdminProducts,
  updateAdminProduct,
} from "../../redux/actions/admin-actions/productsAdminAction";
import { Modal as ModalWrap } from "antd";
import { Form } from "react-bootstrap";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Input as Field } from "antd";
import "../../styles/adminProductTable.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const AdminRawTable = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (e, id) => {
    e.preventDefault();

    dispatch(deleteAdminProducts(id));
  };

  const handleOk = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(
        updateAdminProduct(id, name, description, price, stock, image, active)
      );
    },
    [dispatch, id, name, description, price, stock, image, active]
  );

  const createProductImage = (e) => {
    setActive(true);
    if (e.target.name === "Product") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const productData = useCallback((e, item) => {
    e.preventDefault();
    setOpen(true);
    setName(item?.name);
    setDescription(item?.description);
    setPrice(item?.price);
    setStock(item?.stock);
    setId(item?._id);
    setImage(item?.image.url);

  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },

    {
      name: "Product name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },

    {
      name: "Stock",
      selector: (row) => row.stock,
      sortable: true,
    },

    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];

  products?.forEach((item, index) => {
    data.push({
      id: index + 1,
      date: item?.createdAt.slice(0, 10),
      name: item?.name,
      description: item?.description,
      stock: item?.stock,
      price: item?.price,

      actions: (
        <>
          <div className="admin__raw__actions">
            <Button
              type="primary"
              className="admin__raw__btn"
              htmlType="submit"
              onClick={(e) => productData(e, item)}
            >
              Edit
            </Button>
            <Button
              type="primary"
              className="admin__raw__btn"
              htmlType="submit"
              onClick={(e) => {
                deleteHandler(e, item?._id);
              }}
            >
              Delete
            </Button>
          </div>
        </>
      ),
    });
  });

  return (
    <>
      <div className="admin__raw__export">
        <ExportAsPdf
          data={data && data}
          headers={[
            "Id",
            "Date",
            "Product Name",
            "Description",
            "Stock",
            "Price",
          ]}
          title={`Products`}
          fileName={`Products`}
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={products && products?.length > 0 ? false : true}
          >
            Export
          </Button>
        </ExportAsPdf>
      </div>
      <DataTable columns={columns} data={data && data} />
      <div className="admin__btn__box">
        {/* MODAL */}

        <ModalWrap
          open={open}
          onOk={handleOk}
          onCancel={() => setOpen(false)}
          centered={true}
          bodyStyle={{ padding: "1rem" }}
          okText={"Save"}
        >
          <Form
            autoComplete="off"
            style={modalStyle}
            encType="multipart/form-data"
          >
            <div className="admin__input__box">
              <FormControl isRequired>
                <FormLabel>Product name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
            </div>

            <div className="admin__input__box">
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </FormControl>
            </div>

            <div className="admin__input__box">
              <FormControl isRequired>
                <FormLabel>Stock</FormLabel>
                <Input
                  type="number"
                  value={stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </FormControl>
            </div>

            <div className="admin__input__box">
              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </FormControl>
            </div>

            <div className="admin__input__box">
              <FormControl isRequired>
                <FormLabel>Product image</FormLabel>
                <Field
                  type="file"
                  name="Product"
                  onChange={(e) => createProductImage(e)}
                  accept="image/*"
                />
              </FormControl>
            </div>
          </Form>
        </ModalWrap>
      </div>
    </>
  );
};

export default AdminRawTable;
