import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'OPERAS',
          title: 'OPERAS',
          href: 'http://operas-eu.org',
          blankTarget: true
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/hirmeos',
          blankTarget: true
        },
        {
          key: 'HIRMEOS',
          title: 'HIRMEOS',
          href: 'http://www.hirmeos.eu',
          blankTarget: true
        }
      ]}
      copyright={
        <Fragment>
          Unless otherwise indicated, all materials created by the Hirmeos
          Project are licensed under a{' '}
          <a href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License
          </a>
          .
          <br /> <a href="/privacy-policy">Privacy policy</a> -{' '}
          <a href="/acceptable-use-policy">
            Acceptable Use Policy and Conditions of Use
          </a>
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
