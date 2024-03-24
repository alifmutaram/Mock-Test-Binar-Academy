import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavbarMenu = () => {
  return (
    <>
      <Navbar
        style={{ display: "flex", justifyContent: "space-between" }}
        className="nav-bar"
      >
        <Navbar.Brand>
          <Link to="/todo" className="nav-home">
            Todo App
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link to="/sign-in" className="nav-log">
              Sign In
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default NavbarMenu;
