export function setName(name) {
    return {
        type: 'SET_NAME',
        data: name
    };
}

export function setAge(age) {
    return {
        type: 'SET_AGE',
        data: age
    };
}