let jobTable = [
  {
    id: 1,
    userId: 1,
    organizationId: 7,
    title: 'Junior Minion',
    description: 'Brace yourself',
    contact: 'boss@example.com'
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

module.exports = {
  jobTable,
  organizationTable,
  userTable
};
