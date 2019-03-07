module.exports = {
  checkJobPosting(input, cb) {
    if (!input) {
      cb('There is no input');
    }

    cb(null, input);
  }
};
