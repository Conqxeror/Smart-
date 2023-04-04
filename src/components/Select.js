import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Select() {
    return (
        <>
            <Card className="text-center position-absolute top-50 start-50 translate-middle">
            <Button variant="success" size="lg">
                Activate
            </Button>
            </Card>
        </>
    )
}