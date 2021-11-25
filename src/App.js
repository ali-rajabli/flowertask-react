import { CartProvider } from "react-use-cart";
import Index from "./pages";

function App() {
  return (
    <CartProvider>
      <Index />
    </CartProvider>
  );
}

export default App;
