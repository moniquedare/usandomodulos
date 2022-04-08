const { circleArea,squareArea } = require('./shape-area.js');

//

const raio = process.argv[2];
const areaOfCircle = circleArea(raio);

console.log(`A área do círculo com esse raio é de ${areaOfCircle}`);

//

const lado = process.argv[3];
const areaOfSquare = squareArea(lado);

console.log(`A área do quadrado com esse valor de lado é de ${areaOfSquare}`);