import Card from "react-bootstrap/Card";

const Image = ({ image }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
      </Card>

    </div>
  );
};

export default Image;
