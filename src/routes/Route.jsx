// IMPORTS -
import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Raw,
  Details,
  Profile,
  ResetPassword,
  Expense,
  Formula,
  Batches,
  Sales,
  Users,
  UpdateUser,
  AdminSale,
  AdminExpense,
  AdminProducts,
  AdminFormula,
  AdminBatch,
} from "../helpers/Lazy";
import Auth from "../pages/Auth";
import ForgotPassword from "../pages/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";

// MAKING ROUTES -
const Route = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
    children: [
      {
        index: true,
        exact: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/products",
        element: (
          <ProtectedRoute isUser={true}>
            <Raw />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/product/:id",
        element: (
          <ProtectedRoute isUser={true}>
            <Details />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/profile",
        element: (
          <ProtectedRoute isUser={true}>
            <Profile />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/expense",
        element: (
          <ProtectedRoute isUser={true}>
            <Expense />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/formula",
        element: (
          <ProtectedRoute isUser={true}>
            <Formula />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/formula/batches",
        element: (
          <ProtectedRoute isUser={true}>
            <Batches />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/sale",
        element: (
          <ProtectedRoute isUser={true}>
            <Sales />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/users",
        element: (
          <ProtectedRoute isAdmin={true}>
            <Users />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/user/update/:id",
        element: (
          <ProtectedRoute isAdmin={true}>
            <UpdateUser />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/sales",
        element: (
          <ProtectedRoute isAdmin={true}>
            <AdminSale />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/expense",
        element: (
          <ProtectedRoute isAdmin={true}>
            <AdminExpense />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/products",
        element: (
          <ProtectedRoute isAdmin={true}>
            <AdminProducts />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/formula",
        element: (
          <ProtectedRoute isAdmin={true}>
            <AdminFormula />
          </ProtectedRoute>
        ),
      },

      {
        exact: true,
        path: "/admin/batch",
        element: (
          <ProtectedRoute isAdmin={true}>
            <AdminBatch />
          </ProtectedRoute>
        ),
      },
    ],
  },

  { path: "/auth", exact: true, element: <Auth /> },
  { path: "/password/forgot", exact: true, element: <ForgotPassword /> },
  { path: "/password/reset/:token", exact: true, element: <ResetPassword /> },
]);

export default Route;
