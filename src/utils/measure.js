import { parse } from 'url';

// mock tableListDataSource
const tableListDataSource = [{
    key: 0,
    measure: 'https://metrics.operas-eu.org/google-books/views/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'google-books/views/v1',
    source: 'Google Books',
    type: 'views',
    version: 1
  }, {
    key: 1,
    measure: 'https://metrics.operas-eu.org/obp-html/sessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'obp-html/sessions/v1',
    source: 'Open Book Publishers HTML Reader',
    type: 'sessions',
    version: 1
  }, {
    key: 2,
    measure: 'https://metrics.operas-eu.org/obp-pdf/sessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'obp-pdf/sessions/v1',
    source: 'Open Book Publishers PDF Reader',
    type: 'sessions',
    version: 1
  }, {
    key: 3,
    measure: 'https://metrics.operas-eu.org/obp/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'obp/downloads/v1',
    source: 'Open Book Publishers',
    type: 'downloads',
    version: 1
  }, {
    key: 4,
    measure: 'https://metrics.operas-eu.org/world-reader/users/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'world-reader/users/v1',
    source: 'World Reader',
    type: 'users',
    version: 1
  }, {
    key: 6,
    measure: 'https://metrics.operas-eu.org/open-edition/views/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'open-edition/views/v1',
    source: 'Open Edition',
    type: 'views',
    version: 1
  }, {
    key: 7,
    measure: 'https://metrics.operas-eu.org/open-edition/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'open-edition/downloads/v1',
    source: 'Open Edition',
    type: 'downloads',
    version: 1
  }, {
    key: 8,
    measure: 'https://metrics.operas-eu.org/oapen/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'oapen/downloads/v1',
    source: 'OAPEN',
    type: 'downloads',
    version: 1
  }, {
    key: 9,
    measure: 'https://metrics.operas-eu.org/jstor/views/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'jstor/views/v1',
    source: 'JSTOR',
    type: 'views',
    version: 1
  }, {
    key: 10,
    measure: 'https://metrics.operas-eu.org/jstor/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'jstor/downloads/v1',
    source: 'JSTOR',
    type: 'downloads',
    version: 1
  }, {
    key: 11,
    measure: 'https://metrics.operas-eu.org/classics-library/sessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'classics-library/sessions/v1',
    source: 'The Classics Library',
    type: 'sessions',
    version: 1
  }, {
    key: 12,
    measure: 'https://metrics.operas-eu.org/unglueit/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'unglueit/downloads/v1',
    source: 'Unglue.it',
    type: 'downloads',
    version: 1
  }, {
    key: 13,
    measure: 'https://metrics.operas-eu.org/openaire/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'openaire/downloads/v1',
    source: 'OpenAIRE',
    type: 'downloads',
    version: 1
  }, {
    key: 14,
    measure: 'https://metrics.operas-eu.org/irusuk/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'irusuk/downloads/v1',
    source: 'IRUS-UK',
    type: 'downloads',
    version: 1
  }, {
    key: 15,
    measure: 'https://metrics.operas-eu.org/wikimedia/views/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'wikimedia/views/v1',
    source: 'Wikimedia',
    type: 'views',
    version: 1
  }, {
    key: 16,
    measure: 'https://metrics.operas-eu.org/sub-gottingen/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'sub-gottingen/downloads/v1',
    source: 'SUB Göttingen',
    type: 'downloads',
    version: 1
  }, {
    key: 17,
    measure: 'https://metrics.operas-eu.org/ekt/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'ekt/downloads/v1',
    source: 'Εθνικό Κέντρο Τεκμηρίωσης',
    type: 'downloads',
    version: 1
  }, {
    key: 18,
    measure: 'https://metrics.operas-eu.org/ekt/sessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'ekt/sessions/v1',
    source: 'Εθνικό Κέντρο Τεκμηρίωσης',
    type: 'sessions',
    version: 1
  }, {
    key: 19,
    measure: 'https://metrics.operas-eu.org/ekt/landingsessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'ekt/landingsessions/v1',
    source: 'Εθνικό Κέντρο Τεκμηρίωσης',
    type: 'landingsessions',
    version: 1
  }, {
    key: 20,
    measure: 'https://metrics.operas-eu.org/twitter/tweets/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'twitter/tweets/v1',
    source: 'Twitter',
    type: 'tweets',
    version: 1
  }, {
    key: 21,
    measure: 'https://metrics.operas-eu.org/hypothesis/annotations/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'hypothesis/annotations/v1',
    source: 'Hypothes.is',
    type: 'annotations',
    version: 1
  }, {
    key: 22,
    measure: 'https://metrics.operas-eu.org/wikipedia/references/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'wikipedia/references/v1',
    source: 'Wikipedia',
    type: 'references',
    version: 1
  }, {
    key: 23,
    measure: 'https://metrics.operas-eu.org/wordpress/references/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'wordpress/references/v1',
    source: 'Wordpress',
    type: 'references',
    version: 1
  }, {
    key: 24,
    measure: 'https://metrics.operas-eu.org/up-logs/sessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'up-logs/sessions/v1',
    source: 'Ubiquity Press',
    type: 'sessions',
    version: 1
  }, {
    key: 25,
    measure: 'https://metrics.operas-eu.org/up-ga/sessions/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'up-ga/sessions/v1',
    source: 'Ubiquity Press',
    type: 'sessions',
    version: 1
  }, {
    key: 26,
    measure: 'https://metrics.operas-eu.org/up-logs/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'up-logs/downloads/v1',
    source: 'Ubiquity Press',
    type: 'downloads',
    version: 1
  }, {
    key: 27,
    measure: 'https://metrics.operas-eu.org/up-ga/downloads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'up-ga/downloads/v1',
    source: 'Ubiquity Press',
    type: 'downloads',
    version: 1
  }, {
    key: 28,
    measure: 'https://metrics.operas-eu.org/up-logs/reads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'up-logs/reads/v1',
    source: 'Ubiquity Press',
    type: 'reads',
    version: 1
  }, {
    key: 29,
    measure: 'https://metrics.operas-eu.org/up-ga/reads/v1',
    namespace: 'https://metrics.operas-eu.org',
    path: 'up-ga/reads/v1',
    source: 'Ubiquity Press',
    type: 'reads',
    version: 1
}];

function getMeasure(u) {
  const params = parse(u, true).query;

  let dataSource = tableListDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(data => parseInt(data.status, 10) === parseInt(s[0], 10))
      );
    });
    dataSource = filterDataSource;
  }

  if (params.path) {
    dataSource = dataSource.filter(data => data.path.indexOf(params.path) > -1);
  }

  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }

  const result = {
    list: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(params.currentPage, 10) || 1,
    },
  };

  return result;
}

export default getMeasure;
