module.exports = function reverse (n) {
str = "" + Math.abs(n);
strr = "";
for (let i=0; i<str.length; i++) {
    strr = str[i] + strr;
}
    return (strr*1)
}
