import React, { useState } from "react";
import "./Form.css";
import Modal from "./Modal";

function LoanForm() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmoloyee: false,
    salaryRange: "",
  });
  function handleFormSubmit(e) {
    e.preventDefault();
    const { age, phoneNumber } = loanInput;
    if (age < 18 || age > 100) {
      setErrorMsg("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMsg("Phone Number ");
    }
    setShowModal(true);
  }
  const btnIsdisabled =
    loanInput.name === "" ||
    loanInput.phoneNumber === "" ||
    loanInput.age === "";

  return (
    <div
      className="container"
      onClick={() => {
        if (showModal) {
          setShowModal(false);
        }
      }}
      style={{ flexDirection: "column" }}
    >
      <form id="form" className="container" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />
        <label>Name</label>
        <input
          type="text"
          value={loanInput.name}
          onChange={(e) => {
            setLoanInput({ ...loanInput, name: e.target.value });
          }}
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={loanInput.phoneNumber}
          onChange={(e) => {
            setLoanInput({ ...loanInput, phoneNumber: e.target.value });
          }}
        />
        <label>Age</label>
        <input
          type="text"
          value={loanInput.age}
          onChange={(e) => {
            setLoanInput({ ...loanInput, age: e.target.value });
          }}
        />
        <label>Are you Employee?</label>
        <input
          type="checkbox"
          style={{ marginTop: "10px" }}
          checked={loanInput.isEmoloyee}
          onChange={(e) => {
            setLoanInput({ ...loanInput, isEmoloyee: e.target.checked });
          }}
        />
        <label>Salary</label>
        <select
          style={{ marginTop: "10px" }}
          value={loanInput.salaryRange}
          onChange={(e) => {
            setLoanInput({ ...loanInput, salaryRange: e.target.value });
          }}
        >
          <option>$50,000</option>
          <option>$70,000</option>
          <option>$90,000</option>
        </select>
        <button
          className={btnIsdisabled ? "disabled" : ""}
          id="loanSubmit"
          style={{ marginTop: "10px", padding: "5px" }}
          onClick={handleFormSubmit}
          disabled={btnIsdisabled}
        >
          Submit
        </button>
      </form>
      <Modal errorMsg={errorMsg} isVisible={showModal} />
    </div>
  );
}

export default LoanForm;
