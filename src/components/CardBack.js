import cardBackImg from "../images/bg-card-back.png";
export default function CardFront() {
  return (
    <div className="card-container back-container">
      <img
        src={cardBackImg}
        className="back credit-card"
        alt="Back side of credit card"
      />
      <h3 className="security-code">000</h3>
    </div>
  );
}
