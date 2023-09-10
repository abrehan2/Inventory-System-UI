> This is a front-end of the [Inventory-System-API](https://github.com/abrehan2/Inventory-System-API.git)

https://github.com/abrehan2/Inventory-System-UI/assets/100872683/755975a1-b978-4a92-90d4-3d0992756032

### Run the commands below to get started ⚙️
```nodejs
  git clone https://github.com/abrehan2/Inventory-System-UI.git
```
```nodejs
  npm install
```

# Acknowledgements 🔎
### `Role: User`

| Feature           | Description                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Authentication    | Users need to register their account and then log in to use the web application                |
| Profile Update    | Users can update their profile                                                                  |
| Reset Password    | Users can reset their password by receiving a link in their email                                |
| Formula Creation  | Users can create a batch of available formulas, which can then be utilized to update stock for raw materials |
| Expense           | Users can create, track, and export their expense records                                      |
| Sales             | Users can create, track, and export their sales records                                        |

### `Role: Admin`
| Feature             | Description                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| User Management     | Admins can update or delete a user                                                                             |
| Product Management  | Admins can create, update, and delete raw materials                                                            |
| Update Formula Status | Admins can `accept` a formula to create its batch or `reject` it, leading to formula deletion if rejected |
| Formula Management  | Admins can update and delete formulas and their batches                                                        |
| Expense Management  | Admins can track, update, and delete expense records                                                            |
| Sales Management    | Admins can track, update, and delete sales records

# Front-End Structure 🛠
    .
    ├── public          # Root folder that provides a context for React.js to render      
    |   ├── index.html          
    |
    ├── src             # Folder containing JavaScript code                     
    │   └── components  # Stores components to be rendered throughout the application
    │   └── helpers     # Stores information about routes, the data to be rendered, and the constants for Redux actions
    │   └── pages       # Stores all the pages to be rendered throughout the application
    │   └── redux       # Stores all the reducers and their actions
    │   └── routes      # Stores all the page routes
    │   └── styles      # Stores all the CSS styles to be rendered throughout the application
    |   ├── App.js      # Root component
    |   ├── index.js    # Entry point 
    └──   
