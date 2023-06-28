// IMPORTS -
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import MetaData from "../helpers/MetaData";
import * as FaIcons from "react-icons/fa6";
import { Button as Btn, Modal as ModalWrap } from "antd";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { Select as Drop } from "antd";
import {
  getFormulaProducts,
  createFormula,
  clearErrors,
  clearSuccess,
  getUserFormula,
  clearMessages,
} from "../redux/actions/formulaAction";
import FormulaTable from "../components/FormulaTable";
import "../styles/formula.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const Formula = () => {
  const [open, setOpen] = useState(false);
  const { loading, success, error, products, formulas, message } = useSelector(
    (state) => state.FORMULA
  );
  const [name, setName] = useState("");
  const [formulaDetails, setFormulaDetails] = useState([
    {
      quantity: null,
      product: null,
    },
  ]);
  const [choices, setChoices] = useState("");
  const [quantity, setQuantity] = useState([]);
  let bag = [];
  const dispatch = useDispatch();

  const handleOk = (e) => {
    e.preventDefault();
    dispatch(createFormula(name, formulaDetails));
    setOpen(false);
  };

  if (choices?.length > 0) {
    const selectedIds = products
      ?.filter((product) => choices?.includes(product.name))
      ?.map((selectedProduct) => selectedProduct._id);

    bag.push(...selectedIds);
  }

  useEffect(() => {
    dispatch(getFormulaProducts());
    dispatch(getUserFormula());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Formula has been created");
      dispatch(clearSuccess());
      setName("");
      setFormulaDetails("");
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
    }

    if (bag.length > 0 && quantity.length > 0) {
      const mappedFormula = bag.map((productId, index) => ({
        quantity: quantity[index],
        product: productId,
      }));

      setFormulaDetails(mappedFormula);
    }
  }, [dispatch, quantity, error, success, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Formula"} />
          <Container fluid className="formula__parent">
            <Row className="formula__secondary">
              <Col className="formula__child" md={true}>
                <div className="formula__content">
                  <h3>Formula</h3>
                </div>

                <div className="formula__btn__box">
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
                    title="Please create a formula"
                    open={open}
                    onOk={handleOk}
                    onCancel={() => setOpen(false)}
                    centered={true}
                    bodyStyle={{ padding: "1rem" }}
                    okText={"Save"}
                  >
                    <Form autoComplete="off" style={modalStyle}>
                      <div className="formula__input__box">
                        <FormControl isRequired>
                          <FormLabel>Formula name</FormLabel>
                          <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </FormControl>
                      </div>

                      <div className="formula__input__box">
                        <FormControl isRequired>
                          <FormLabel>Select a product</FormLabel>
                          <Drop
                            mode="multiple"
                            style={{
                              width: "100%",
                            }}
                            allowClear
                            onChange={(e) => setChoices(e)}
                          >
                            {products &&
                              products.map((item, index) => {
                                return (
                                  <option
                                    value={item.name}
                                    key={index}
                                    id={item._id}
                                  >
                                    {item.name}
                                  </option>
                                );
                              })}
                          </Drop>
                        </FormControl>
                      </div>

                      {choices &&
                        choices.map((item, index) => {
                          return (
                            <div className="formula__input__box" key={index}>
                              <FormControl isRequired>
                                <FormLabel>
                                  Formula quantity for {item}
                                </FormLabel>
                                <Input
                                  type="number"
                                  onChange={(e) => {
                                    const newQuantity = parseInt(
                                      e.target.value,
                                      10
                                    );
                                    setQuantity((prevQuantity) => {
                                      const updatedQuantities = [
                                        ...prevQuantity,
                                      ];
                                      updatedQuantities[index] = newQuantity;
                                      return updatedQuantities;
                                    });
                                  }}
                                />
                              </FormControl>
                            </div>
                          );
                        })}
                    </Form>
                  </ModalWrap>
                </div>
                <div className="formula__box">
                  <FormulaTable formula={formulas && formulas} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Formula;
