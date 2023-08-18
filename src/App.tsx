import React from "react";
import "./App.css";
import Form from "./components/Form";
import Example from "./components/Example";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="space-y-16">
        <Example />
        <Form />
      </div>
    </>
  );
}

export default App;
