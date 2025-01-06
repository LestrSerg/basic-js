const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';


  if (!Array.isArray(members)) return false;

  for (let index = 0; index < members.length; index++) {
    let current = members[index];

    if (!isNaN(current) || (typeof current === 'object')  || current === undefined)   {
      current = '';

    }  else current = current.replace(/\s+/g, '');
    members[index] = current.toUpperCase();
  }

  members.sort();


  for (let index = 0; index < members.length; index++) {
    let current = members[index];

    if (isNaN(current)) {
       result = result + current[0];
    }

  }

  return result;
}

module.exports = {
  createDreamTeam
};

