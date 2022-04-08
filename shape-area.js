/* shape_area.js */
const PI = Math.PI;
// defina e exporte as funções circleArea() e squareArea() 
function circleArea(raio) {
return PI * raio * raio
}

module.exports.circleArea = circleArea;

module.exports.squareArea = function(lado) {
	return lado * lado;
};