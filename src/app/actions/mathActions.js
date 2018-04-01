export function addNumber(number) {
    return {
        type: 'ADD',
        data: number
    };
}

export function subtractNumber(number) {
    return {
        type: 'SUBTRACT',
        data: number
    };
}