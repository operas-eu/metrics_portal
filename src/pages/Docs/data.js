import { FormattedMessage } from 'umi/locale';

import gettingStarted_enGB from './markdown/getting-started.en-GB.md';
import translationSrv_enGB from './markdown/identifier-translation-service.en-GB.md';
import googleAnalytics_enGB from './markdown/google-analytics.en-GB.md';
import matomo_enGB from './markdown/matomo.en-GB.md';
import accessLogs_enGB from './markdown/access-logs.en-GB.md';
import googleBooks_enGB from './markdown/google-books.en-GB.md';
import openEdition_enGB from './markdown/open-edition.en-GB.md';
import oapen_enGB from './markdown/oapen.en-GB.md';
import jstor_enGB from './markdown/jstor.en-GB.md';
import worldReader_enGB from './markdown/world-reader.en-GB.md';
import unglueit_enGB from './markdown/unglueit.en-GB.md';
import openaire_enGB from './markdown/openaire.en-GB.md';
import irusUk_enGB from './markdown/irus-uk.en-GB.md';
import wikiversity_enGB from './markdown/wikiversity.en-GB.md';
import metricsApi_enGB from './markdown/metrics-api.en-GB.md';
import countriesApi_enGB from './markdown/countries-api.en-GB.md';

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
    'name': <FormattedMessage id="menu.quickstart"
             defaultMessage="Getting Started" />,
    'path': paths['getting-started']
  },
  {
    'name': <FormattedMessage id="menu.translationsrv"
             defaultMessage="Identifier translation Service" />,
    'path': paths['identifier-translation-service']
  },
  {
    'name': <FormattedMessage id="menu.metricsapi"
             defaultMessage="Metrics API" />,
    'path': paths['metrics-api']
  },
  {
    'name': <FormattedMessage id="menu.googleanalytics"
             defaultMessage="Google Analytics Driver" />,
    'path': paths['google-analytics']
  },
  {
    'name': <FormattedMessage id="menu.matomo"
             defaultMessage="Matomo Driver" />,
    'path': paths['matomo']
  },
  {
    'name': <FormattedMessage id="menu.accesslogs"
             defaultMessage="Access Logs Driver" />,
    'path': paths['access-logs']
  },
  {
    'name': <FormattedMessage id="menu.googlebooks"
             defaultMessage="Google Books Driver" />,
    'path': paths['google-books']
  },
  {
    'name': <FormattedMessage id="menu.openedition"
             defaultMessage="Open Edition Driver" />,
    'path': paths['open-edition']
  },
  {
    'name': <FormattedMessage id="menu.oapen"
             defaultMessage="OAPEN Driver" />,
    'path': paths['oapen']
  },
  {
    'name': <FormattedMessage id="menu.jstor"
             defaultMessage="JSTOR Driver" />,
    'path': paths['jstor']
  },
  {
    'name': <FormattedMessage id="menu.worldreader"
             defaultMessage="World Reader Driver" />,
    'path': paths['world-reader']
  },
  {
    'name': <FormattedMessage id="menu.unglueit"
             defaultMessage="Unglue.it Driver" />,
    'path': paths['unglueit']
  },
  {
    'name': <FormattedMessage id="menu.openaire"
             defaultMessage="OpenAIRE Driver" />,
    'path': paths['openaire']
  },
  {
    'name': <FormattedMessage id="menu.irusuk"
             defaultMessage="IRUS-UK Driver" />,
    'path': paths['irus-uk']
  },
  {
    'name': <FormattedMessage id="menu.wikiversity"
             defaultMessage="Wikiversity Driver" />,
    'path': paths['wikiversity']
  },
  {
    'name': <FormattedMessage id="menu.countriesapi"
             defaultMessage="Countries API" />,
    'path': paths['countries-api']
  }
];

