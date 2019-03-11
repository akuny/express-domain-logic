const { version } = require('./config');

getVersion = version => {
  switch (version) {
    case 'TRANSACTION_SCRIPT_PHASE_ONE':
      return './app/app-transaction-script-phase-one';
    case 'TRANSACTION_SCRIPT_PHASE_TWO':
      return './app/app-transaction-script-phase-two';
    case 'DOMAIN_MODEL':
      return './app/app-domain-model';
  }
};

const { server } = require(getVersion(version));

server.listen(3000, () =>
  console.log(`Server using ${version} listening on port 3000`)
);
