module.exports = {
  saveTBD(tbd, cb) {
    if (!tbd) cb('No tbd to save');
    database.push(tbd);
    cb(null, tbd);
  },
  getAllTBDs(cb) {
    cb(null, JSON.stringify(database));
  },
  getOneTBD(id, cb) {
    //find the TBD and return it
  },
  updateTBD(id, cb) {
    //update the TBD and return it
  },
  deleteTBD(id, cb) {
    //delete the TBD
  }
};

const database = [
  {
    title: 'one',
    body: 'two'
  }
];
