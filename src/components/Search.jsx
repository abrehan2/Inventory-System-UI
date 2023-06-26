// IMPORTS -
import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../redux/actions/rawAction";
import { Button as Btn } from "antd";
import toast from "react-hot-toast";
import "../styles/search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [visible, setVisible] = useState(false);
  const { products, error } = useSelector(
    (state) => state.GET_ALL_RAW_MATERIALS
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      setVisible(true);
      navigate(`/products?keyword=${keyword}`);
    } else {
      setVisible(false);
      navigate(`/products`);
    }
  };

  const navigateHandler = (e) => {
    e.preventDefault();

    if (visible) {
      setVisible(false);
      setKeyword("");
      navigate("/products");
    }
  };

  React.useMemo(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <>
      <div className="search__wrapper">
        <form>
          <InputGroup>
            <InputRightElement>
              <Button
                type="submit"
                variant={"unstyled"}
                className="search__btn"
                onClick={submitHandler}
              >
                <FaIcons.FaSearch color="orange" />
              </Button>
            </InputRightElement>
            <Input
              placeholder="Search your products here"
              size="md"
              variant={"filled"}
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              disabled={products?.length > 0 ? false : true}
            />
          </InputGroup>
        </form>
        {visible && (
          <div className="btn__box">
            <Btn
              type="primary"
              shape="circle"
              icon={<FaIcons.FaArrowLeft />}
              size={"large"}
              onClick={navigateHandler}
              htmlType="submit"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
