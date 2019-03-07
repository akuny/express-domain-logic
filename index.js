const { version } = require('./config');

getVersion = version => {
  switch (version) {
    case 'TRANSACTION_SCRIPT':
      return './app/app-transaction-script';
    case 'DOMAIN_MODEL':
      return './app/app-domain-model';
  }
};

const { server } = require(getVersion(version));

server.listen(3000, () =>
  console.log(`Server using ${version} listening on port 3000`)
);
