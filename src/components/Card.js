import CardBody from "./CardBody";
import CardImage from "./CardImage";
const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img} />
      <CardBody
        title={props.title}
        text={props.text}
        url={props.url}
      />
    </div>
  );
};
export default Card;