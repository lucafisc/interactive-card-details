import cardFrontImg from "../images/bg-card-front.png";
export default function CardFront() {
  return (
    <div>
      <img
        src={cardFrontImg}
        className="front credit-card"
        alt="Front side of credit card"
      />
    </div>
  );
}
