// IMPORTS -
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Modal as ModalWrap, Button } from "antd";
import {
  deleteAdminExpense,
  updateAdminExpense,
} from "../../redux/actions/admin-actions/expenseAdminAction";
import "../../styles/adminExpenseTable.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const AdminExpenseTable = ({ expenses, totalAmount }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteAdminExpense(id));
  };

  const handleOk = (e) => {
    e.preventDefault();

    dispatch(updateAdminExpense(id, name, date, description, amount));
  };

  const openHandler = (e, item) => {
    e.preventDefault();

    setOpen(true);
    setId(item?._id);
    setName(item?.name);
    setDescription(item?.description);
    setDate(item?.date);
    setAmount(item?.amount);
  };

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
      name: "Expense name",
      selector: (row) => row.expName,
      sortable: true,
    },

    {
      name: `Description`,
      selector: (row) => row.desc,
      sortable: true,
    },

    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];

  expenses?.forEach((item, index) => {
    data.push({
      id: index + 1,
      date: item?.date.slice(0, 10),
      expName: item?.name,
      desc: item?.description,
      amount: item?.amount,
      actions: (
        <>
          <div className="admin__exp_actions">
            <Button
              type="primary"
              className="admin__exp__btn"
              htmlType="submit"
              onClick={(e) => openHandler(e, item)}
            >
              Edit
            </Button>

            <Button
              type="primary"
              className="admin__exp__btn"
              htmlType="submit"
              onClick={(e) => deleteHandler(e, item?._id)}
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
      <div className="admin__exp__export">
        <ExportAsPdf
          data={data && data}
          headers={["Id", "Date", "Expense Name", "Description", "Amount"]}
          title={`Total Amount: ${totalAmount}`}
          fileName={`Expense`}
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={expenses && expenses?.length > 0 ? false : true}
          >
            Export
          </Button>
        </ExportAsPdf>
      </div>

      <DataTable columns={columns} data={data && data} />

      <div className="sales__btn__box">
        {/* MODAL */}

        <ModalWrap
          open={open}
          onOk={handleOk}
          onCancel={() => {
            setOpen(false);
          }}
          centered={true}
          bodyStyle={{ padding: "1rem" }}
          okText={"Save"}
        >
          <Form autoComplete="off" style={modalStyle}>
            <div className="sales__input__box">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="sales__input__box">
              <FormControl isRequired>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={date.slice(0, 10)}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="sales__input__box">
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="sales__input__box">
              <FormControl isRequired>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </FormControl>
            </div>
          </Form>
        </ModalWrap>
      </div>
    </>
  );
};

export default AdminExpenseTable;
