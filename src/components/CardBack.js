import cardBackImg from "../images/bg-card-back.png";
export default function CardFront() {
  return (
    <div>
      <img
        src={cardBackImg}
        className="credit-card"
        alt="Back side of credit card"
      />
    </div>
  );
}
