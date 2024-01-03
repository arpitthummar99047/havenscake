import React from "react";

const ShoppingCart = () => {
  const products = [
    { id: 1, name: "Product 1", price: 20.0, quantity: 2 },
    { id: 2, name: "Product 2", price: 15.0, quantity: 1 },
    // Add more products as needed
  ];

  const calculateTotal = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <strong>Total</strong>
            </td>
            <td>
              <strong>${calculateTotal()}</strong>
            </td>
          </tr>
        </tfoot>
      </table>

      <a href="#" className="checkout-btn">
        Proceed to Checkout
      </a>
    </div>
  );
};

export default ShoppingCart;
