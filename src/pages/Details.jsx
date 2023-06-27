// IMPORTS
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRawDetails, clearErrors } from "../redux/actions/rawAction";
import { Link, useParams } from "react-router-dom";
import { Button as Btn } from "antd";
import * as FaIcons from "react-icons/fa";
import Loader from "../components/Loader";
import MetaData from "../helpers/MetaData";
import toast from "react-hot-toast";
import "../styles/details.css";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.GET_RAW_DETAILS
  );

  React.useMemo(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getRawDetails(params.id));
  }, [dispatch, params.id, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={product?.name} />
          <Container fluid className="details__parent">
            <Row className="details__secondary">
              <Col md={true} className="details__child child__one">
                {product?.image && (
                  <div className="image__box">
                    <img src={product.image.url} alt={`${product.name}`} />
                  </div>
                )}{" "}
              </Col>
              <Col md={true} className="details__child child__two">
                <div className="search__btn__box">
                  <Link to={"/products"}>
                    <Btn
                      type="primary"
                      shape="circle"
                      icon={<FaIcons.FaArrowLeft />}
                      size={"large"}
                      htmlType="button"
                    />
                  </Link>
                </div>
                <div className="details__heading">
                  <h3>Title: {product?.name}</h3>
                </div>
                <div className="details__description">
                  <h3>Description</h3>
                  <p>{product?.description}</p>
                </div>

                <div className="details__heading">
                  <h3>Stock: {product?.stock}</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Details;
