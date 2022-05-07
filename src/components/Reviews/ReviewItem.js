import React, { useContext } from "react";
import { useUser } from "../../hooks/useUser";
import deleteIcon from "../../assets/images/delete.svg";
import { format } from "date-fns";
import { appContext } from "../../context/appContext";
import { useAdmin } from "../../hooks/useAdmin";

export const ReviewItem = ({ review }) => {
  const user = useUser();
  const isAdmin = useAdmin();
  const time = format(review.createdAt.toDate(), "yyyy-MM-dd");
  const { deleteReview } = useContext(appContext);
  return (
    <div>
      {review ? (
        <div
          className='review__item'
          style={{
            background: user && user.uid === review.userID ? "#cfe1f0" : "",
          }}>
          {(user && user.uid === review.userID) || isAdmin ? (
            <img
              onClick={() => deleteReview(review)}
              className='delete__icon'
              src={deleteIcon}
            />
          ) : (
            <></>
          )}
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