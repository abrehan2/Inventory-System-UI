// IMPORTS -
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { Button } from "antd";
import "../styles/SaleTable.css";

const SaleTable = ({ sales }) => {
  const [visible, setVisible] = useState("Vendors");

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
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },

    {
      name: `Name`,
      selector: (row) => row.roleName,
      sortable: true,
    },

    {
      name: "Quantity",
      selector: (row) => row.qty,
      sortable: true,
    },

    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },

    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },

    {
      name: "Paid",
      selector: (row) => row.paid,
      sortable: true,
    },

    {
      name: "Remaining",
      selector: (row) => row.remaining,
      sortable: true,
    },
  ];
  const dataVendor = [];
  const dataDealer = [];

  const vendor = sales && sales.filter((item) => item.type === "Vendor");
  const dealer = sales && sales.filter((item) => item.type === "Dealer");

  vendor?.forEach((item, index) => {
    dataVendor.push({
      id: index + 1,
      date: item?.date.slice(0, 10),
      type: item?.type,
      roleName: item?.name,
      qty: item?.quantity,
      price: item?.price,
      total: item?.total,
      paid: item?.paid,
      remaining: item?.remaining,
    });
  });

  dealer?.forEach((item, index) => {
    dataDealer.push({
      id: index + 1,
      date: item?.date.slice(0, 10),
      type: item?.type,
      roleName: item?.name,
      qty: item?.quantity,
      price: item?.price,
      total: item?.total,
      paid: item?.paid,
      remaining: item?.remaining,
    });
  });

  return (
    <>
      <div className="sales__export">
        <ExportAsPdf
          data={visible === "Vendors" ? dataVendor : dataDealer}
          headers={[
            "Id",
            "Date",
            "Type",
            `${visible} Name`,
            "Quantity",
            "Price",
            "Total",
            "Paid",
            "Remaining",
          ]}
          title={`${visible} Details`}
          fileName={`${visible}`}
        >
          <Button
            type="primary"
            size={"large"}
            htmlType="button"
            disabled={sales && sales?.length > 0 ? false : true}
          >
            Export
          </Button>
        </ExportAsPdf>

        <Button
          type="primary"
          size={"large"}
          htmlType="button"
          onClick={() =>
            visible === "Vendors"
              ? setVisible("Dealers")
              : setVisible("Vendors")
          }>
          
          {visible === "Vendors" ? "Dealers" : "Vendors"}
        </Button>
      </div>

      {visible !== "Vendors" ? (
        <DataTable columns={columns} data={dataDealer && dataDealer} />
      ) : (
        <DataTable columns={columns} data={dataVendor && dataVendor} />
      )}
    </>
  );
};

export default SaleTable;
