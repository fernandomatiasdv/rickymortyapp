import CardBody from "./CardBody";
import CardName from "./CardName";
import "./style.css";

export default function Card(props) {

  const { id, name, status, image } = props;

  return (
    <div className="card">
      <CardName name={name} />
      <CardBody id={id} status={status} image={image} />
    </div>
  );
}
