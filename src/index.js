module.exports = function solveEquation(equation) {
    let arr = equation.split(' * ');
    let a = arr[0];
    let temp = arr[1].split(' ');
    let b = temp[1] + temp[2];
    temp = arr[2].split(' ');
    let c = temp[1] + temp[2];
    let discriminant = b * b - 4 * a * c;
    discriminant = Math.round(Math.sqrt(discriminant));
    let result = [];
    result.push((-b - discriminant) / (2 * a));
    result.push((-b + discriminant) / (2 * a));
    result.sort(function (x, y) {
        return x - y;
    });
    return result;
};
