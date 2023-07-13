function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Bread: ", items[0]);
    if (items.length > 1) {
        console.log("Ingredients: ", items.slice(1).join(", "));
    }
    else {
        console.log("No additional ingredients.");
    }
    console.log();
}
orderSandwich("Wheat Bread", "Ham", "Cheese", "Lettuce");
orderSandwich("White Bread", "Turkey", "Tomato", "Mayonnaise");
orderSandwich("Multigrain Bread");
