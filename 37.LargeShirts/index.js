function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, ", and this message has to be printed on it \"").concat(message, "\""));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "myWorld");
