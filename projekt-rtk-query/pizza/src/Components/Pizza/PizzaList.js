import React from "react";
import Pizza from "./Pizza";
import { useGetPizzasQuery } from "../../app/store/pizzaListApi-slice";

const PizzaList = (props) => {

  const {
    data: pizzas,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPizzasQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {

    const { entities } = pizzas;

    console.log(entities);

    const pizzasArr = Object.values(entities)

    const listContent = pizzasArr?.length
      ? pizzasArr.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />)
      : null;

    content = (
      <section className="list">
        <h5 className="list-title">PIZZA MENU</h5>
        <div className="list-items">{ listContent }</div>
      </section>
    );
  }

  return content;
};

export default PizzaList;
