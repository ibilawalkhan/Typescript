function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The size of the shirt is ${size}, and this message has to be printed on it "${message}"`);
}

make_shirt();

make_shirt("medium");

make_shirt("small", "myWorld");