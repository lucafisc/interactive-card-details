import cardBackImg from "../images/bg-card-back.png";
export default function CardFront(props) {
  const { cvc } = props.data;
  return (
    <div className="card-container back-container">
      <img
        src={cardBackImg}
        className="back credit-card"
        alt="Back side of credit card"
      />
      <h3 className="security-code">{cvc}</h3>
    </div>
  );
}
