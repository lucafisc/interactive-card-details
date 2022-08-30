export default function Form(props) {
  const { name, number, year, month, cvc } = props.data;
  const handleChange = props.changeHandler;
  const submitForm = props.submitForm;

  return (
    <form className="form">
      <div className="field holder">
        <label className="label">Cardholder Name</label>
        <input
          name="name"
          onChange={handleChange}
          value={name}
          className="input"
          type="text"
          placeholder="e.g. Jane Appleseed"
          maxLength={25}
        ></input>
      </div>
      <div className="field number">
        <label className="label">Card Number</label>
        <input
          name="number"
          onChange={handleChange}
          value={number}
          className="input"
          type="tel"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={16}
        ></input>
      </div>
      <div className="field month">
        <label className="label">Exp.Date</label>
        <input
          name="month"
          onChange={handleChange}
          value={month}
          className="input"
          type="tel"
          placeholder="MM"
          maxLength={2}
        ></input>
      </div>
      <div className="field year">
        <label className="label">MM/YY</label>
        <input
          name="year"
          onChange={handleChange}
          value={year}
          className="input"
          type="tel"
          placeholder="YY"
          maxLength={2}
        ></input>
      </div>
      <div className="field cvc">
        {" "}
        <label className="label">CVC</label>
        <input
          name="cvc"
          onChange={handleChange}
          value={cvc}
          className="input"
          type="tel"
          placeholder="e.g. 123"
          maxLength={3}
        ></input>
      </div>
      <button onClick={submitForm}>Confirm</button>
    </form>
  );
}
