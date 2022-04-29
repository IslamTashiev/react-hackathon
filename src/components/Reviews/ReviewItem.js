import React from "react";
import { useUser } from "../../hooks/useUser";
import { formatDistanceToNow, format, parse } from "date-fns";

export const ReviewItem = ({ review }) => {
  const user = useUser();
  // console.log(review.createdAt.toDate());
  const time = format(review.createdAt.toDate(), "yyyy-MM-dd");
  // console.log(time);
  return (
    <div>
      {review ? (
        <div
          className='review__item'
          style={{
            background: user && user.uid === review.userID ? "#cfe1f0" : "",
          }}>
          <div className='review__header'>
            <div className='review__author'>
              <img src={review.userAvatar} className='author__avatar' />
              <div className='author__name'>{review.userName}</div>
            </div>
            <div className='review__date'>{time}</div>
          </div>
          <div className='review__body'>
            <div className='review__body-title'>{review.title}</div>
            <div className='review__body-text'>{review.subtitle}</div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
