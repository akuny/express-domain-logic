const mockDatabase = [
  {
    id: 1,
    userId: 1,
    title: 'Junior Minion',
    description: 'Brace yourself',
    contact: 'boss@example.com'
  }
];

const mockJobPosting = {
  id: 666,
  userId: 1,
  title: 'Senior Minion',
  description: 'It all begins soon',
  contact: 'boss@example.com'
};

const mockJobPostingToUpdate = {
  id: 999,
  userId: 1,
  title: 'VP of Minions',
  description: 'Let the games begin',
  contact: 'boss@example.com'
};

const mockUpdatedDatabase = [
  {
    id: 1,
    userId: 1,
    title: 'Junior Minion',
    description: 'Brace yourself',
    contact: 'boss@example.com'
  },
  {
    id: 999,
    userId: 1,
    title: 'VP of Minions',
    description: 'Let the games begin',
    contact: 'boss@example.com'
  }
];

mockJobPostingGoldWithFeatured = {
  id: 999,
  userId: 1,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: true,
  organization: {
    type: 'gold',
    featuredRemaining: 2
  }
};

mockJobPostingGoldWithoutFeatured = {
  id: 999,
  userId: 1,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: true,
  organization: {
    type: 'gold',
    featuredRemaining: 0
  }
};

mockJobPostingNormal = {
  id: 999,
  userId: 1,
  title: 'VP of Minions',
  company: 'Dynamic Systems Incorporated',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: false,
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
