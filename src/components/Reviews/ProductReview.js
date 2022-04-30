import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import { Button } from "../Buttons/Button";
import { ReviewItem } from "./ReviewItem";

import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import "./style.css";
import { FeedBack } from "./FeedBack";

export const ProductReview = () => {
  const { detailProduct } = useContext(appContext);
  const { getDocsFromFirebase, reviews } = useContext(appContext);
  useEffect(() => {
    getDocsFromFirebase();
  }, []);

  const renderedReviews = reviews.map((review) => (
    <React.Fragment key={review.title + Math.random()}>
      <ReviewItem review={review} />
    </React.Fragment>
  ));

  return (
    <div className='detail__review'>
      <div className='container'>
        <div className='description__title'>
          Отзывы на гироскутер {detailProduct ? detailProduct.title : ""}
        </div>
        <div className='review__content'>
          <div className='review__items'>{renderedReviews}</div>
          <FeedBack />
        </div>
      </div>
    </div>
  );
};
