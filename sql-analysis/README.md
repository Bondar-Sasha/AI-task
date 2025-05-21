# SQL Analysis: Online Store Sales Data

## Task Description
Write SQL queries to analyze sales data for an online store.

## Database Schema
```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);
```

## Sample Data
```sql
INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');
```

## Tasks
1. Calculate the total sales volume for March 2024
   - Expected result: 27,000

2. Find the customer who spent the most overall
   - Expected result: Alice (20,000)

3. Calculate the average order value for the last three months
   - Expected result: 6,000

## Tools
- SQLite Online
- SQL query editor

## Setup
1. Open SQLite Online
2. Create the database and table using the provided schema
3. Insert the sample data
4. Execute the required queries 