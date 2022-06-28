module.exports = function toReadable (number) {
	  let strN = String(number);
      let L = strN.length;
      let N = [];
      let wordsN = [];
      let result = '';

      function onesTrans(ones) {
        switch (ones) {
          case '1': return "one";
          case '2': return "two";
          case '3': return "three";
          case '4': return "four";
          case '5': return "five";
          case '6': return "six";
          case '7': return "seven";
          case '8': return "eight";
          case '9': return "nine";
        };
      };

      function teensTrans(teens) {
        switch (teens) {
          case '1': return "eleven";
          case '2': return "twelve";
          case '3': return "thirteen";
          case '4': return "fourteen";
          case '5': return "fifteen";
          case '6': return "sixteen";
          case '7': return "seventeen";
          case '8': return "eighteen";
          case '9': return "nineteen";
        };
      };

      function tensTrans(tens) {
        switch (tens) {
          case '2': return "twenty";
          case '3': return "thirty";
          case '4': return "forty";
          case '5': return "fifty";
          case '6': return "sixty";
          case '7': return "seventy";
          case '8': return "eighty";
          case '9': return "ninety";
        };
      };

      for (let i = 1; i <= 3; i++) {
        N[i] = strN[L - i] === undefined ? '' : strN[L - i];
        wordsN[i] = '';
      };

      if ((L === 1) && (N[1] === '0')) {
        wordsN[1] = 'zero';
      };

      if ((N[2] !== '1') && (N[1] !== '0')) {
        wordsN[1] = onesTrans(N[1]);
      };

      if ((N[2] === '1') && (N[1] === '0')) {
        wordsN[2] = 'ten';
      };

      if ((N[2] === '1') && (N[1] > '0')) {
        wordsN[2] = teensTrans(N[1]);
      };

      if ((N[2] > '1') && (L > 1)) {
        wordsN[2] = tensTrans(N[2]);
      };

      if ((N[3] > '0') && (L > 1)) {
        wordsN[3] = onesTrans(N[3]) + ' ' + 'hundred';
      };


      for (let i = 1; i <= 3; i++) {
        if (wordsN[i] !== '') {
          result = ' ' + wordsN[i] + result;
        };
      };

      if (result[0] === ' ') {
        result = result.slice(1);
      };

      return result;
}