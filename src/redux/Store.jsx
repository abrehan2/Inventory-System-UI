// IMPORTS -
import { configureStore } from "@reduxjs/toolkit";
import { rawDetailsReducer, rawReducer } from "./reducers/rawReducer";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
} from "./reducers/userReducer";
import { expenseReducer } from "./reducers/expenseReducer";
import { formulaReducer } from "./reducers/formulaReducer";
import { salesReducer } from "./reducers/saleReducer";
import { adminUsersReducer } from "./reducers/admin-reducers/adminUsersReducer";
import { adminSalesReducer } from "./reducers/admin-reducers/adminSalesReducer";
import { adminExpenseReducer } from "./reducers/admin-reducers/adminExpenseReducer";
import { adminProductReducer } from "./reducers/admin-reducers/adminProductReducer";
import { adminFormulaReducer } from "./reducers/admin-reducers/adminFormulaReducer";
import { adminBatchReducer } from "./reducers/admin-reducers/adminBatchReducer";

const Store = configureStore({
  reducer: {
    GET_ALL_RAW_MATERIALS: rawReducer,
    GET_RAW_DETAILS: rawDetailsReducer,
    USER: userReducer,
    PROFILE: profileReducer,
    FORGOT_PASSWORD: forgotPasswordReducer,
    EXPENSE: expenseReducer,
    FORMULA: formulaReducer,
    SALES: salesReducer,
    ADMIN_USERS: adminUsersReducer,
    ADMIN_SALES: adminSalesReducer,
    ADMIN_EXPENSE: adminExpenseReducer,
    ADMIN_PRODUCT: adminProductReducer,
    ADMIN_FORMULA: adminFormulaReducer,
    ADMIN_BATCHES: adminBatchReducer,
  },
});

export default Store;
