import { Button, Form } from "react-bootstrap";
import "./homePages.css";
import { useState } from "react";

const HomePage = ({ debts, setDebts }) => {
  const [validated, setValidated] = useState(false);
  const [debt, setDebt] = useState({ name: "", phoneNumber: "", cost: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      const newDebt = { id: Date.now(), ...debt };
      setDebts([...debts, newDebt]);
      alert("User qo'shildi! ✅");
      setDebt({ name: "", phoneNumber: "", cost: "" });
      setValidated(false);
      form.reset();
    }
  };

  const handDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  return (
    <div className="container_2">
      <div className="container_1">
        <div className="btn_shpw">
          <h1 className="h11">ADD PEOPLE</h1>
        </div>
        <Form
          className="form_tag"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              onChange={handDebt}
              value={debt.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              required
              onChange={handDebt}
              value={debt.phoneNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cost">
            <Form.Label>Cost</Form.Label>
            <Form.Control
              type="number"
              placeholder="cost"
              required
              onChange={handDebt}
              value={debt.cost}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;
