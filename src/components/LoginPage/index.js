import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavbarMenu from "../NavbarMenu";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContextLogin } from "../../context/authLogin";
import "./style.css";
const LoginPage = () => {
  const [postAuthLogin, dataAuthLogin] = useContext(AuthContextLogin);
  // console.log({ dataAuthLogin });

  const handleButtonLogin = (e) => {
    e.preventDefault();
    const { number } = e.target.elements;
    const valNum = number.value;
    console.log(valNum);
    // console.log({ number: number.value });
    postAuthLogin({ valNum });
  };
  return (
    <>
      <NavbarMenu />
      <Container fluid="md" className="container-login">
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Form onSubmit={handleButtonLogin}>
            <h2>Login</h2>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control
                name="number"
                type="text"
                placeholder="Enter Number"
              />
            </Form.Group>

            <Button
              type="submit"
              style={{ backgroundColor: "rgb(25, 49, 49)", border: "none" }}
            >
              Sign In
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};
export default LoginPage;
