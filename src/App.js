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
    Object.keys(formData).forEach(function (key) {
      msgs[key] = validateForm(formData, key);
    });
    setErrMsg(msgs);
  }

  function validateForm(array, key) {
    if (!array[key]) {
      return "Can't be blank";
    } else if (key !== "name" && !onlyNumbers(array[key])) {
      return "Wrong format, numbers only";
    } else if (key === "name" && !onlyLetters(array[key])) {
      return "Wrong format, characters only";
    } else if (key === "name" && array[key].length < 6) {
      return "Name must be at least 6 characters long";
    } else if (key === "number" && array[key].length !== 16) {
      return "Card number must have 16 digits";
    } else if ((key === "month" || key === "year") && array[key].length !== 2) {
      return "Date must have 2 digits";
    } else if (key === "cvc" && array[key].length !== 3) {
      return "CVC must have 3 digits";
    }
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
