// IMPORTS -
import { useState } from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { Button, Modal as ModalWrap } from "antd";
import { Form } from "react-bootstrap";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { createBatch } from "../redux/actions/formulaAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/formulaTable.css";

// PARTIALS -
const modalStyle = {
  display: `flex`,
  flexDirection: `column`,
  rowGap: `1rem`,
  overflow: `hidden`,
};

const FormulaTable = ({ formula }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [formulaName, setFormulaName] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [name, SetName] = useState("");
  const disptach = useDispatch();

  const handleOk = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("batchNumber", batchNumber);
    myForm.set("id", id);

    disptach(createBatch(id, name, batchNumber));
    setOpen(false);
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
      name: "Formula name",
      selector: (row) => row.formula,
      sortable: true,
    },

    {
      name: "Formula status",
      selector: (row) => row.status,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];

  formula &&
    formula?.forEach((item, index) => {
      data.push({
        id: index + 1,
        date: item?.createdAt.substring(0, 10),
        formula: item?.name,
        status: item?.formulaStatus,
        actions: (
          <>
            <Button
              onClick={() => {
                setOpen(true);
                setId(item?._id);
                setFormulaName(item?.name);
              }}
              type="primary"
              className="table__btn"
              disabled={item?.formulaStatus === "Accepted" ? false : true}
            >
              Create batch
            </Button>
          </>
        ),
      });
    });

  return (
    <>
      <div className="formula__export">
        <ExportAsPdf
          data={data && data}
          headers={["Id", "Date", "Formula Name", "status"]}
          title={`Formula`}
          fileName="Formula"
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={formula && formula?.length > 0 ? false : true}
          >
            Export
          </Button>
        </ExportAsPdf>

        <Link to="/formula/batches">
          <Button type="primary" size={"large"} htmlType="button">
            View batches
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />

      <div className="formula__btn__box">
        {/* MODAL */}

        <ModalWrap
          title="Please create a batch"
          open={open}
          onOk={handleOk}
          onCancel={() => setOpen(false)}
          centered={true}
          bodyStyle={{ padding: "1rem" }}
          okText={"Save"}
        >
          <Form autoComplete="off" style={modalStyle} onSubmit={handleOk}>
            <div className="formula__input__box">
              <FormControl isRequired>
                <FormLabel>Formula id</FormLabel>
                <Input type="text" disabled={true} value={id} />
              </FormControl>
            </div>

            <div className="formula__input__box">
              <FormControl isRequired>
                <FormLabel>Formula name</FormLabel>
                <Input type="text" disabled={true} value={formulaName} />
              </FormControl>
            </div>

            <div className="formula__input__box">
              <FormControl isRequired>
                <FormLabel>Batch name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => SetName(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="formula__input__box">
              <FormControl isRequired>
                <FormLabel>Batch number</FormLabel>
                <Input
                  type="number"
                  value={batchNumber}
                  onChange={(e) => setBatchNumber(e.target.value)}
                />
              </FormControl>
            </div>
          </Form>
        </ModalWrap>
      </div>
    </>
  );
};

export default FormulaTable;
