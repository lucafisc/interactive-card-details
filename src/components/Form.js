export default function Form() {
  return (
    <form className="form">
      <div className="field holder">
        <label className="label">Cardholder Name</label>
        <input
          className="input"
          type="text"
          placeholder="e.g. Jane Appleseed"
        ></input>
      </div>
      <div className="field number">
        <label className="label">Card Number</label>
        <input
          className="input"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
        ></input>
      </div>
      <div className="field month">
        <label className="label">Exp.Date</label>
        <input className="input" type="number" placeholder="MM"></input>
      </div>
      <div className="field year">
        <label className="label">MM/YY</label>
        <input className="input" type="number" placeholder="YY"></input>
      </div>
      <div className="field cvc">
        {" "}
        <label className="label">CVC</label>
        <input className="input" type="text" placeholder="e.g. 123"></input>
      </div>
    </form>
  );
}
