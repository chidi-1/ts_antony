function name2(surname, age) {
    var num = 2;
    var str = '23 february';
    var result = otherName(num);
    otherName(result);
}
function otherName(argNum) {
    return argNum * 2;
}
function toStringPerson(person) {
    return "".concat(person.name, " ").concat(person.surname);
}
