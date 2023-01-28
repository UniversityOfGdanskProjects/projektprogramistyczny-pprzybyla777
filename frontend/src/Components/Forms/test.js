// import React, { useState } from "react";
// import Modal from "../UI/Modal";
// import { useFormik } from "formik";
// import { FormSchema } from "../../schemas/FormSchema";
// import { useSelector, useDispatch } from "react-redux";
// import { pizzaListActions } from "../../store/pizzaListSlice";
// import "./Form.css";

// const Form = (props) => {

  // const totalPizzasAdded = useSelector(
  //   (state) => state.pizzaList.totalPizzasAdded
  // );

  // const dispatch = useDispatch();

//   const [isSubmited, setIsSubmited] = useState(false);

//   const onSubmit = (values, actions) => {
//     setIsSubmited(true);

//     if (values.id === "") {
      // const newId = totalPizzasAdded + 1;
      // values.id = newId;
//     }

//     const newItem = {
//       ...values,
//     };

//     console.log(newItem);

//     actions.resetForm();

//     dispatch(pizzaListActions.addPizza(newItem))
//   };

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     resetForm,
//   } = useFormik({
//     enableReinitialize: true,
//     initialValues: props.itemToUpdate,
//     validationSchema: FormSchema,
//     onSubmit,
//   });

//   const confirmSubmissionHandler = () => {
//     setIsSubmited(false);
//   };

//   const resetInputsHandler = () => {
//     resetForm();
//   };

//   return (
//     <React.Fragment>
//       {isSubmited && (
//         <Modal
//           title="Success"
//           message={"Submited successfully!"}
//           onConfirm={confirmSubmissionHandler}
//         />
//       )}
//       <form onSubmit={handleSubmit} autoComplete="off">
//         <div className="input-container">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Name"
//             value={values.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.name && touched.name ? "input-error" : ""}
//           />
//           {errors.name && touched.name ? (
//             <p className="error">{errors.name}</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="input-container">
//           <label htmlFor="topings">Topings</label>
//           <input
//             type="text"
//             id="topings"
//             name="topings"
//             placeholder="Topings"
//             value={values.topings}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.topings && touched.topings ? "input-error" : ""}
//           />
//           {errors.topings && touched.topings ? (
//             <p className="error">{errors.topings}</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="input-container">
//           <label htmlFor="small_price">Small price (zł)</label>
//           <input
//             type="text"
//             id="small"
//             name="small"
//             placeholder="0.00"
//             value={values.small}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.small && touched.small ? "input-error" : ""}
//           />
//           {errors.small && touched.small ? (
//             <p className="error">{errors.small}</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="input-container">
//           <label htmlFor="large_price">Large price (zł)</label>
//           <input
//             type="text"
//             id="large"
//             name="large"
//             placeholder="0.00"
//             value={values.large}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.large && touched.large ? "input-error" : ""}
//           />
//           {errors.large && touched.large ? (
//             <p className="error">{errors.large}</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <button type="submit">
//           {" "}
//           {props.itemToUpdate.id === "" ? "Submit" : "Update"}{" "}
//         </button>
//         {props.itemToUpdate.id === "" && (
//           <button type="button" className="reset" onClick={resetInputsHandler}>
//             Reset
//           </button>
//         )}
//       </form>
//     </React.Fragment>
//   );
// };

// export default Form;