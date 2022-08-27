import cardFrontImg from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
export default function CardFront() {
  return (
    <div className="card-container front-container">
      <img
        src={cardFrontImg}
        className="front credit-card"
        alt="Front side of credit card"
      />
      <img src={cardLogo} className="logo" alt="Credit card logo" />
      <h1 className="card-number">0000 0000 0000 0000</h1>
      <h2 className="card-holder">Jane Appleseed</h2>
      <h2 className="exp-date">00/00</h2>
    </div>
  );
}
