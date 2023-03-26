## **_SQL Fundamentals_**

### **_Select Query_**

    select * from table;

    select column1,column2,.. from table;

### **_Update Query_**

    update table set column where value = $('value');

### **_Insert Query_**

    insert into table(column1,column2,column3,column4) values ($('value1'),$('value2'),$('value3'),$('value4'));

### **_Delete Query_**

    delete from table where condition;

### **_Truncate & Drop_**

    Truncate table tablename; // deletes all the info inside the table
    Drop table; // deletes the table

### **_Foreign Key_**

Referring to primary key from another table

    SELECT students.name, grades.grade
    FROM students
    JOIN grades ON students.grade_id = grades.id;

### **_Group By_**

Group by will combine all the values based on the grouped column

    SELECT customer_id, (SELECT MAX(total) FROM orders) AS max_total
    FROM orders
    GROUP BY customer_id;

Groups the max based on the customer_id

### **_Sub Queries_**

Queries within a query is called the subqueries

    SELECT order_id, customer_id, order_date, total
    FROM orders
    WHERE customer_id IN (SELECT customer_id FROM customers
    WHERE city IN (SELECT country_name FROM countries WHERE country_id = 1));

### **_Join Queries_**

Join is used to join 2 tables together based on a column

    SELECT o.order_id, o.customer_id, c.customer_name
    FROM orders o
    JOIN customers c ON o.customer_id = c.customer_id;
