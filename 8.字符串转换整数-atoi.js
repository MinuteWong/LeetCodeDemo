/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var sign = ['-', '+'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var max = 2 ** 31 - 1;
var min = - (2 ** 31);

var myAtoi = function(str) {
  var strNumber = getStringNumber(str, 0, '');
  if(strNumber.length === 1 && sign.includes(strNumber) || !strNumber) return 0;
  var number = Number(strNumber);
  if(number > max) return max;
  if(number < min) return min;
  return number;
};

var getStringNumber = function(str, index, result) {
  if (index >= str.length) return result;
  if (sign.includes(str[index])) {
    if (!result) {
      result = str[index];
      return getStringNumber(str, ++index, result);
    }
    else return result;
  }

  if (str[index] == ' ') {
    if (!result) return getStringNumber(str, ++index, result);
    else return result
  }

  if (numbers.includes(str[index])) {
    result += str[index]
    return getStringNumber(str, ++index, result);
  }
  else return result;
}

