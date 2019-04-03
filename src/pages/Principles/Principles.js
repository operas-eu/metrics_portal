import React, { Suspense } from 'react';
import { formatMessage } from 'umi/locale';
import { Card } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageLoading from '@/components/PageLoading';

/* eslint-disable react/no-danger */
const Principles = () => (
  <PageHeaderWrapper>
    <Suspense fallback={<PageLoading />}>
      <Card>
        <span
          dangerouslySetInnerHTML={{
            __html: formatMessage({id: 'app.principles.description'})
          }}
        />
      </Card>
    </Suspense>
  </PageHeaderWrapper>
);

export default Principles;
