import { FormattedMessage } from 'umi/locale';

import gettingStarted_enGB from './getting-started.en-GB.md';
import translationSrv_enGB from './identifier-translation-service.en-GB.md';
import googleAnalytics_enGB from './google-analytics.en-GB.md';
import matomo_enGB from './matomo.en-GB.md';
import accessLogs_enGB from './access-logs.en-GB.md';
import googleBooks_enGB from './google-books.en-GB.md';
import openEdition_enGB from './open-edition.en-GB.md';
import oapen_enGB from './oapen.en-GB.md';
import jstor_enGB from './jstor.en-GB.md';
import worldReader_enGB from './world-reader.en-GB.md';
import unglueit_enGB from './unglueit.en-GB.md';
import openaire_enGB from './openaire.en-GB.md';
import irusUk_enGB from './irus-uk.en-GB.md';
import wikiversity_enGB from './wikiversity.en-GB.md';
import metricsApi_enGB from './metrics-api.en-GB.md';
import countriesApi_enGB from './countries-api.en-GB.md';

export const files = {
  'getting-started': {
    'en-GB': gettingStarted_enGB
  },
  'identifier-translation-service': {
    'en-GB': translationSrv_enGB
  },
  'google-analytics': {
    'en-GB': googleAnalytics_enGB
  },
  'matomo': {
    'en-GB': matomo_enGB
  },
  'access-logs': {
    'en-GB': accessLogs_enGB
  },
  'google-books': {
    'en-GB': googleBooks_enGB
  },
  'open-edition': {
    'en-GB': openEdition_enGB
  },
  'oapen': {
    'en-GB': oapen_enGB
  },
  'jstor': {
    'en-GB': jstor_enGB
  },
  'world-reader': {
    'en-GB': worldReader_enGB
  },
  'unglueit': {
    'en-GB': unglueit_enGB
  },
  'openaire': {
    'en-GB': openaire_enGB
  },
  'irus-uk': {
    'en-GB': irusUk_enGB
  },
  'wikiversity': {
    'en-GB': wikiversity_enGB
  },
  'metrics-api': {
    'en-GB': metricsApi_enGB
  },
  'countries-api': {
    'en-GB': countriesApi_enGB
  }
};

export const paths = {
  'getting-started': '/docs/getting-started',
  'identifier-translation-service': '/docs/identifier-translation-service',
  'google-analytics': '/docs/google-analytics',
  'matomo': '/docs/matomo',
  'access-logs': '/docs/access-logs',
  'google-books': '/docs/google-books',
  'open-edition': '/docs/open-edition',
  'oapen': '/docs/oapen',
  'jstor': '/docs/jstor',
  'world-reader': '/docs/world-reader',
  'unglueit': '/docs/unglueit',
  'openaire': '/docs/openaire',
  'irus-uk': '/docs/irus-uk',
  'wikiversity': '/docs/wikiversity',
  'metrics-api': '/docs/metrics-api',
  'countries-api': '/docs/countries-api'
};

export const menu = [
  {
    'name': <FormattedMessage id="menu.quickstart" />,
    'path': paths['getting-started']
  },
  {
    'name': <FormattedMessage id="menu.translationsrv" />,
    'path': paths['identifier-translation-service']
  },
  {
    'name': <FormattedMessage id="menu.googleanalytics" />,
    'path': paths['google-analytics']
  },
  {
    'name': <FormattedMessage id="menu.matomo" />,
    'path': paths['matomo']
  },
  {
    'name': <FormattedMessage id="menu.accesslogs" />,
    'path': paths['access-logs']
  },
  {
    'name': <FormattedMessage id="menu.googlebooks" />,
    'path': paths['google-books']
  },
  {
    'name': <FormattedMessage id="menu.openedition" />,
    'path': paths['open-edition']
  },
  {
    'name': <FormattedMessage id="menu.oapen" />,
    'path': paths['oapen']
  },
  {
    'name': <FormattedMessage id="menu.jstor" />,
    'path': paths['jstor']
  },
  {
    'name': <FormattedMessage id="menu.worldreader" />,
    'path': paths['world-reader']
  },
  {
    'name': <FormattedMessage id="menu.unglueit" />,
    'path': paths['unglueit']
  },
  {
    'name': <FormattedMessage id="menu.openaire" />,
    'path': paths['openaire']
  },
  {
    'name': <FormattedMessage id="menu.irusuk" />,
    'path': paths['irus-uk']
  },
  {
    'name': <FormattedMessage id="menu.wikiversity" />,
    'path': paths['wikiversity']
  },
  {
    'name': <FormattedMessage id="menu.metricsapi" />,
    'path': paths['metrics-api']
  },
  {
    'name': <FormattedMessage id="menu.countriesapi" />,
    'path': paths['countries-api']
  }
];

