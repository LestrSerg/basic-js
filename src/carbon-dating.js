const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let t = 0;


 if (parseFloat(sampleActivity) === sampleActivity) return false;
 if (Number.isNaN(sampleActivity) || Array.isArray(sampleActivity)) return false;
 if (Number.isInteger(sampleActivity)) return false;


 if ((/^\d+$/.test(sampleActivity)) ||(/^\d+(\.\d+)?$/.test(sampleActivity)))  {
   let t = (Math.log((sampleActivity / MODERN_ACTIVITY)) / -0.693) * HALF_LIFE_PERIOD;
 //  return Math.ceil(t);
  if ((Math.ceil(t)> 0) && (Number.isInteger(Math.ceil(t)))) return Math.ceil(t); else return false;
  }   else return false;

}

module.exports = {
  dateSample
};



