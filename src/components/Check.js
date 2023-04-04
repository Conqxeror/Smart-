import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Check() {
    return (
        <>
            <Card className="text-center position-absolute top-50 start-50 translate-middle">
                <div className="d-grid gap-2">
                    <Link to='/select/1'>
                        <Button variant="primary" size="lg" disabled>
                            Select this Spot.
                        </Button>
                    </Link>
                    <Link to='/select/2'>
                        <Button variant="primary" size="lg">
                            Select this Spot.
                        </Button>
                    </Link>
                    <Link to='/select/3'>
                        <Button variant="primary" size="lg" disabled>
                            Select this Spot.
                        </Button>
                    </Link>
                    <Link to='/select/4'>
                        <Button variant="primary" size="lg" disabled>
                            Select this Spot.
                        </Button>
                    </Link>
                </div>
            </Card>
        </>
    )
}

export default Check;