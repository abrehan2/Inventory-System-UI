// IMPORTS -
import * as FaIcons from "react-icons/fa";

// USER NAVBAR DATA -
const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },

  {
    title: "Raw Materials",
    path: "/products",
    icon: <FaIcons.FaIndustry />,
    cName: "nav-text",
  },

  {
    title: "Formula",
    path: "/formula",
    icon: <FaIcons.FaInfinity />,
    cName: "nav-text",
  },

  {
    title: "Sales",
    path: "/sale",
    icon: <FaIcons.FaReceipt />,
    cName: "nav-text",
  },

  {
    title: "Expense",
    path: "/expense",
    icon: <FaIcons.FaList />,
    cName: "nav-text",
  },
];

// ADMIN NAVBAR DATA -
const adminSidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },

  {
    title: "Users",
    path: "/admin/users",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },

  {
    title: "Raw Materials",
    path: "/admin/products",
    icon: <FaIcons.FaIndustry />,
    cName: "nav-text",
  },

  {
    title: "Formula",
    path: "/admin/formula",
    icon: <FaIcons.FaInfinity />,
    cName: "nav-text",
  },

  {
    title: "Sales",
    path: "/admin/sales",
    icon: <FaIcons.FaReceipt />,
    cName: "nav-text",
  },

  {
    title: "Expense",
    path: "/admin/expense",
    icon: <FaIcons.FaList />,
    cName: "nav-text",
  },
];

export default SidebarData;
export { adminSidebarData };
