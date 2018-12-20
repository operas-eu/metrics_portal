import React, { Suspense } from 'react';
import { FormattedMessage } from 'umi/locale';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageLoading from '@/components/PageLoading';
import LinksRow from './LinksRow';

const Home = () => (
  <PageHeaderWrapper
    title={<FormattedMessage id="app.home.title" />}
    content={<FormattedMessage id="app.home.description" />}
    hiddenBreadcrumb
  >
    <Suspense fallback={<PageLoading />}>
      <LinksRow />
    </Suspense>
  </PageHeaderWrapper>
);

export default Home;
