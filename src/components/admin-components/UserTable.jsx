// IMPORTS -
import React from "react";
import DataTable from "react-data-table-component";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { deleteAdminUsers } from "../../redux/actions/admin-actions/userAdminAction";
import { Link } from "react-router-dom";
import "../../styles/userTable.css";

const UserTable = ({ users }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e, id) => {
    e.preventDefault();

    dispatch(deleteAdminUsers(id));
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },

    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];
  const data = [];

  users &&
    users?.forEach((item, index) => {
      data.push({
        id: index + 1,
        name: item?.name,
        email: item?.email,
        role: item?.role,
        actions: (
          <>
            <div className="users_actions">
              <Link to={`/admin/user/update/${item?._id}`}>
                <Button type="primary" className="users__btn" htmlType="submit">
                  Edit
                </Button>
              </Link>
              <Button
                type="primary"
                className="users__btn"
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
      <DataTable columns={columns} data={data && data} />
    </>
  );
};

export default UserTable;
