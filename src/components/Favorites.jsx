import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
// import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { removeFromCartAction } from "../redux/actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  favorite: state.favorite.content,
  // cart is the array of books in the cart (state.cart.content)
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (indexToRemove) => {
    dispatch(removeFromCartAction(indexToRemove));
  },
});

const Favorites = ({ favorite, removeFromCart }) => {
  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favorite.map((job, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  removeFromCart(i);
                }}
              >
                <FaTrash />
              </Button>
              <hr></hr>
              {job.title}
              <hr></hr>
              {job.company_name}
              <hr></hr>
              <p>ID: {job._id}</p>

              <hr></hr>

              <Link to={`/${job.company_name}`}>READ MORE</Link>
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          TOTAL:{" "}
          {favorite.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
        </Col>
      </Row>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
