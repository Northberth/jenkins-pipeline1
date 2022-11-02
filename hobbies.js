const hobbies = ["jogging","cooking","diving","swimming","reading"];

exports.getHobbies = () => {
    return hobbies;
}

exports.getHobby = id => {
    if(id<1 || id > hobbies.length)
        return null;
    return hobbies[id-1];
}
exports.getReverseHobbies = () => {
    return [...hobbies].reverse();
}
exports.findHobby = name => {
    return hobbies.includes(name);
}