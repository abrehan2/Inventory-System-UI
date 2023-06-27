// IMPORTS -
import { Card } from "antd";
import { Link } from "react-router-dom";
import "../styles/rawCard.css";

const { Meta } = Card;
const RawCard = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product?._id}`}>
        <Card
          style={{ width: 300, zIndex: -1 }}
          cover={<img alt={`${product?.name}`} src={`${product?.image.url}`} />}
        >
          <Meta
            title={`${product?.name}`}
            description={`Stock: ${product?.stock}`}
          />
        </Card>
      </Link>
    </>
  );
};

export default RawCard;
