import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="App">
      <Header props={formData} />
      <Form
        data={formData}
        changeHandler={handleChange}
        submitForm={submitForm}
      />
    </div>
  );
}

export default App;
