import icon from "../images/icon-complete.svg";
export default function Complete(props) {
  function handleClick() {
    props.toggleValid();
    props.resetFormData();
  }
  return (
    <div className="complete">
      <img src={icon} />
      <h1 className="thank-you">Thank you!</h1>
      <h3 className="msg">We've added your card details</h3>
      <button className="continue-button" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
}
