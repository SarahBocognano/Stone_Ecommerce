import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import StripeContainer from "./stripe/StripeContainer";
import CheckOutForm from "./stripe/CheckOutForm";

const App = () => {
  return (
    <div>
      <h1>STRIPE TEST</h1>
      <StripeContainer />
    </div>
  )
    
} 

export default App;