import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <Card className="text-center position-absolute top-50 start-50 translate-middle">
      <Card.Header>Hello..!</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to our services for you.</Card.Title>
        <Card.Text>
         We provide you with finding a parking spot faster for your vehicle on your fingertip. Our aim is to provide you comfort and security that you need.
        </Card.Text>
        <Link  to="/find">
        <Button variant="primary">Let`s go find it.</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">Many features coming sooooon....</Card.Footer>
    </Card>
  );
}

export default Welcome;