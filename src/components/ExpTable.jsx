// IMPORTS -
import DataTable from "react-data-table-component";
import { ExportAsPdf } from "react-export-table";
import { Button } from "antd";
import "../styles/expTable.css";

const ExpTable = ({ expenses, totalAmount }) => {
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
      name: "Description",
      selector: (row) => row.des,
      sortable: true,
    },

    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
  ];
  const data = [];

  expenses &&
    expenses?.forEach((item, index) => {
      data.push({
        id: index + 1,
        date: item?.date.slice(0, 10),
        expName: item?.name,
        amount: item?.amount,
        des: item?.description,
        totalAmount: totalAmount,
      });
    });

  return (
    <>
      <div className="exp__export">
        <ExportAsPdf
          data={data && data}
          headers={["Id", "Date", "Expense Name", "Amount", "Description"]}
          title={`Total Amount: ${totalAmount}`}
          fileName="Expense"
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
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default ExpTable;
