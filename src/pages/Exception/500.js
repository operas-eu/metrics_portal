import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import Exception from '@/components/Exception';

const Exception500 = () => (
  <Fragment>
    <meta name="robots" content="noindex" />
    <Exception
      type="500"
      desc={formatMessage({ id: 'app.exception.description.500' })}
      linkElement={Link}
      backText={formatMessage({ id: 'app.exception.back' })}
    />
  </Fragment>
);

export default Exception500;
