const mockParamsGoldWithFeatRemainFeat = {
  userId: 1,
  organizationId: 7,
  title: 'VP of Minions',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: true
};

const mockParamsGoldWithoutFeatRemainFeat = {
  userId: 2,
  organizationId: 8,
  title: 'VP of Minions',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: true
};

const mockParamsGoldWithoutFeatRemainNormal = {
  userId: 2,
  organizationId: 8,
  title: 'VP of Minions',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: false
};

const mockParamsNormal = {
  userId: 3,
  organizationId: 9,
  title: 'VP of Minions',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: false
};

module.exports = {
  mockParamsGoldWithFeatRemainFeat,
  mockParamsGoldWithoutFeatRemainFeat,
  mockParamsGoldWithoutFeatRemainNormal,
  mockParamsNormal
};
