import './App.css';
import Product from "./components/Products/Product"
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container>
      <div className="App">
        <Product />
      </div>
    </Container>
  );
}

export default App;
