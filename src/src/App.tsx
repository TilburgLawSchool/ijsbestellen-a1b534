import React, { useState } from "react";

interface Flavor {
  id: number;
  name: string;
  emoji: string;
  description: string;
  price: number;
}

const flavors: Flavor[] = [
  { id: 1, name: "Vanilla", emoji: "🍦", description: "Classic creamy vanilla", price: 4.99 },
  { id: 2, name: "Chocolate", emoji: "🍫", description: "Rich chocolate delight", price: 5.49 },
  { id: 3, name: "Strawberry", emoji: "🍓", description: "Sweet strawberry swirl", price: 4.79 },
  { id: 4, name: "Mint Chocolate Chip", emoji: "🍃", description: "Cool mint with chocolate chips", price: 5.99 },
  { id: 5, name: "Cookies & Cream", emoji: "🍪", description: "Crushed cookies in creamy vanilla", price: 5.29 },
  { id: 6, name: "Rocky Road", emoji: "🌋", description: "Chocolate with marshmallows and nuts", price: 5.79 },
];

const App: React.FC = () => {
  const [cart, setCart] = useState<Flavor[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (flavor: Flavor) => {
    setCart([...cart, flavor]);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Sweet Delights Ice Cream</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {flavors.map((flavor) => (
            <div key={flavor.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-2">
                <span role="img" aria-label={flavor.name} className="text-4xl mr-2">{flavor.emoji}</span>
                <h2 className="text-xl font-semibold">{flavor.name}</h2>
              </div>
              <p className="text-gray-600 mb-2">{flavor.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-purple-600">${flavor.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(flavor)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <li key={index} className="py-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <span role="img" aria-label={item.name} className="text-2xl mr-2">{item.emoji}</span>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-purple-600">
                    ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={placeOrder}
                  className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors font-bold text-lg"
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>

        {orderPlaced && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8">
            <div className="flex items-center">
              <span role="img" aria-label="checkmark" className="text-xl mr-2">✅</span>
              <p className="font-bold">Order Placed!</p>
            </div>
            <p>Your ice cream will be delivered in 30-45 minutes. Thank you for your order!</p>
          </div>
        )}

        <div className="bg-purple-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Delivery Areas</h3>
              <p className="text-gray-700">We deliver to most areas within a 10-mile radius of our shop.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Delivery Fee</h3>
              <p className="text-gray-700">$3.99 for orders under $20, free delivery for orders $20 or more.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Delivery Time</h3>
              <p className="text-gray-700">30-45 minutes during peak hours, 45-60 minutes during off-peak hours.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Payment Options</h3>
              <p className="text-gray-700">Credit/debit cards, mobile payments, and cash (for in-store pickup).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;