var myName = "bilawal khan";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(toTitleCase(myName));
function toTitleCase(str) {
    return str.split(' ').map(function (l) { return l[0].toUpperCase() + l.substring(1); }).join(' ');
}
/*
Second method

function toTitleCase(str: String): String {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
*/ 
