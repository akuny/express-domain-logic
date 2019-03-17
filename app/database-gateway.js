module.exports = {
  saveJobPosting(jobPosting, cb) {
    if (!jobPosting) {
      cb('No jobPosting to save');
    }
    jobTable.push(jobPosting);
    cb(null, jobPosting);
  },

  getAllJobPostings(cb) {
    cb(null, jobTable);
  },

  getOneJobPosting(id, cb) {
    const requestedJobPosting = jobTable.find(obj => {
      return obj.id === id;
    });
    cb(null, requestedJobPosting);
  },

  updateJobPosting(jobPosting, cb) {
    let idSearch = (id, array) => {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return i;
        }
      }
    };

    let indexToChange = idSearch(jobPosting.id, jobTable);
    jobTable.splice(indexToChange, 1, jobPosting);
    cb(null, jobPosting);
  },

  deleteJobPosting(id, cb) {
    for (let i = 0; i < jobTable.length - 1; i++) {
      if (jobTable[i] === id) {
        jobTable.splice(i, 0);
      }
    }
    delete (jobTable, id);
    cb(null, 'Job posting deleted');
  },

  getOneUser(id, cb) {
    const requestedUser = userTable.find(obj => {
      return obj.id === id;
    });
    cb(null, requestedUser);
  },

  getOneOrganization(id, cb) {
    const requestedOrganization = organizationTable.find(obj => {
      return obj.id === id;
    });
    cb(null, requestedOrganization);
  },

  updateOrganization(organization, cb) {
    let idSearch = (id, array) => {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return i;
        }
      }
    };

    let indexToChange = idSearch(organization.id, organizationTable);
    organizationTable.splice(indexToChange, 1, organization);
    cb(null, organization);
  },

  getDatabase() {
    return { jobTable, userTable, organizationTable };
  }
};

let jobTable = [
  {
    id: 1,
    userId: 1,
    title: 'Junior Minion',
    description: 'Brace yourself',
    contact: 'boss@example.com'
  }
];

let userTable = [
  {
    id: 1,
    firstName: 'Larry',
    lastName: 'Higgins',
    organizationId: 7
  },
  {
    id: 2,
    firstName: 'Johnny',
    lastName: 'Rickles',
    organizationId: 8
  },
  {
    id: 3,
    firstName: 'Ned',
    lastName: 'Wilkins',
    organizationId: 9
  }
];

let organizationTable = [
  {
    id: 7,
    name: 'Dynamic Systems Incorporated',
    tier: 'gold',
    featuredRemaining: 3
  },
  {
    id: 8,
    name: 'Big Ideas At Your Service (BIAYS)',
    tier: 'gold',
    featuredRemaining: 0
  },
  {
    id: 9,
    name: 'Let Us Get Dangerous',
    tier: 'normal'
  }
];
