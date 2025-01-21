# Simple E-Commerce Cart

A simple e-commerce cart application built with React. This app allows users to browse products, add them to a cart, modify quantities, and view the total price.

## Features

- Display a list of available products with their names, prices, and an "Add to Cart" button.
- Add products to the cart, increasing the quantity if they are already in the cart.
- View a detailed cart summary showing:
  - Product names
  - Prices
  - Quantities
  - Total price for all items
- Remove items from the cart or adjust their quantities.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS (for styling and layout)

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.

### How to Run the App

1. **Clone this repository:**

   ```bash
   git clone https://github.com/louis479/e-commerce-cart.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd e-commerce-cart
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app:**

   ```bash
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000` to view the application.

## Bonus Features

- **Sorting:**
  - Sort products by name or price in ascending or descending order.
- **Persisted State:**
  - Save the cart state locally using `localStorage` so that it remains intact after a page refresh.
- **Search Functionality:**
  - Filter products by name using a search bar.
- **Empty Cart Message:**
  - Display a user-friendly message when the cart is empty.

## Sample Data Used

The app uses the following sample product data:

```json
[
  { "id": 1, "name": "T-Shirt", "price": 20 },
  { "id": 2, "name": "Jeans", "price": 40 },
  { "id": 3, "name": "Sneakers", "price": 60 },
  { "id": 4, "name": "Hat", "price": 15 },
  { "id": 5, "name": "Socks", "price": 5 }
]
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy Hacking! 🚀
