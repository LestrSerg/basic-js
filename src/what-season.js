const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dt) {




  try {
   let d =  dt.getMonth();
  } catch (e) {

      throw new TypeError('Invalid date!');
  }

  if (dt == null || dt == undefined || isNaN(dt.getMinutes())) return 'Unable to determine the time of year!';





    console.log(dt.getMonth());
    if (dt.getMonth() >= 0 && dt.getMonth() < 2 || dt.getMonth() > 10) {return 'winter'} else
      if (dt.getMonth() >= 2 && dt.getMonth() < 5 ) {return 'spring'} else
        if (dt.getMonth() >= 5 && dt.getMonth() < 8 || dt.getMonth() > 10) {return 'summer'} else
          if (dt.getMonth() >= 8 && dt.getMonth() < 11) {return 'fall'};



}

module.exports = {
  getSeason
};
