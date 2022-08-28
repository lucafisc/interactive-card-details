import background from "../images/bg-main-mobile.png";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function Header({ props }) {
  return (
    <div className="header">
      <img src={background} />
      <CardBack data={props} />
      <CardFront data={props} />
    </div>
  );
}
