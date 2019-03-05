module.exports = checkTBD;

const checkTBD = (input, cb) => {
  if (!input) cb('There is no input');
  cb(null, input);
};
