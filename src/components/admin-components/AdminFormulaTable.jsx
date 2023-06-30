// IMPORTS -
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { useDispatch } from "react-redux";
import {
  updateAdminFormula,
  updateAdminFormulaStatus,
  deleteAdminFormula,
} from "../../redux/actions/admin-actions/formulaAdminAction";
import { Form } from "react-bootstrap";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Modal as ModalWrap, Button } from "antd";
import { Link } from "react-router-dom";
import "../../styles/adminFormulaTable.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const AdminFormulaTable = ({ formulas }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteAdminFormula(id));
  };

  const handleOk = (e) => {
    e.preventDefault();
    dispatch(updateAdminFormula(id, name));
  };

  const openHandler = (e, item) => {
    e.preventDefault();
    setOpen(true);
    setName(item?.name);
    setId(item?._id);
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
      name: "Formula status",
      selector: (row) => row.formulaStatus,
      sortable: true,
    },

    {
      name: "Formula name",
      selector: (row) => row.formulaName,
      sortable: true,
    },

    {
      name: "Total product quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },

    {
      name: "Formula price",
      selector: (row) => row.price,
      sortable: true,
    },

    {
      name: "Total amount",
      selector: (row) => row.totalAmount,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];
  const quantities = formulas?.map((item) => {
    const totalQuantity = item?.formulaDetails?.reduce(
      (total, formulaDetail) => {
        return total + formulaDetail.quantity;
      },
      0
    );
    return totalQuantity;
  });

  const prices = formulas?.map((item) => {
    const totalPrice = item?.formulaDetails?.reduce((total, formulaDetail) => {
      return total + formulaDetail.product?.price;
    }, 0);
    return totalPrice;
  });

  formulas?.forEach((item, index) => {
    data.push({
      id: index + 1,
      date: item?.createdAt.slice(0, 10),
      formulaStatus: item?.formulaStatus,
      formulaName: item?.name,
      quantity: quantities && quantities,
      price: prices && prices,
      totalAmount: quantities && prices && quantities * prices,
      actions: (
        <>
          <div className="admin__formulas__actions">
            {item?.formulaStatus === "Processing" ? (
              <>
                <Button
                  type="primary"
                  className="admin__formulas__btn"
                  htmlType="submit"
                  onClick={() =>
                    dispatch(updateAdminFormulaStatus(item?._id, "Accepted"))
                  }
                >
                  Accept
                </Button>
                <Button
                  type="primary"
                  className="admin__formulas__btn"
                  htmlType="submit"
                  onClick={() =>
                    dispatch(updateAdminFormulaStatus(item?._id, "Rejected"))
                  }
                >
                  Reject
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="primary"
                  className="admin__formulas__btn"
                  htmlType="submit"
                  onClick={(e) => openHandler(e, item)}
                >
                  Edit
                </Button>
                <Button
                  type="primary"
                  className="admin__formulas__btn"
                  htmlType="submit"
                  onClick={(e) => {
                    deleteHandler(e, item?._id);
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        </>
      ),
    });
  });

  return (
    <>
      <div className="admin__formulas__export">
        <ExportAsPdf
          data={data && data}
          headers={[
            "Id",
            "Date",
            "Formula Status",
            "Formula Name",
            "Total Product Quantity",
            "Formula Price",
            "Total Amount",
          ]}
          title={`Formula`}
          fileName={`Formula`}
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={formulas && formulas?.length > 0 ? false : true}
          >
            Export
          </Button>
        </ExportAsPdf>

        <Link to={"/admin/batch"}>
          <Button type="primary" size={"large"} htmlType="button">
            View batches
          </Button>
        </Link>
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
                <FormLabel>Formula name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </div>
          </Form>
        </ModalWrap>
      </div>
    </>
  );
};

export default AdminFormulaTable;
