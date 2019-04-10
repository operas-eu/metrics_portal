import React from 'react';
import { FormattedMessage } from 'umi/locale';

import gettingStartedEnGB from './markdown/getting-started.en-GB.md';
import translationSrvEnGB from './markdown/identifier-translation-service.en-GB.md';
import googleAnalyticsEnGB from './markdown/google-analytics.en-GB.md';
import matomoEnGB from './markdown/matomo.en-GB.md';
import accessLogsEnGB from './markdown/access-logs.en-GB.md';
import googleBooksEnGB from './markdown/google-books.en-GB.md';
import openEditionEnGB from './markdown/open-edition.en-GB.md';
import oapenEnGB from './markdown/oapen.en-GB.md';
import jstorEnGB from './markdown/jstor.en-GB.md';
import worldReaderEnGB from './markdown/world-reader.en-GB.md';
import unglueitEnGB from './markdown/unglueit.en-GB.md';
import openaireEnGB from './markdown/openaire.en-GB.md';
import irusUkEnGB from './markdown/irus-uk.en-GB.md';
import wikiversityEnGB from './markdown/wikiversity.en-GB.md';
import metricsApiEnGB from './markdown/metrics-api.en-GB.md';
import countriesApiEnGB from './markdown/countries-api.en-GB.md';
import tokensApiEnGB from './markdown/tokens-api.en-GB.md';

export const files = {
  'getting-started': {
    'en-GB': gettingStartedEnGB
  },
  'identifier-translation-service': {
    'en-GB': translationSrvEnGB
  },
  'google-analytics': {
    'en-GB': googleAnalyticsEnGB
  },
  'matomo': {
    'en-GB': matomoEnGB
  },
  'access-logs': {
    'en-GB': accessLogsEnGB
  },
  'google-books': {
    'en-GB': googleBooksEnGB
  },
  'open-edition': {
    'en-GB': openEditionEnGB
  },
  'oapen': {
    'en-GB': oapenEnGB
  },
  'jstor': {
    'en-GB': jstorEnGB
  },
  'world-reader': {
    'en-GB': worldReaderEnGB
  },
  'unglueit': {
    'en-GB': unglueitEnGB
  },
  'openaire': {
    'en-GB': openaireEnGB
  },
  'irus-uk': {
    'en-GB': irusUkEnGB
  },
  'wikiversity': {
    'en-GB': wikiversityEnGB
  },
  'metrics-api': {
    'en-GB': metricsApiEnGB
  },
  'countries-api': {
    'en-GB': countriesApiEnGB
  },
  'tokens-api': {
    'en-GB': tokensApiEnGB
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
  'countries-api': '/docs/countries-api',
  'tokens-api': '/docs/tokens-api'
};

/* eslint-disable dot-notation */
export const menu = [
  {
    'name': <FormattedMessage
      id="menu.quickstart"
      defaultMessage="Getting Started"
    />,
    'path': paths['getting-started']
  },
  {
    'name': <FormattedMessage
      id="menu.translationsrv"
      defaultMessage="Identifier Translation Service"
    />,
    'path': paths['identifier-translation-service']
  },
  {
    'name': <FormattedMessage
      id="menu.tokensapi"
      defaultMessage="Tokens API"
    />,
    'path': paths['tokens-api']
  },
  {
    'name': <FormattedMessage
      id="menu.googlebooks"
      defaultMessage="Google Books Driver"
    />,
    'path': paths['google-books']
  },
  {
    'name': <FormattedMessage
      id="menu.googleanalytics"
      defaultMessage="Google Analytics Driver"
    />,
    'path': paths['google-analytics']
  },
  {
    'name': <FormattedMessage
      id="menu.worldreader"
      defaultMessage="World Reader Driver"
    />,
    'path': paths['world-reader']
  }
];

