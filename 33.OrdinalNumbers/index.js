var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
        console.log("".concat(nums[i], "st"));
    }
    else if (nums[i] == 2) {
        console.log("".concat(nums[i], "nd"));
    }
    else if (nums[i] == 3) {
        console.log("".concat(nums[i], "rd"));
    }
    else {
        console.log("".concat(nums[i], "th"));
    }
}
