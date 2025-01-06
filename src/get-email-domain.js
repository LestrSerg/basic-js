const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  for (let i = 0; i < email.length ; i++) {
    if (email.charAt(i) == '@') {
      index = i;
    }
  }

   domain = email.substring(index+1, email.length);



 return domain;
}

module.exports = {
  getEmailDomain
};
