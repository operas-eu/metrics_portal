import React, { Fragment } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import { FormattedMessage } from 'umi/locale';
import LinkCard from './LinkCard';

const twoColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  style: { marginBottom: 24 }
};

const oneColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
  style: { marginBottom: 24 }
};

const LinksRow = () => (
  <Fragment>
    <Row gutter={24}>
      <Col {...oneColResponsiveProps}>
        <LinkCard
          bordered={false}
          title={<FormattedMessage id="menu.quickstart" />}
          icon={<Icon type="read" theme="filled" />}
          content={<FormattedMessage id="app.home.quickstart" />}
          action={
            <Button>
              <FormattedMessage id="app.home.quickstart.btn" />
            </Button>
          }
          route="/docs/getting-started"
          contentHeight={122}
        />
      </Col>
    </Row>
    <Row gutter={24}>
      <Col {...twoColResponsiveProps}>
        <LinkCard
          bordered={false}
          title={<FormattedMessage id="menu.measures" />}
          icon={<Icon type="area-chart" />}
          content={<FormattedMessage id="app.home.measures" />}
          action={
            <Button>
              <FormattedMessage id="app.home.measures.btn" />
            </Button>
          }
          route="/measures"
          contentHeight={122}
        />
      </Col>
      <Col {...twoColResponsiveProps}>
        <LinkCard
          bordered={false}
          title={<FormattedMessage id="menu.principles" />}
          icon={<Icon type="heart" theme="filled" />}
          content={<FormattedMessage id="app.home.principles" />}
          action={
            <Button>
              <FormattedMessage id="app.home.principles.btn" />
            </Button>
          }
          route="/principles"
          contentHeight={122}
        />
      </Col>
    </Row>
  </Fragment>
);

export default LinksRow;
