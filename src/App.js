import React, { useState } from "react";

// Functional Component with Props
function Greeting(props) {
  return <h2>Hello, {props.name} </h2>;
}

// List Component demonstrating "Keys"
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        // unique "key" prop for each list element
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Form Component demonstrating State + Events + Controlled Inputs
function UserForm() {
  const [name, setName] = useState(""); // State
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (name && email) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>React Form Example</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Event + State update
        />
        <br /><br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Event + State update
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ color: "green" }}>
          ✅ Form submitted! Name: {name}, Email: {email}
        </p>
      )}
    </div>
  );
}

//Parent Component - combines all concepts
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>React Concepts Demo</h1>

      {/* JSX + Components + Props */}
      <Greeting name="John" />
      <Greeting name="Emma" />

      {/* Keys Example */}
      <h3>Fruits List (Keys Example)</h3>
      <ItemList items={fruits} />

      {/* Forms + State + Events */}
      <UserForm />
    </div>
  );
}

export default App;
