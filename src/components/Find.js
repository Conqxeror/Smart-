
import { Link } from "react-router-dom";

function Find() {
  return (
    <>
      <Link to="/check">
        <button type="button" class="btn btn-primary position-absolute" data-mdb-ripple-unbound="true" style={{ bottom: '10%', right: '10%' }}>
          Chech Spot?
        </button>
      </Link>
      <div style={{ height: '90vh', width: '100vw' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.3628258357967!2d72.78545751431815!3d19.78220813453563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71ebb9116e5c5%3A0xe33b4d6900b0671c!2sTheem%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1680173881153!5m2!1sen!2sin"
          width="100%"
          height="95%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="myFrame">
        </iframe>
      </div>
    </>
  );
}

export default Find;