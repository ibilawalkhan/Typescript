function carInfo(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    const car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
        ...options
    };

    return car;
}

const car = carInfo("Toyota", "Camry", { color: "Silver", year: 2022 });
console.log(car)