exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  		console.log("sorry i didnt understand what is requested");
  },

  manipulateRemoteData: function(url) {

  }
};
