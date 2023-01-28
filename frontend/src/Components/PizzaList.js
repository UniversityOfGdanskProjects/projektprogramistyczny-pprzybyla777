import React, { useState } from "react";
import Pizza from "./Pizza";
import { useSelector } from "react-redux";

const PizzaList = (props) => {
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showVegan, setShowVegan] = useState(false);
  const pizzaList = useSelector((state) => state.pizzaList.pizzas);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const toggleShowVegan = () => {
    setShowVegan(!showVegan);
  };

  const sortedPizzaList = [...pizzaList]
    .filter((pizza) => {
      if (showVegan) {
        return pizza.vegan === true;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      if (sortKey === "name") {
        if (sortOrder === "asc") {
          return a[sortKey].localeCompare(b[sortKey]);
        } else {
          return b[sortKey].localeCompare(a[sortKey]);
        }
      } else if (sortKey === "price.small" || sortKey === "price.large") {
        if (sortOrder === "asc") {
          return a.price[sortKey.split(".")[1]] - b.price[sortKey.split(".")[1]];
        } else {
          return b.price[sortKey.split(".")[1]] - a.price[sortKey.split(".")[1]];
        }
      } else if (sortKey === "createdAt") {
        if (sortOrder === "asc") {
          return new Date(a[sortKey]) - new Date(b[sortKey]);
        } else {
          return new Date(b[sortKey]) - new Date(a[sortKey]);
        }
      }
    });

  return (
    <section className="list">
      <h5 className="list-title">PIZZA MENU</h5>
      <div className="sort-options">
        <button onClick={() => handleSort("name")}>Sortuj według nazwy</button>
        <button onClick={() => handleSort("price.small")}>
          Sortuj według ceny pizzy małej
        </button>
        <button onClick={() => handleSort("price.large")}>
          Sortuj według ceny pizzy dużej
        </button>
        <button onClick={() => handleSort("createdAt")}>Sortuj według daty utworzenia</button>
        <label>
          Pokaż tylko wegańskie:
          <input type="checkbox" onChange={toggleShowVegan} />
        </label>
      </div>
      <div className="list-items">
        {sortedPizzaList.map((pizza, index) => {
          return <Pizza key={index} pizza={pizza} />;
        })}
      </div>
    </section>
  );
};

export default PizzaList;