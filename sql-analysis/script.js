// Sample data
const orders = [
    { customer: 'Alice', amount: 5000, order_date: '2024-03-01' },
    { customer: 'Bob', amount: 8000, order_date: '2024-03-05' },
    { customer: 'Alice', amount: 3000, order_date: '2024-03-15' },
    { customer: 'Charlie', amount: 7000, order_date: '2024-02-20' },
    { customer: 'Alice', amount: 10000, order_date: '2024-02-28' },
    { customer: 'Bob', amount: 4000, order_date: '2024-02-10' },
    { customer: 'Charlie', amount: 9000, order_date: '2024-03-22' },
    { customer: 'Alice', amount: 2000, order_date: '2024-03-30' }
];

// Helper function to format currency
function formatCurrency(amount) {
    return amount.toLocaleString();
}

// 1. Calculate total sales for March 2024
function calculateMarchSales() {
    const marchSales = orders
        .filter(order => order.order_date.startsWith('2024-03'))
        .reduce((sum, order) => sum + order.amount, 0);
    
    document.getElementById('marchTotal').textContent = formatCurrency(marchSales);
}

// 2. Find top-spending customer
function findTopCustomer() {
    const customerTotals = orders.reduce((acc, order) => {
        acc[order.customer] = (acc[order.customer] || 0) + order.amount;
        return acc;
    }, {});

    const topCustomer = Object.entries(customerTotals)
        .sort(([,a], [,b]) => b - a)[0];

    document.getElementById('topCustomer').textContent = topCustomer[0];
    document.getElementById('topSpent').textContent = formatCurrency(topCustomer[1]);
}

// 3. Calculate average order value
function calculateAverageOrder() {
    const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
    const averageOrder = totalAmount / orders.length;
    
    document.getElementById('avgOrder').textContent = formatCurrency(averageOrder);
}

// Run all calculations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    calculateMarchSales();
    findTopCustomer();
    calculateAverageOrder();
}); 