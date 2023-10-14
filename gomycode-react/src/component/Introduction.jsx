import Greeting from "./Greeting";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Introduction = (props) => {
  return (
    <div className="py-4 px-3 mx-auto">
      <Greeting greetings="How are you doing" />
      <p>{props.text}</p>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Introduction;
