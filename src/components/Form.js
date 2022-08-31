export default function Form(props) {
  const { name, number, year, month, cvc } = props.data;
  const err = props.errMsg;
  const handleChange = props.changeHandler;
  const submitForm = props.submitForm;
  console.log(err);
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
          style={{ borderColor: err.name ? "red" : "" }}
        ></input>
        {err.name && <h5 className="errMsg">{err.name}</h5>}
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
          style={{ borderColor: err.number ? "red" : "" }}
        ></input>
        {err.number && <h5 className="errMsg">{err.number}</h5>}
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
          style={{ borderColor: err.month ? "red" : "" }}
        ></input>
        {err.month && <h5 className="errMsg">{err.month}</h5>}
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
          style={{ borderColor: err.year ? "red" : "" }}
        ></input>
        {err.year && <h5 className="errMsg">{err.year}</h5>}
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
          style={{ borderColor: err.cvc ? "red" : "" }}
        ></input>
        {err.cvc && <h5 className="errMsg">{err.cvc}</h5>}
      </div>
      <button onClick={submitForm}>Confirm</button>
    </form>
  );
}
