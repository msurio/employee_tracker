//dependencies:
var mysql = require("mysql");
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//create connection to db:
var connection = mysql.createConnection(connectionConfig);

connection.connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    //greet + start:
    console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
    start();
});


//create the start function:
function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "MAIN MENU",
            choices: [
                "View all employees",
                "View all roles",
                "View all departments",
                "View all employees by manager",
                "Add employee",
                "Add role",
                "Add department",
                "Update employee role",
                "Update employee manager",
                "Delete employee",
                "Delete role",
                "Delete department",
                "View department budgets"
            ]
        }).then((answer) => {
            switch (answer.action) {
                case "View all employees":
                    viewAllEmp();
                    break;

                case "View all department":
                    viewDept();
                    break;

                case "View all role":
                    viewRole();
                    break;

                case "Add employee":
                    addEmp();
                    break;

                case "Add department":
                    addDept();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Update employee role":
                    updateEmpRole();
                    break;

                case "Update employee manager":
                    updateEmpMngr();
                    break;

                case "View all employees by manager":
                    viewAllEmpByMngr();
                    break;

                case "Delete employee":
                    deleteEmp();
                    break;

                case "View department budgets":
                    viewDeptBudget();
                    break;

                case "Delete role":
                    deleteRole();
                    break;

                case "Delete department":
                    deleteDept();
                    break;
            }
        });
}



//CRUD:

//Create:
    //Employee:
function addEmp() {
    inquirer.prompt([
        {
            // Prompt user of their first name
            name: "firstName",
            type: "input",
            message: "First name: ",
            // Validate field is not blank
            validate: function (input) {
                if (input === "") {
                    console.log("**FIELD REQUIRED**");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        {
            // Prompt user of their last name
            name: "lastName",
            type: "input",
            message: "Lastname name: ",
            // Validate field is not blank
            validate: function (input) {
                if (input === "") {
                    console.log("**FIELD REQUIRED**");
                    return false;
                }
                else {
                    return true;
                }
            }
        }]).then(function (answer) {
            // Add employee
            connection.query(
                'INSERT INTO employee SET ?', {
                firstName: answer.first_name,
                lastName: answer.last_name
            },
                (error, data) => {
                    if (error) throw error;

                    // Confirm employee has been added
                    console.log(`\n EMPLOYEE ${answer.firstName} ${answer.lastName} ADDED...\n `);
                    start();
                })
        })
}

    //Read:
function viewDept() {
    // prints departments to screen
    connection.query(
        'query',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            // logic goes here
        });
};

function viewRole() {
    // prints roles to screen
    connection.query(
        'query',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            // logic goes here
        });
};

function viewAllEmp(); {
    // prints current roster to screen use console.table
    connection.query(
        'SELECT * FROM employees',
        [queryParameters],
        function (error, data) {
            if (error) throw error;
            console.table(employees) // display table??? 
        });
};



