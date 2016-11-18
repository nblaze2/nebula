exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    var i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      };
    };
    return -1;
  },

  sum : function(arr) {
    var total = arr.reduce(function(a, b) {
      return a + b;
    }, 0);
    return total;
  },

  remove : function(arr, item) {
    function isNotItem(value) {
      return value != item;
    }

    var filtered = arr.filter(isNotItem);
    return filtered;
  },

  reverseString : function(str) {
    function reverse(str) {
      return str.split("").reverse().join("");
    }
    var reversed = reverse(str);
    return reversed;
  },

  longestSubString : function(str) {
    var strArr = str.split(" ");

    strArr.sort(function(a, b) {
      return a.length - b.length;
    });

    var longest = strArr.pop();
    return longest;
  },

  letterMoveForward : function(str) {
    var newStr = str.replace(/[a-zA-Z]/g, function(char) {
      switch (char) {
        case 'z': return 'a';
        case 'Z': return 'A';
        default: return String.fromCharCode(char.charCodeAt(0)+1)
      };
    });
    return newStr;
  },

  capitalizeWords : function(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
 }

};
