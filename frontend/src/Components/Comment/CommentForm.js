import React from "react";
import { useFormik } from "formik";
import { CommentFormSchema } from "../../schemas/CommentFormSchema";
import { useDispatch } from "react-redux";
import { postNewComment } from "../../store/singlePizza-slice";

const CommentForm = (props) => {

  const id = props.id;

  const dispatch = useDispatch();

  const initialValues = {
    author: "",
    title: "",
    body: "",
    imageUrl: ""
  }

  const onSubmit = (values, actions) => {

    const newComment = {
      ...values,
    };

    dispatch(postNewComment(id, newComment))

    console.log(values);
    actions.resetForm();
  }

  const resetInputsHandler = () => {
    resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: CommentFormSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
        <div className="input-container">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="user1234"
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.author && touched.author ? "input-error" : ""}
          />
          {errors.author && touched.author ? (
            <p className="error">{errors.author}</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title 1"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title && touched.title ? "input-error" : ""}
          />
          {errors.title && touched.title ? (
            <p className="error">{errors.title}</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-container">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            placeholder="Write text..."
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.body && touched.body ? "input-error" : ""}
          />
          {errors.body && touched.body ? (
            <p className="error">{errors.body}</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-container">
          <label htmlFor="image_URL">Image URL</label>
          <input
            type="text"
            id="image_URL"
            name="imageUrl"
            placeholder="https://example.com/"
            value={values.imageUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.imageUrl && touched.imageUrl ? "input-error" : ""}
          />
          {errors.imageUrl && touched.imageUrl ? (
            <p className="error">{errors.imageUrl}</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Submit</button>
        <button type="button" className="reset" onClick={resetInputsHandler}>
          Reset
        </button>
      </form>
  );
}
 
export default CommentForm;