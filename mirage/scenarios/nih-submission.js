import metaDataSchema from '../custom-fixtures/nih-submission/schemas';
import repos from '../custom-fixtures/nih-submission/repositories';
import policies from '../custom-fixtures/nih-submission/policies';
import doiJournals from '../custom-fixtures/nih-submission/doi-journals';
import grants from '../custom-fixtures/nih-submission/grants';
import funders from '../custom-fixtures/nih-submission/funders';

export default function (server) {
  server.create('user', {
    '@id': 'https://pass.local/fcrepo/rest/users/0f/46/19/45/0f461945-d381-460e-9cc1-be4b246faa95',
    '@type': 'User',
    '@context': 'https://oa-pass.github.io/pass-data-model/src/main/resources/context-3.4.jsonld',
    displayName: 'Nihu Ser',
    email: 'nihuser@jhu.edu',
    firstName: 'Nihu',
    lastName: 'Ser',
    locatorIds: ['johnshopkins.edu:jhed:akirkwo1', 'johnshopkins.edu:hopkinsid:KYWJIT', 'johnshopkins.edu:employeeid:00001421', 'johnshopkins.edu:jhed:nih-user'],
    roles: ['submitter'],
    username: 'nih-user@johnshopkins.edu'
  });

  repos.forEach((repo) => {
    server.create('repository', {
      _source: repo
    });
  });

  policies.forEach((policy) => {
    server.create('policy', {
      _source: policy
    });
  });

  grants.forEach((grant) => {
    server.create('grant', {
      _source: grant
    });
  });

  funders.forEach((funder) => {
    server.create('funder', funder);
  });

  server.create('journal', doiJournals);

  server.create('journal', {
    '@id': 'https://pass.local/fcrepo/rest/journals/f5/62/2a/cf/f5622acf-ca44-40cb-ac3d-4ca76448ded4',
    '@type': 'Journal',
    issns: ['Print:0003-2654', 'Online:1364-5528'],
    journalName: 'The Analyst',
    nlmta: 'Analyst',
    '@context': 'https://oa-pass.github.io/pass-data-model/src/main/resources/context-3.2.jsonld'
  });

  server.create('schema', metaDataSchema);
}
