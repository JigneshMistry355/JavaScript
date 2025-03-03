const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];

  function callback({quantity}) {
    return quantity > 200 ? "ok" : "low"
  }

  const x = Object.groupBy(fruits, callback);

  console.log(Object.entries(x))

