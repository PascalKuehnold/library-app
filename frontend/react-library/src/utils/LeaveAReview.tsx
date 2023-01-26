import React, { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {
  const rating: number[] = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const [starInput, setStarInput] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");

  function starValue(value: number) {
    setStarInput(value);
    setDisplayInput(true);
  }

  const ratingList = rating.map((rating) => {
    return (
      <li key={rating}>
        <button onClick={() => starValue(rating)} className="dropdown-item">
          {rating} star
        </button>
      </li>
    );
  });

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <h5
        id="dropdownMenuButton1"
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        Leave a review?
      </h5>
      <ul
        id="submitReviewRating"
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        {ratingList}
      </ul>
      <StarsReview rating={starInput} size={32} />

      {displayInput ? (
        <form method="POST" action="#">
          <hr />
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="submitReviewDescription"
              placeholder="Optional"
              rows={3}
              onChange={(e) => setReviewDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={() => props.submitReview(starInput, reviewDescription)}
            >
              Submit Review
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};
