import React, { Suspense } from 'react';
import { formatMessage } from 'umi/locale';
import { Card } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageLoading from '@/components/PageLoading';

/* eslint-disable react/no-danger */
const PrivacyPolicy = () => (
  <PageHeaderWrapper>
    <Suspense fallback={<PageLoading />}>
      <Card>
        <h2
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.privacy.title' })
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.privacy.text' })
          }}
        />
      </Card>
      <Card>
        <h2
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.collect.title' })
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.collect.text' })
          }}
        />
      </Card>
      <Card>
        <h2
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.use.title' })
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.use.text' })
          }}
        />
      </Card>
      <Card>
        <h2
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.share.title' })
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.privacy.notice.share.text' })
          }}
        />
      </Card>
    </Suspense>
  </PageHeaderWrapper>
);

export default PrivacyPolicy;
