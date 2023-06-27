// IMPORTS -
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import MetaData from "../helpers/MetaData";
import * as FaIcons from "react-icons/fa6";
import { Button as Btn } from "antd";
import { Modal as ModalWrap } from "antd";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Select } from "antd";
import {
  getFormulaProducts,
  getUserFormula,
} from "../redux/actions/formulaAction";
import {
  createSales,
  clearErrors,
  clearMessages,
  getSales,
} from "../redux/actions/saleAction";
import Loader from "../components/Loader";
import SaleTable from "../components/SaleTable";
import "../styles/sales.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const Sales = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, formulas } = useSelector((state) => state.FORMULA);
  const { error, loading, message, sales } = useSelector((state) => state.SALES);
  const [type, setType] = useState("");
  const [dealerName, setDealerName] = useState("");
  const [dealerContact, setDealerContact] = useState("");
  const [dealerPrice, setDealerPrice] = useState("");
  const [dealerPaid, setDealerPaid] = useState("");
  const [dealerDate, setDealerDate] = useState("");
  const [formulaName, setFormulaName] = useState("");
  const [dealerQantity, setDealerQuantity] = useState("");
  const [productName, setProductName] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorContact, setVendorContact] = useState("");
  const [vendorPrice, setVendorPrice] = useState("");
  const [vendorPaid, setVendorPaid] = useState("");
  const [vendorDate, setVendorDate] = useState("");
  const [vendorQantity, setVendorQuantity] = useState("");


  const handleOk = (e) => {
    e.preventDefault();

    if (type === "Dealer") {
      const myObj = {
        name: dealerName,
        contact: dealerContact,
        type,
        price: dealerPrice,
        formulaName,
        paid: dealerPaid,
        quantity: dealerQantity,
        date: dealerDate,
      };

      dispatch(createSales(myObj));
    } else {
      const myObj = {
        name: vendorName,
        contact: vendorContact,
        type,
        price: vendorPrice,
        productName,
        paid: vendorPaid,
        quantity: vendorQantity,
        date: vendorDate,
      };

      dispatch(createSales(myObj));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
      setOpen(false);
      setDealerName("");
      setVendorName("");
      setDealerContact("");
      setVendorContact("");
      setDealerPaid("");
      setVendorPaid("");
      setDealerPrice("");
      setVendorPrice("");
      setDealerQuantity("");
      setVendorQuantity("");
      setDealerDate("");
      setVendorDate("");
      setFormulaName("");
      setProductName("");
    }

    dispatch(getSales());
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getFormulaProducts());
    dispatch(getUserFormula());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <MetaData title={"Sales"} />
          <Container fluid className="sales__parent">
            <Row className="sales__secondary">
              <Col className="sales__child" md={true}>
                <div className="sales__content">
                  <h3>Sales</h3>
                </div>

                <div className="sales__btn__box">
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
                    open={open}
                    onOk={handleOk}
                    onCancel={() => {
                      setOpen(false);
                      setType("");
                    }}
                    centered={true}
                    bodyStyle={{ padding: "1rem" }}
                    okText={"Save"}
                  >
                    <Form autoComplete="off" style={modalStyle}>
                      <div className="sales__input__box">
                        <FormControl isRequired>
                          <FormLabel>Type</FormLabel>
                          <RadioGroup
                            value={type}
                            onChange={(e) => {
                              setType(e);
                            }}
                          >
                            <Stack direction="row">
                              <Radio value={"Vendor"}>Vendor</Radio>
                              <Radio value={"Dealer"}>Dealer</Radio>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </div>
                      {type && type === "Dealer" && (
                        <>
                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Name</FormLabel>
                              <Input
                                type="text"
                                value={dealerName}
                                onChange={(e) => setDealerName(e.target.value)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Contact</FormLabel>
                              <Input
                                type="number"
                                value={dealerContact}
                                onChange={(e) =>
                                  setDealerContact(e.target.value)
                                }
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Select a formula</FormLabel>
                              <Select
                                style={{
                                  width: "100%",
                                }}
                                allowClear
                                options={
                                  formulas &&
                                  formulas.map((item) => {
                                    return {
                                      key: item?._id,
                                      value: item?.name,
                                      label: item?.name,
                                    };
                                  })
                                }
                                value={formulaName}
                                onChange={(e) => setFormulaName(e)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Quantity</FormLabel>
                              <Input
                                type="number"
                                value={dealerQantity}
                                onChange={(e) =>
                                  setDealerQuantity(e.target.value)
                                }
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Price</FormLabel>
                              <Input
                                type="number"
                                value={dealerPrice}
                                onChange={(e) => setDealerPrice(e.target.value)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Paid</FormLabel>
                              <Input
                                type="number"
                                value={dealerPaid}
                                onChange={(e) => setDealerPaid(e.target.value)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Date</FormLabel>
                              <Input
                                type="date"
                                value={dealerDate}
                                onChange={(e) => setDealerDate(e.target.value)}
                              />
                            </FormControl>
                          </div>
                        </>
                      )}{" "}
                      {type && type === "Vendor" && (
                        <>
                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Name</FormLabel>
                              <Input
                                type="text"
                                value={vendorName}
                                onChange={(e) => setVendorName(e.target.value)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Contact</FormLabel>
                              <Input
                                type="number"
                                value={vendorContact}
                                onChange={(e) =>
                                  setVendorContact(e.target.value)
                                }
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Select a product</FormLabel>
                              <Select
                                style={{
                                  width: "100%",
                                }}
                                allowClear
                                options={
                                  products &&
                                  products.map((item) => {
                                    return {
                                      key: item?._id,
                                      value: item?.name,
                                      label: item?.name,
                                    };
                                  })
                                }
                                value={productName}
                                onChange={(e) => setProductName(e)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Quantity</FormLabel>
                              <Input
                                type="number"
                                value={vendorQantity}
                                onChange={(e) =>
                                  setVendorQuantity(e.target.value)
                                }
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Price</FormLabel>
                              <Input
                                type="number"
                                value={vendorPrice}
                                onChange={(e) => setVendorPrice(e.target.value)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Paid</FormLabel>
                              <Input
                                type="number"
                                value={vendorPaid}
                                onChange={(e) => setVendorPaid(e.target.value)}
                              />
                            </FormControl>
                          </div>

                          <div className="sales__input__box">
                            <FormControl isRequired>
                              <FormLabel>Date</FormLabel>
                              <Input
                                type="date"
                                value={vendorDate}
                                onChange={(e) => setVendorDate(e.target.value)}
                              />
                            </FormControl>
                          </div>
                        </>
                      )}
                    </Form>
                  </ModalWrap>
                </div>
                <div className="sales__box">
                  <SaleTable sales={sales && sales} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Sales;
