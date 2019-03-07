module.exports = {
  saveJobPosting(jobPosting, cb) {
    if (!jobPosting) {
      cb('No jobPosting to save');
    }
    database.push(jobPosting);
    cb(null, jobPosting);
  },
  getAllJobPostings(cb) {
    cb(null, database);
  },
  getOneJobPosting(id, cb) {
    const requestedJobPosting = database.find(obj => {
      return obj.id === id;
    });
    cb(null, requestedJobPosting);
  },
  updateJobPosting(jobPosting, id, cb) {
    let idSearch = (id, array) => {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return i;
        }
      }
    };

    let indexToChange = idSearch(id, database);
    database.splice(indexToChange, 1, jobPosting);
    cb(null, jobPosting);
  },
  deleteJobPosting(id, cb) {
    for (let i = 0; i < database.length - 1; i++) {
      if (database[i] === id) {
        database.splice(i, 0);
      }
    }
    delete (database, id);
    cb(null, 'Job posting deleted');
  },
  getDatabase() {
    return database;
  }
};

let database = [
  {
    id: 1,
    title: 'Junior Minion',
    company: 'Dynamic Systems Incorporated',
    description: 'Brace yourself',
    contact: 'boss@example.com'
  }
];
