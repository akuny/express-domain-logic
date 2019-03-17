const { version } = require('./config');

getVersion = version => {
  switch (version) {
    case 'TRANSACTION_SCRIPT_PHASE_ONE':
      return './app-transaction-script/app-phase-one';
    case 'TRANSACTION_SCRIPT_PHASE_TWO':
      return './app-transaction-script/app-phase-two';
    case 'DOMAIN_MODEL':
      return './app-domain-model/app';
  }
};

const { server } = require(getVersion(version));

server.listen(3000, () =>
  console.log(`Server using ${version} listening on port 3000`)
);
