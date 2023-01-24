import React, { useEffect, useState } from "react";
import Bowl from "../components/product/Bowl";
import Bowls from "../components/product/Bowls";
import { fetchBowls } from "../services/bowlServices";
import BowlsLoader from "../components/loaders/BowlsLoader";
import { Toast } from "./../utils/Toast";
const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bowls, setBowls] = useState([]);
  useEffect(() => {
    fetchBowls()
      .then(({ data }) => {
        setBowls(data);
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      })
      .catch((e) => {
        Toast(e.message, "error");
      });
  }, []);

  const bowsList = bowls.map((bowl) => <Bowl key={bowl.id} {...bowl} />);
  const render = (
    <Bowls showBowls={true}>
      {bowls.length <= 0 ? "No product!" : bowsList}
    </Bowls>
  );
  return (
    <>
      <div className="content-box">
        <div className="content-wrap">
          {!isLoading ? <BowlsLoader /> : render}
        </div>
      </div>
    </>
  );
};

export default Product;
