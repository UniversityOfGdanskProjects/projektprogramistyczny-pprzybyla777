import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSinglePizza } from "../store/singlePizza-slice";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../Components/Comment/Comment";
import _ from 'lodash';
import CommentForm from "../Components/Comment/CommentForm";

const SinglePizza = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id)

  useEffect(() => {
    console.log("Use effect single pizza fired!");
    dispatch(fetchSinglePizza(id));
  }, [id, dispatch]);

  const singlePizza = useSelector(store => store.singlePizza.currentPizza) // 
  
  const { name, toppings, price, vegan, imageUrl, comments } = singlePizza;


  // console.log(singlePizza);

  return (
    <>
      { !_.isEmpty(singlePizza) && (
        <section className="section pizza-section">
          <Link to={"/"} className="btn btn-primary">
            back home
          </Link>
          <div className="pizza">
            <img src={imageUrl} alt={name} />
            <div className="pizza-info">
              <p>
                <span className="pizza-data">Name :</span>
                {name}
              </p>
              <p>
                <span className="pizza-data">Toppings :</span>
                {toppings.map((topping, index) => (
                  <span key={index}>{topping}</span>
                ))}
              </p>
              <p>
                <span className="pizza-data">32cm :</span>
                {price.small}zł
              </p>
              <p>
                <span className="pizza-data">42cm :</span>
                {price.large}zł
              </p>
              {vegan && (
                <p>
                  <span className="pizza-data">Info :</span>
                  Vegan
                </p>
              )}
            </div>
          </div>
        </section>
      )}
      {!_.isEmpty(singlePizza) && (
        <section className="comment-section">
          <CommentForm id={id}/>
          <h2>Comments:</h2>
          {comments?.length === 0 && <p>No comments to display!</p>}
          {comments?.length !== 0 && comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        </section>
      )}
    </>
  );
};

export default SinglePizza;
