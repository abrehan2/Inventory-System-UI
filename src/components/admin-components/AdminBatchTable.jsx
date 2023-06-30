// IMPORTS -
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Modal as ModalWrap, Button } from "antd";
import {
  deleteAdminBatches,
  updateAdminBatches,
} from "../../redux/actions/admin-actions/batchAdminAction";
import "../../styles/adminBatchTable.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const AdminBatchTable = ({ batches }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteAdminBatches(id));
  };

  const handleOk = (e) => {
    e.preventDefault();
    dispatch(updateAdminBatches(id, name));
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
      name: "Batch name",
      selector: (row) => row.batchName,
      sortable: true,
    },

    {
      name: "Batch number",
      selector: (row) => row.batchNumber,
      sortable: true,
    },

    {
      name: "Formula name",
      selector: (row) => row.formulaName,
      sortable: true,
    },

    {
      name: "Formula status",
      selector: (row) => row.formulaStatus,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];

  batches && batches.forEach((item, index) => {
    data.push({
      id: index + 1,
      date: item?.createdAt.slice(0, 10),
      batchName: item?.name,
      batchNumber: item?.batchNumber,
      formulaName: item?.formula?.name,
      formulaStatus: item?.formula?.formulaStatus,

      actions: (
        <>
          <div className="admin__batch__actions">
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
          </div>
        </>
      ),
    });
  });

  return (
    <>
      <div className="admin__batch__export">
        <ExportAsPdf
          data={data && data}
          headers={[
            "Id",
            "Date",
            "Batch Name",
            "Batch Number",
            "Formula Name",
            "Formula Status",
          ]}
          title={`Batches`}
          fileName={`Batch`}
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={batches && batches?.length > 0 ? false : true}
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
                <FormLabel>Batch name</FormLabel>
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

export default AdminBatchTable;
