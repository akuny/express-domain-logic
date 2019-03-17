const JobPosting = require('./app/JobPosting');
const { getDatabase } = require('./app/database-gateway');

const params = {
  id: 999,
  userId: 1,
  title: 'VP of Minions',
  description: 'Let the games begin',
  contact: 'boss@example.com',
  isFeatured: true
};

const instance = new JobPosting(params);

instance.save((err, success) => {
  if (err) {
    return console.error(err);
  }
  return console.log(success);
});

console.log(getDatabase());
