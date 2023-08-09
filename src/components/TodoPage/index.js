import { Card, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useEffect, useState } from "react";

const TODO_LIST = "todoList";
const Todo = () => {
  const getLocalStorage = localStorage.getItem(TODO_LIST);
  const [todo, setTodo] = useState(" ");
  const [list, setList] = useState([]);

  const handleOnChange = ({ target }) => {
    setTodo(target.value);
  };

  const handleTodo = () => {
    if (getLocalStorage) {
      const data = JSON.parse(getLocalStorage);
      const newData = [...data, todo];
      setList(newData);
      localStorage.setItem(TODO_LIST, JSON.stringify(newData));
    } else {
      localStorage.setItem(TODO_LIST, JSON.stringify([todo]));
    }
    // e.preventDefault();
  };

  const handleDelete = (val) => {
    const data = JSON.parse(getLocalStorage);
    const newData = data.filter((valName) => valName !== val);
    setList(newData);
    localStorage.setItem(TODO_LIST, JSON.stringify(newData));
  };
  useEffect(() => {
    if (getLocalStorage) {
      const data = JSON.parse(getLocalStorage);
      setList(data);
    }
  }, [getLocalStorage]);
  return (
    <Container>
      <Container className="container-todo">
        <Row style={{ padding: "2em" }}>
          <Form>
            <h2>Masukan Aktivitas</h2>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                value={todo}
                name="todo"
                type="text"
                placeholder="Enter Activity"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button
              style={{ backgroundColor: "rgb(25, 49, 49)", border: "none" }}
              type="submit"
              onClick={handleTodo}
            >
              submit
            </Button>
          </Form>
        </Row>
      </Container>

      {/* hasil input */}
      <div className="container-list">
        {list.map((val, idx) => {
          return (
            <Card
              key={idx}
              style={{
                padding: ".8em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              {val}
              <Button onClick={() => handleDelete(val)} variant="danger">
                Delete
              </Button>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};
export default Todo;
