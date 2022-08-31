import cardFrontImg from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
export default function CardFront(props) {
  const { name, number, year, month } = props.data;
  return (
    <div className="card-container front-container">
      <img
        src={cardFrontImg}
        className="front credit-card"
        alt="Front side of credit card"
      />
      <img src={cardLogo} className="logo" alt="Credit card logo" />
      <h1 className="card-number">
        <span className="four-digits">
          {number[0]}
          {number[1]}
          {number[2]}
          {number[3]}
        </span>
        <span className="four-digits">
          {number[4]}
          {number[5]}
          {number[6]}
          {number[7]}
        </span>
        <span className="four-digits">
          {number[8]}
          {number[9]}
          {number[10]}
          {number[11]}
        </span>
        <span className="four-digits">
          {number[12]}
          {number[13]}
          {number[14]}
          {number[15]}
        </span>
      </h1>
      <h2 className="card-holder">{name}</h2>
      <h2 className="exp-date">
        {month}/{year}
      </h2>
    </div>
  );
}
