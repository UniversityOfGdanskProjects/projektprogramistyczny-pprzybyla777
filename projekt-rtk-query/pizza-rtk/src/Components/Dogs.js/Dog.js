import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  selectDogById,
  useDeleteDogMutation,
} from "../../app/store/dogListApi-slice";

const Dog = (props) => {
  const dogId = props.dogId;

  const navigate = useNavigate();

  const dog = useSelector((state) => selectDogById(state, dogId));

  const { name, imageUrl } = dog;

  const [deleteDog, { isSuccess, isError, error }] = useDeleteDogMutation();

  const deleteHandler = async () => {
    console.log(dogId);
    const res = await deleteDog({ id: dogId });
    console.log(res);
  };

  const handleEdit = () => navigate(`/dash/dogs/${dogId}`);

  return (
    <article className="pizza-box">
      <div className="img-box">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="pizza-footer">
        <h3>{name}</h3>
        <div className="pizza-actions">
          <button className="del" onClick={deleteHandler}>
            Delete
          </button>
          <button className="upd" onClick={handleEdit}>
            Update
          </button>
        </div>
      </div>
    </article>
  );
};

export default Dog;
