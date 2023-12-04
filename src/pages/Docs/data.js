import React from 'react';
import { FormattedMessage } from 'umi/locale';

import gettingStartedEnGB from './markdown/getting-started.en-GB.md';
import translationSrvEnGB from './markdown/identifier-translation-service.en-GB.md';
import googleAnalyticsEnGB from './markdown/google-analytics.en-GB.md';
import metricsDWEnGB from './markdown/metrics-drivers-wrapper-GB.md';
import matomoEnGB from './markdown/matomo.en-GB.md';
import accessLogsEnGB from './markdown/access-logs-local.en-GB.md';
import crossrefCitedbyEnGB from './markdown/crossref-citedby.en-GB.md';
import googleBooksEnGB from './markdown/google-books.en-GB.md';
import jstorEnGB from './markdown/jstor.en-GB.md';
import serverAccessEnGB from './markdown/server-access-logs.en-GB.md';
import unglueitEnGB from './markdown/unglueit.en-GB.md';
import irusUkEnGB from './markdown/irus-uk.en-GB.md';
import metricsApiEnGB from './markdown/metrics-api.en-GB.md';
import countriesApiEnGB from './markdown/countries-api.en-GB.md';
import tokensApiEnGB from './markdown/tokens-api.en-GB.md';
import annotationEnGB from './markdown/annotation.en-GB.md';
import altmetricsEnGB from './markdown/altmetrics.en-GB.md';
import widgetEnGB from './markdown/widget.en-GB.md';

import gettingStartedElGR from './markdown/getting-started.el-GR.md';
import translationSrvElGR from './markdown/identifier-translation-service.el-GR.md';
import metricsDWElGR from './markdown/metrics-drivers-wrapper-GR.md';
import googleAnalyticsElGR from './markdown/google-analytics.el-GR.md';
import matomoElGR from './markdown/matomo.el-GR.md';
import accessLogsElGR from './markdown/access-logs-local.el-GR.md';
import crossrefCitedbyElGR from './markdown/crossref-citedby.el-GR.md';
import googleBooksElGR from './markdown/google-books.el-GR.md';
import jstorElGR from './markdown/jstor.el-GR.md';
import serverAccessElGR from './markdown/server-access-logs.el-GR.md';
import unglueitElGR from './markdown/unglueit.el-GR.md';
import irusUkElGR from './markdown/irus-uk.el-GR.md';
import metricsApiElGR from './markdown/metrics-api.el-GR.md';
import countriesApiElGR from './markdown/countries-api.el-GR.md';
import tokensApiElGR from './markdown/tokens-api.el-GR.md';
import annotationElGR from './markdown/annotation.el-GR.md';
import altmetricsElGR from './markdown/altmetrics.el-GR.md';
import widgetElGR from './markdown/widget.el-GR.md';

export const files = {
  'getting-started': {
    'en-GB': gettingStartedEnGB,
    'el-GR': gettingStartedElGR
  },
  'identifier-translation-service': {
    'en-GB': translationSrvEnGB,
    'el-GR': translationSrvElGR
  },
  'metrics-drivers-wrapper': {
    'en-GB': metricsDWEnGB,
    'el-GR': metricsDWElGR
  },
  'google-analytics': {
    'en-GB': googleAnalyticsEnGB,
    'el-GR': googleAnalyticsElGR
  },
  'matomo': {
    'en-GB': matomoEnGB,
    'el-GR': matomoElGR
  },
  'access-logs-local': {
    'en-GB': accessLogsEnGB,
    'el-GR': accessLogsElGR
  },
  'crossref-citedby': {
    'en-GB': crossrefCitedbyEnGB,
    'el-GR': crossrefCitedbyElGR
  },
  'google-books': {
    'en-GB': googleBooksEnGB,
    'el-GR': googleBooksElGR
  },
  'jstor': {
    'en-GB': jstorEnGB,
    'el-GR': jstorElGR
  },
  'serverAccess': {
    'en-GB': serverAccessEnGB,
    'el-GR': serverAccessElGR
  },
  'unglueit': {
    'en-GB': unglueitEnGB,
    'el-GR': unglueitElGR
  },
  'irus-uk': {
    'en-GB': irusUkEnGB,
    'el-GR': irusUkElGR
  },
  'metrics-api': {
    'en-GB': metricsApiEnGB,
    'el-GR': metricsApiElGR
  },
  'countries-api': {
    'en-GB': countriesApiEnGB,
    'el-GR': countriesApiElGR
  },
  'tokens-api': {
    'en-GB': tokensApiEnGB,
    'el-GR': tokensApiElGR
  },
  'annotation': {
    'en-GB': annotationEnGB,
    'el-GR': annotationElGR
  },
  'altmetrics': {
    'en-GB': altmetricsEnGB,
    'el-GR': altmetricsElGR
  },
  'widget': {
    'en-GB': widgetEnGB,
    'el-GR': widgetElGR
  }
};

