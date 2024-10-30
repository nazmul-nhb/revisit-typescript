"use strict";
{
    // Spread Operator
    const books1 = ["Hobbit", "1984", "Jungle Book"];
    const books2 = [
        "Lord of the Rings",
        "Animal Farm",
        "Of Mice and Men",
    ];
    // combine
    const allBooks = [...books1, ...books2];
    // or
    books1.push(...books2);
    console.log(allBooks);
    console.log(books1);
    const greetCriminals = (...criminals) => {
        criminals.forEach((criminal) => console.log(`Hello ${criminal}`));
    };
    greetCriminals("Hablu", "Tapa", "Madan", "Don");
}
