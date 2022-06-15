import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaSplotch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { setUsernameAction } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    cartLength: state.favorite.content.length,
    username: state.user.name,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUsername: (name) => {
    dispatch(setUsernameAction(name));
  },
});

const CartIndicator = ({ cartLength, username, setUsername }) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="ml-auto mt-2">
      {username ? (
        <Button color="primary" onClick={() => navigate("/favorites")}>
          <FaSplotch />
          <span className="ml-2">{cartLength}</span>
        </Button>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(inputValue);

            setUsername(inputValue);
          }}
        >
          <Form.Control
            placeholder="Log in here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator);
