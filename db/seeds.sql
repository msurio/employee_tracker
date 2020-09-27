USE employees_DB;

----- Department Seeds -----

INSERT INTO department (id, name)
VALUES (1, "Retail");

INSERT INTO department (id, name)
VALUES (2, "Brand Experience");

INSERT INTO department (id, name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, name)
VALUES (4, "IT");

----- Role Seeds -----

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Stylist", 47353, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Store  Manager", 51180, 1);


INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Art Director", 89760, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Entrepreneur in California", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 82159, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "System Adminstrator", 82050, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Full Stack Developer", 122024, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "IT Manager", 123869, 4);

----- Employees Seeds -----

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "John", "Doe", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Jane", "Doe", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Drake", "Bell", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Josh", "Bell", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Charlene", "Dela Cruz", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Kyle", "Danan", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Lani", "Aguilar", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Hector", "Cardona", 5, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Marc Anthony", "Surio", 7, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Rick", "Astley", 8, 10);