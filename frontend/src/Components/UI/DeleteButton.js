import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza } from "../../store/pizzaList-actions";
import Modal from "./Modal";
import { uiActions } from "../../store/ui-slice";

const DeleteButton = (props) => {
  const id = props.id;

  const modalIsVisible = useSelector((state) => state.ui.modalIsVisible);
  const modalTitle = useSelector((state) => state.ui.modalTitle);
  const modalMsg = useSelector((state) => state.ui.modalMsg);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deletePizza(id));
  };

  const confirmSubmissionHandler = () => {
    dispatch(uiActions.hideModal());
  };

  return (
    <>
      {modalIsVisible && (
        <Modal
          title={modalTitle}
          message={modalMsg}
          onConfirm={confirmSubmissionHandler}
        />
      )}
      <button className="btn-delete" onClick={deleteHandler}>
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
