// PARTIALS -
const serverRoute = "https://inventory-system-api.vercel.app/hi-class-feed";

// RAW MATERIALS -
export const GET_RAW_MATERIALS = `${serverRoute}/products`;
export const GET_RAW_DETAILS = `${serverRoute}/product`;

// USER -
export const LOGIN = `${serverRoute}/login`;
export const REGISTER = `${serverRoute}/register`;
export const LOAD_USER = `${serverRoute}/me`;
export const LOGOUT = `${serverRoute}/logout`;
export const UPDATE_PROFILE = `${serverRoute}/me/update`;
export const UPDATE_PASSWORD = `${serverRoute}/password/update`;
export const FORGOT_PASSWORD = `${serverRoute}/password/forgot`;
export const RESET_PASSWORD = `${serverRoute}/password/reset`;

// EXPENSE -
export const CREATE_EXPENSE = `${serverRoute}/expense/create`;
export const GET_ALL_EXPENSE = `${serverRoute}/expense/all`;

// FORMULA -
export const GET_FORMULA_PRODUCTS = `${serverRoute}/products/formula`;
export const CREATE_FORMULA = `${serverRoute}/formula/create`;
export const GET_ALL_USER_FORMULA = `${serverRoute}/formula/me`;
export const CREATE_BATCH = `${serverRoute}/formula/batch/create`;
export const GET_ALL_BATCHES = `${serverRoute}/batch`;
export const USE_BATCH = `${serverRoute}/batch/use`;

// SALES -
export const CREATE_SALES = `${serverRoute}/sale/create`;
export const GET_SALES = `${serverRoute}/sale`;

// ADMIN -
export const GET_ADMIN_USERS = `${serverRoute}/admin/users`;
export const USER_ACTION = `${serverRoute}/admin/user`;
export const ADMIN_SALES = `${serverRoute}/sale/admin/all`;
export const DELETE_ADMIN_SALE = `${serverRoute}/sale/admin`;
export const GET_ADMIN_EXPENSE = `${serverRoute}/admin/expense/all`;
export const ADMIN_EXPENSE = `${serverRoute}/admin/expense`;
export const ADMIN_PRODUCTS = `${serverRoute}/admin/products`;
export const ADMIN_ACTION = `${serverRoute}/admin/product`;
export const CREATE_PRODUCT = `${serverRoute}/admin/product/new`;
export const GET_ADMIN_FORMULA = `${serverRoute}/admin/formula`;
export const FORMULA_STATUS = `${serverRoute}/admin/formula/status`;
export const ADMIN_FORMULA_ACTION = `${serverRoute}/admin/formula`;
export const ADMIN_BATCHES = `${serverRoute}/admin/batches`;
export const ADMIN_BATCH_ACTION = `${serverRoute}/admin/batch`;
