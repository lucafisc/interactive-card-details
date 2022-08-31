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

  const [errMsg, setErrMsg] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function submitForm(e) {
    e.preventDefault();
    let msgs = {};
    Object.keys(formData).forEach(function (key, index) {
      if (!formData[key]) {
        msgs[key] = "Can't be blank";
      } else if (key !== "name" && !onlyNumbers(formData[key])) {
        msgs[key] = "Wrong format, numbers only";
      } else if (key === "name" && !onlyLetters(formData[key])) {
        msgs[key] = "Wrong format, characters only";
      } else if (key === "name" && formData[key].length < 6) {
        msgs[key] = "Name must be at least 6 characters long";
      } else if (key === "number" && formData[key].length !== 16) {
        msgs[key] = "Card number must have 16 digits";
      } else if (
        (key === "month" || key === "year") &&
        formData[key].length !== 2
      ) {
        msgs[key] = "Date must have 2 digits";
      } else if (key === "cvc" && formData[key].length !== 3) {
        msgs[key] = "CVC must have 3 digits";
      }
    });
    setErrMsg(msgs);
  }
  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  function onlyLetters(str) {
    return /^[a-zA-Z\s]+$/.test(str);
  }
  return (
    <div className="App">
      <Header props={formData} />
      <Form
        data={formData}
        errMsg={errMsg}
        changeHandler={handleChange}
        submitForm={submitForm}
      />
    </div>
  );
}

export default App;