export const paths = {
  'getting-started': '/docs/getting-started',
  'metrics-drivers-wrapper': '/docs/metrics-drivers-wrapper',
  'identifier-translation-service': '/docs/identifier-translation-service',
  'google-analytics': '/docs/google-analytics',
  'matomo': '/docs/matomo',
  'access-logs-local': '/docs/access-logs-local',
  'crossref-citedby': '/docs/crossref-citedby',
  'google-books': '/docs/google-books',
  'jstor': '/docs/jstor',
  'serverAccess': '/docs/serverAccess',
  'unglueit': '/docs/unglueit',
  'irus-uk': '/docs/irus-uk',
  'metrics-api': '/docs/metrics-api',
  'countries-api': '/docs/countries-api',
  'tokens-api': '/docs/tokens-api',
  'annotation': '/docs/annotation',
  'altmetrics': '/docs/altmetrics',
  'widget': '/docs/widget'
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
      id="menu.metrics-drivers"
      defaultMessage="Metrics Drivers Wrapper"
    />,
    'path': paths['metrics-drivers-wrapper']
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
      id="menu.metricsapi"
      defaultMessage="Metrics API"
    />,
    'path': paths['metrics-api']
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
      id="menu.countriesapi"
      defaultMessage="Countries API"
    />,
    'path': paths['countries-api']
  },
  {
    'name': <FormattedMessage
      id="menu.drivers"
      defaultMessage="Drivers"
    />,
    'path': '#'
  },
  {
    'name': <FormattedMessage
      id="menu.access-logs-local"
      defaultMessage="- Access logs Local"
    />,
    'path': paths['access-logs-local']
  },
  {
    'name': <FormattedMessage
      id="menu.crossref-citedby"
      defaultMessage="- Crossref Citedby"
    />,
    'path': paths['crossref-citedby']
  },
  {
    'name': <FormattedMessage
      id="menu.googlebooks"
      defaultMessage="- Google Books Driver"
    />,
    'path': paths['google-books']
  },
  {
    'name': <FormattedMessage
      id="menu.irus-uk"
      defaultMessage="- Irus UK Driver"
    />,
    'path': paths['irus-uk']
  },
  {
    'name': <FormattedMessage
      id="menu.matomo"
      defaultMessage="- Matomo Driver"
    />,
    'path': paths['matomo']
  },
  // unglueit
  {
    'name': <FormattedMessage
      id="menu.unglueit"
      defaultMessage="- UnglueIT Driver"
    />,
    'path': paths['unglueit']
  },
  // google-analytics
  {
    'name': <FormattedMessage
      id="menu.google-analytics"
      defaultMessage="- Google Analytics Driver"
    />,
    'path': paths['google-analytics']
  },  
  {
    'name': <FormattedMessage
      id="menu.annotation"
      defaultMessage="Annotation"
    />,
    'path': paths['annotation']
  },
  {
    'name': <FormattedMessage
      id="menu.altmetrics"
      defaultMessage="Altmetrics"
    />,
    'path': paths['altmetrics']
  },
  {
    'name': <FormattedMessage
      id="menu.widget"
      defaultMessage="Metrics Widget"
    />,
    'path': paths['widget']
  }
];
