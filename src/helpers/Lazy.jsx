// IMPORTS -
import { lazy } from "react";

// USER ROUTES -
export const Home = lazy(() => import("../pages/Home"));
export const Raw = lazy(() => import("../pages/Raw"));
export const Details = lazy(() => import("../pages/Details"));
export const Profile = lazy(() => import("../pages/Profile"));
export const ResetPassword = lazy(() => import("../pages/ResetPassword"));
export const Expense = lazy(() => import("../pages/Expense"));
export const Formula = lazy(() => import("../pages/Formula"));
export const Batches = lazy(() => import("../pages/Batches"));
export const Sales = lazy(() => import("../pages/Sales"));

// ADMIN ROUTES -
export const Users = lazy(() => import("../pages/admin/Users"));
export const UpdateUser = lazy(() => import("../pages/admin/UpdateUser"));
export const AdminSale = lazy(() => import("../pages/admin/AdminSale"));
export const AdminExpense = lazy(() => import("../pages/admin/AdminExpense"));
export const AdminProducts = lazy(() => import("../pages/admin/AdminProducts"));
export const AdminFormula = lazy(() => import("../pages/admin/AdminFormula"));
export const AdminBatch = lazy(() => import("../pages/admin/AdminBatch"));