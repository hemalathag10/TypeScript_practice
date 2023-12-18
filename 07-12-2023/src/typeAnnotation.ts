// TYPE ANNOTATION
const userName: string = 'John';
const age: number = 25;
const names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];


// OBJECT
const User: {
    user_name: string;
    user_age: number;
} = {
    user_name: userName,
    user_age: age
};
console.log(User.user_name, "  ", User.user_age)



// ARRAY

const employee_names: string[] = [];
employee_names.push("hema", "abc", "def")

for (let index = 0; index < employee_names.length; index++) {
    console.log(employee_names[index])
}



// REDUCE
// SHOPPING CART EXAMPLE

// Array of shopping cart items
const cartItems = [
    { id: 1, name: 'Laptop', price: 1200, quantity: 2, inStock: true },
    { id: 2, name: 'Mouse', price: 20, quantity: 1, inStock: false },
    { id: 3, name: 'Keyboard', price: 50, quantity: 3, inStock: true },
    { id: 4, name: 'Monitor', price: 300, quantity: 1, inStock: true },
];


// REDUCE: Calculate the total price of items in the shopping cart
const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    if (currentItem.inStock) {
        return accumulator + currentItem.price * currentItem.quantity;
    } else {
        return accumulator;
    }
}, 0);

console.log("Total Price:", totalPrice);


// MAP: Update the quantity of each item in the shopping cart
const updatedQuantities = cartItems.map(item => {
    return { ...item, quantity: item.quantity + 1 };
});
console.log("Updated Quantities:", updatedQuantities);



// FILTER: Remove items that are out of stock from the shopping cart
const inStockItems = cartItems.filter(item => item.inStock);
console.log("In Stock Items:", inStockItems);


// FOREACH
cartItems.forEach(item => {
    console.log(item);
});



// TUPLE
type CartItem = [string, number, number, boolean];

// Array of shopping cart items as tuples
const cart_items: CartItem[] = [
    ['Laptop', 1200, 2, true],
    ['Mouse', 20, 1, false],
    ['Keyboard', 50, 3, true],
    ['Monitor', 300, 1, true],
];



// ENUM DEFINITION
enum ItemStatus {
    InStock = 'IN_STOCK',
    OutOfStock = 'OUT_OF_STOCK',
}

// INTERFACE FOR SHOPPING CART ITEM
interface Cart_Item {
    product_name: string;
    price: number;
    quantity: number;
    status: ItemStatus;
}

// ARRAY OF SHOPPING CART ITEMS
const cart_Items: Cart_Item[] = [
    { product_name: 'Laptop', price: 1200, quantity: 2, status: ItemStatus.InStock },
    { product_name: 'Mouse', price: 20, quantity: 1, status: ItemStatus.OutOfStock },
    { product_name: 'Keyboard', price: 50, quantity: 3, status: ItemStatus.InStock },
    { product_name: 'Monitor', price: 300, quantity: 1, status: ItemStatus.InStock },
];

// FILTER: REMOVE ITEMS THAT ARE OUT OF STOCK FROM THE SHOPPING CART
const in_stock_items: Cart_Item[] = cart_Items.filter(item => item.status === ItemStatus.InStock);

console.log("In Stock Items:", in_stock_items);

