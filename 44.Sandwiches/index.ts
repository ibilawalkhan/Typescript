function orderSandwich(...items: string[]): void {
    console.log("Bread: ", items[0]);
    if (items.length > 1) {
        console.log("Ingredients: ", items.slice(1).join(", "));
    } else {
        console.log("No additional ingredients.");
    }

    console.log();
}

orderSandwich("Wheat Bread", "Ham", "Cheese", "Lettuce");
orderSandwich("White Bread", "Turkey", "Tomato", "Mayonnaise");
orderSandwich("Multigrain Bread");