class ProductValidator {
    constructor() {
        this.apiUrl = "https://fakestoreapi.com/products";
        this.defects = [];
    }

    async validateProducts() {
        try {
            // Make API request
            const response = await fetch(this.apiUrl);
            
            // Check response status
            if (!response.ok) {
                this.defects.push({
                    type: "API_ERROR",
                    message: `API returned status code ${response.status}`
                });
                return this.defects;
            }

            const products = await response.json();
            
            // Validate each product
            for (const product of products) {
                this.validateProduct(product);
            }

            return this.defects;

        } catch (error) {
            this.defects.push({
                type: "REQUEST_ERROR",
                message: `Failed to make request: ${error.message}`
            });
            return this.defects;
        }
    }

    validateProduct(product) {
        // Check title
        if (!product.title) {
            this.defects.push({
                type: "EMPTY_TITLE",
                productId: product.id,
                message: "Product title is empty"
            });
        }

        // Check price
        if (product.price < 0) {
            this.defects.push({
                type: "NEGATIVE_PRICE",
                productId: product.id,
                message: `Product has negative price: ${product.price}`
            });
        }

        // Check rating
        if (product.rating?.rate > 5) {
            this.defects.push({
                type: "INVALID_RATING",
                productId: product.id,
                message: `Product rating exceeds 5: ${product.rating.rate}`
            });
        }
    }
}

async function main() {
    const validator = new ProductValidator();
    const defects = await validator.validateProducts();

    console.log("\nAPI Testing Results:");
    console.log("=".repeat(50));
    
    if (defects.length === 0) {
        console.log("No defects found! All products are valid.");
    } else {
        console.log(`Found ${defects.length} defects:`);
        for (const defect of defects) {
            console.log(`\nType: ${defect.type}`);
            console.log(`Message: ${defect.message}`);
            if (defect.productId) {
                console.log(`Product ID: ${defect.productId}`);
            }
        }
    }
}

// Run the tests
main().catch(console.error); 