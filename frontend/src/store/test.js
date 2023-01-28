const axios = require("axios");

// POST test

// const newPizza = {
//   imageUrl: "https://placekitten.com/g/200/200",
//   large: "44",
//   name: "Testowa",
//   small: "33",
//   topings: "ser, pieczarki, szynka",
//   vegan: "true",
// };

// const url = "http://localhost:5000/pizzas";

// const postData = async (data) => {

//   const post = async () => {
//     const res = await axios({
//       method: "post",
//       url: url,
//       data: data,
//     });

//     return res;
//   };

//   try {
//     const res = await post(newPizza);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }

// };

// postData(newPizza);

// UPDATE TEST

// const paramId = 122 // moze sie zmienic

// const updatedPizza = {
//   imageUrl: "https://placekitten.com/g/200/200",
//   large: "44",
//   name: "Testowa",
//   small: "33",
//   topings: "ser, pieczarki, szynka",
//   vegan: "true",
// };

// const updateData = async (data, id) => {
//   const update = async () => {
//     const url = "http://localhost:5000/pizzas/updatePizza/" + id
//     const res = await axios({
//       method: "patch",
//       url: url,
//       data: data,
//     });

//     return res;
//   };

//   try {
//     const res = await update(updatedPizza, paramId);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }

// };

// updateData(updatedPizza, paramId);

// DELETE TEST

// const id = 183; // moze sie zmienic

// const deleteData = async (id) => {
//   const deletePizza = async () => {
//     const url = "http://localhost:5000/pizzas/deletePizza/" + id;
//     const res = await axios({
//       method: "delete",
//       url: url,
//     });

//     return res;
//   };

//   try {
//     const res = await deletePizza(id);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

// deleteData(id);

// add new Com // todo refactor na patcha


const id = 29;

const newComment = {
  author: "Anon 3",
  title: "title 4",
  body: "dsadasds",
  imageUrl: "https://placekitten.com/g/150/150"
}

const addNewComment = async (id, newComment) => {
  const postNewComment = async () => {
    const url = `http://localhost:5000/pizzas/${id}/addComment`;
    const res = await axios({
      method: "post",
      url: url,
      data: newComment
    });

    return res;
  };

  try {
    const res = await postNewComment(id, newComment);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

addNewComment(id, newComment);


