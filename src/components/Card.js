import CardBody from "./CardBody";
import CardImage from "./CardImage";
const Card = ({title, text, url, img}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={img} />
      <CardBody
        title={title}
        text={text}
        url={url}
      />
    </div>
  );
};
export default Card;
