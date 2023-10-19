import Image from "./Image";
import Description from "./Description";
import Price from "./Price";
import Name from "./Name";
import products from "./product.js";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CardBody from "react-bootstrap/esm/CardBody";
import NavbarContainer from "./components/NavbarContainer";


const App = () => {

  const name = "Oyerinde Samuel";
  return (
    <div>
      <NavbarContainer />
   
      {products.map((item, index) => (
        <Card key={index} className="d-flex">
          <Card.Body className="d-flex justify-content-between ">
              <Image image={item.image} />
              <Card.Title variant="primary"><Name name={item.name} /></Card.Title>
              <Price price={item.price} />
              <Description description={item.description} />
            
          </Card.Body>
        </Card>
      ))}
      <Card.Body>
      <Card.Title variant="primary" className="text-center p-4 fw-bold fs-1">Hello,{name}</Card.Title>
      </Card.Body>
    </div>
  );
};

export default App;
