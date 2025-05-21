# API Testing: Product Data Validation

## Task Description
Develop automated tests to validate data provided by a public API to detect errors and anomalies.

## API Endpoint
- Base URL: https://fakestoreapi.com/products
- Method: GET

## Test Objectives
1. Verify server response code (expected 200)
2. Validate product attributes:
   - `title` (name) - must not be empty
   - `price` (price) - must not be negative
   - `rating.rate` - must not exceed 5
3. Generate a list of products containing defects

## Tools
- ReqBin (reqbin.com) or Postman for executing API requests
- Test automation framework (to be chosen)

## Expected Output
A report containing:
1. API response status
2. List of products with validation errors
3. Summary of defects found

## Setup
1. Install required testing tools
2. Configure API endpoint
3. Run test suite
4. Review test results 