// IMPORTS
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormControl, FormLabel, Textarea, Input } from "@chakra-ui/react";
import MetaData from "../helpers/MetaData";
import * as FaIcons from "react-icons/fa6";
import { Button as Btn } from "antd";
import { Modal as ModalWrap } from "antd";
import ExpTable from "../components/ExpTable";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  createExpense,
  clearErrors,
  clearMessages,
  getExpenses,
} from "../redux/actions/expenseAction";
import Loader from "../components/Loader";
import "../styles/expense.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const Expense = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const { message, error, loading, expenses, totalAmount } = useSelector(
    (state) => state.EXPENSE
  );

  // CHECK -
  let total = 0;
  total += totalAmount;

  const handleOk = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("amount", amount);
    myForm.set("date", date);

    dispatch(createExpense(myForm));
    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
      setAmount("");
      setDate("");
      setDescription("");
      setName("");
    }

    dispatch(getExpenses());
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Expense"} />
          <Container fluid className="exp__parent">
            <Row className="exp__secondary">
              <Col className="exp__child" md={true}>
                <div className="exp__content">
                  <h3>Expense</h3>
                  <h3 className="exp">Total Amount: {total}</h3>
                </div>

                <div className="exp__btn__box">
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
                    title="Please fill the expense form"
                    open={open}
                    onOk={handleOk}
                    onCancel={() => setOpen(false)}
                    centered={true}
                    bodyStyle={{ padding: "1rem" }}
                    okText={"Save"}
                  >
                    <Form autoComplete="off" style={modalStyle}>
                      <div className="exp__input__box">
                        <FormControl isRequired>
                          <FormLabel>Expense name</FormLabel>
                          <Input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          />
                        </FormControl>
                      </div>

                      <div className="exp__input__box">
                        <FormControl isRequired>
                          <FormLabel>Description</FormLabel>
                          <Textarea
                            size={"md"}
                            resize={"none"}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                          />
                        </FormControl>
                      </div>

                      <div className="exp__input__box">
                        <FormControl isRequired>
                          <FormLabel>Amount</FormLabel>
                          <Input
                            type="number"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                          />
                        </FormControl>
                      </div>

                      <div className="exp__input__box">
                        <FormControl isRequired>
                          <FormLabel>Date</FormLabel>
                          <Input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                          />
                        </FormControl>
                      </div>
                    </Form>
                  </ModalWrap>
                </div>
                <div className="exp__box">
                  <ExpTable expenses={expenses} totalAmount={totalAmount} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Expense;
