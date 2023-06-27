// IMPORTS -
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RawCard from "../components/RawCard";
import MetaData from "../helpers/MetaData";
import { getProducts, clearErrors } from "../redux/actions/rawAction";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import Search from "../components/Search";
import { Pagination as Page } from "antd";
import "../styles/raw.css";

const Raw = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  let keyword = searchParams.get("keyword");

  const { products, productCount, loading, error, resultPerPage } = useSelector(
    (state) => state.GET_ALL_RAW_MATERIALS
  );
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (keyword) {
      dispatch(getProducts(keyword, null));
      setVisible(true);
    } else {
      dispatch(getProducts("", currentPage));
      setVisible(false);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, keyword, currentPage]);

  return (
    <>
      <MetaData title={"Raw Materials"} />
      <Container fluid className="product__parent">
        <Row className="product__secondary">
          <Col className="product__child" md={true}>
            <div className="raw__content">
              <h3>Raw Materials</h3>
              <Search />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <>
                {products?.length > 0 ? (
                  <>
                    <div className="product__box">
                      {products.map((product) => {
                        return <RawCard product={product} key={product._id} />;
                      })}
                    </div>
                    {resultPerPage < productCount && (
                      <div className="pagination__Box">
                        <Page
                          defaultCurrent={currentPage}
                          total={productCount}
                          onChange={setCurrentPageNo}
                          defaultPageSize={resultPerPage}
                          responsive={true}
                          className="page"
                          disabled={visible}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="raw__content set__raw">
                    <h3>Products not found</h3>
                  </div>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Raw;
