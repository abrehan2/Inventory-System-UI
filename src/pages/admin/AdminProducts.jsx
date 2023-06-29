// IMPORTS -
import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Input as Field } from "antd";
import * as FaIcons from "react-icons/fa6";
import MetaData from "../../helpers/MetaData";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import { Button as Btn, Modal as ModalWrap } from "antd";
import AdminRawTable from "../../components/admin-components/AdminRawTable";
import {
  clearErrors,
  clearMessages,
  createAdminProducts,
  getAdminProducts,
} from "../../redux/actions/admin-actions/productsAdminAction";
import { UPDATE_ADMIN_USER_RESET } from "../../helpers/Constants";
import "../../styles/adminProducts.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const AdminProducts = () => {
  const [open, setOpen] = useState(false);
  const { loading, error, products, message, isUpdated } = useSelector(
    (state) => state.ADMIN_PRODUCT
  );
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      toast.error(error);
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setImage("");
    }

    if (isUpdated) {
      dispatch({
        type: UPDATE_ADMIN_USER_RESET,
      });
    }

    dispatch(getAdminProducts());
  }, [dispatch, error, message, isUpdated]);

  const createProductImage = (e) => {
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

  const handleOk = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(createAdminProducts(name, description, stock, price, image));
    },
    [dispatch, name, description, price, stock, image]
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Raw Materials`} />
          <Container fluid className="admin__raw__parent">
            <Row className="admin__raw__secondary">
              <Col md={true} className="admin__raw__child">
                <div className="admin__raw__content">
                  <h3>Raw Materials</h3>
                </div>
                <div className="admin__btn__box">
                  <Btn
                    type="primary"
                    shape="circle"
                    icon={<FaIcons.FaPlus />}
                    size={"large"}
                    htmlType="button"
                    onClick={() => setOpen(true)}
                  />

                  {/* MODAL */}

                  <ModalWrap
                    title="Please create a product"
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
                <div className="admin__raw__box">
                  <AdminRawTable products={products && products} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default AdminProducts;
