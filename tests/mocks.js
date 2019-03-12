const mockDatabase = [
  {
    id: 1,
    title: 'Junior Minion',
    company: 'Dynamic Systems Incorporated',
    description: 'Brace yourself',
    contact: 'boss@example.com'
  }
];

const mockJobPosting = {
  id: 666,
  title: 'Senior Minion',
  company: 'Dynamic Systems Incorporated',
  description: 'It all begins soon',
  contact: 'boss@example.com'
};

const mockJobPostingToUpdate = {
  id: 999,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com'
};

const mockUpdatedDatabase = [
  {
    id: 1,
    title: 'Junior Minion',
    company: 'Dynamic Systems Incorporated',
    description: 'Brace yourself',
    contact: 'boss@example.com'
  },
  {
    id: 999,
    title: 'VP of Minions',
    company: 'Dynamic Systems Incorporated',
    description: 'Let the games begin',
    contact: 'boss@example.com'
  }
];

mockJobPostingGoldWithFeatured = {
  id: 999,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  organization: {
    type: 'gold',
    featuredRemaining: 2
  }
};

mockJobPostingGoldWithoutFeatured = {
  id: 999,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  organization: {
    type: 'gold',
    featuredRemaining: 0
  }
};

mockJobPostingNormal = {
  id: 999,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  organization: {
    type: 'normal'
  }
};

module.exports = {
  mockDatabase,
  mockJobPosting,
  mockJobPostingToUpdate,
  mockUpdatedDatabase,
  mockJobPostingGoldWithFeatured,
  mockJobPostingGoldWithoutFeatured,
  mockJobPostingNormal
};
