// IMPORTS -
import React from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { Button } from "antd";
import { useBatch as stockBatch } from "../redux/actions/formulaAction";
import { useDispatch } from "react-redux";
import "../styles/batchTable.css";

const BatchTable = ({ batch }) => {
  const dispatch = useDispatch();

  const batchHandler = (e, id) => {
    e.preventDefault();

    dispatch(stockBatch(id));
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
      selector: (row) => row.bName,
      sortable: true,
    },

    {
      name: "Batch number",
      selector: (row) => row.bNum,
      sortable: true,
    },

    {
      name: "Formula name",
      selector: (row) => row.fName,
      sortable: true,
    },

    {
      name: "Formula status",
      selector: (row) => row.fStatus,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];

  batch &&
    batch.forEach((item, index) => {
      data.push({
        id: index + 1,
        date: item?.createdAt.substring(0, 10),
        bName: item?.name,
        bNum: item?.batchNumber,
        fName: item?.formula.name,
        fStatus: item?.formula.formulaStatus,
        actions: (
          <>
            <Button
              type="primary"
              className="batches__btn"
              onClick={(e) => batchHandler(e, item._id)}
              htmlType="submit"
            >
              Use
            </Button>
          </>
        ),
      });
    });

  return (
    <>
      <div className="batch__export">
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
          fileName="Batch"
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={batch && batch?.length > 0 ? false : true}
          >
            Export
          </Button>
        </ExportAsPdf>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default BatchTable;
