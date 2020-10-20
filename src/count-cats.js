const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat(Infinity);
  let result = 0;
  for( let i =0; i<arr.length; i++){
    if(arr[i] === '^^'){
      result += 1;
    } else{
      result = result;
    }
  } return result;


};
