import React, { Suspense } from 'react';
import { formatMessage } from 'umi/locale';
import { Card } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageLoading from '@/components/PageLoading';

/* eslint-disable react/no-danger */
const AcceptableUsePolicy = () => (
  <PageHeaderWrapper>
    <Suspense fallback={<PageLoading />}>
      <Card>
        <h2
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.use.policy.title' })
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.use.policy.text' })
          }}
        />
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point1' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point2' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point3' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point4' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point5' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point6' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point7' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point8' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point9' })
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: 'app.use.policy.text.point10' })
            }}
          />
        </ul>
        <p
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.use.policy.email.global' })
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.use.policy.email.security' })
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.use.policy.privacy.stmt' })
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: 'app.use.policy.based.on' })
          }}
        />
      </Card>
    </Suspense>
  </PageHeaderWrapper>
);

export default AcceptableUsePolicy;
