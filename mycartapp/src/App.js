import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import './cart.css';

function App() {
  const cartItems = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 30 }
  ];
  return (
    <div className="App">
      <h1>E-commerce Website</h1>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;
