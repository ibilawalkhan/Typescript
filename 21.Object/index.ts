interface Country {
    name: string;
    capital: string;
    population: number;
    language: string;
}

const countries: Country[] = [
    {
        name: "US",
        capital: "Washington DC",
        population: 33101932,
        language: "English"
    },
    {
        name: "Canada",
        capital: "ottwa",
        population: 3723083,
        language: "English"
    },
    {
        name: "Germany",
        capital: "Berlin",
        population: 8341565,
        language: "German"
    },
    {
        name: "Austrailia",
        capital: "Canberra",
        population: 232971,
        language: "English"
    },
];

for (let i = 0; i < countries.length; i++) {
    console.log("Name: ", countries[i].name);
    console.log("Capital: ", countries[i].capital);
    console.log("Population: ", countries[i].population);
    console.log("Language: ", countries[i].language);
    console.log();
}