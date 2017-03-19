exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sumarr=0;
    for (var i = arr.length - 1; i >= 0; i--) {
      sumarr=sumarr+arr[i];
    }
return sumarr;
  },

  remove: function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if(arr[i]===item) arr.splice(i,1);
    }
return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length]=item;
    return arr;

  },

  truncate: function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;

  },

  concat: function(arr1, arr2) {
    var arr=arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var counts = {};
    for(var i = 0; i< arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
    }
    return counts[item];
  },

  duplicates: function(arr) {
      var dup = {};
      for (var i = arr.length - 1; i >= 0; i--) {
              for (var n = arr.length - 1; n >= 0; n--) {
                if (arr[n]==arr[i]) {
                }
              }
      }
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
