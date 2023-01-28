const pizzaListInitialState = {
  pizzas: [
    {
      id: 1,
      name: "Margerita",
      topings: ["sos pomidorowy" , "mozzarella", "bazylia"],
      price: {
        small: 23,
        large: 27
      },
      vegan: true,
      imageUrl: "https://placekitten.com/g/330/310"
    },
    {
      id: 2,
      name: "Capricciosa",
      topings: ["sos pomidorowy", "szynka", "pieczarki", "ser"],
      price: {
        small: 25,
        large: 35
      },
      vegan: false,
      imageUrl: "https://placekitten.com/g/330/310"
    },
    {
      id: 3,
      name: "Enna",
      topings: ["sos pomidorowy", "mozzarella", "kurczak", "pomidor", "pieczarki"],
      price: {
        small: 26,
        large: 35
      },
      vegan: false,
      imageUrl: "https://placekitten.com/g/330/310"
    },
    {
      id: 4,
      name: "Palermo",
      topings: ["sos pomidorowy", "mozzarella", "szynka parmeńska", "rukola", "pomidory cherry", "ser Grana Padano"],
      price: {
        small: 32,
        large: 45
      },
      vegan: false,
      imageUrl: "https://placekitten.com/g/330/310"
    },
    {
      id: 5,
      name: "Trapani",
      topings: ["sos", "pomidorowy", "mozzarella", "tuńczyk", "zielone oliwki", "kapary", "cebula"],
      price: {
        small: 36,
        large: 47
      },
      vegan: false,
      imageUrl: "https://placekitten.com/g/330/310"
    },
  ],
  totalPizzasAdded: 5, // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
};

export default pizzaListInitialState;
