import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { FormattedMessage, formatMessage } from 'umi/locale';
import { Card, Form, Button, Icon, Tooltip, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import styles from './Measures.less';

const { Description } = DescriptionList;

const tooltipIcon = (
  <Icon
    style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }}
    type="info-circle-o"
  />
);

/* eslint react/no-multi-comp:0 */
@connect(({ measure, loading }) => ({
  measure,
  loading: loading.models.measure
}))
@Form.create()
class List extends PureComponent {
  static generateBreadcrumbs(entry) {
    return [
      { title: <FormattedMessage id="menu.home" />, href: '/' },
      { title: <FormattedMessage id="menu.measures" />, href: '/measures' },
      { title: entry.path }
    ];
  }

  static renderTitle(entry) {
    return (
      <a href={entry.measure}>
        {entry.measure.replace('https://', '').replace('http://', '')}
      </a>
    );
  }

  static renderContent(entry) {
    return (
      <DescriptionList className={styles.headerList} size="small" col="1">
        <Description
          term={
            <span>
              <FormattedMessage id="measures.source" />
              <Tooltip
                title={<FormattedMessage id="measures.source.description" />}
              >
                {tooltipIcon}
              </Tooltip>
            </span>
          }
        >
          {entry.source}
        </Description>
        <Description
          term={
            <span>
              <FormattedMessage id="measures.type" />
              <Tooltip
                title={<FormattedMessage id="measures.type.description" />}
              >
                {tooltipIcon}
              </Tooltip>
            </span>
          }
        >
          <FormattedMessage id={`measures.type.${entry.type}`} />
        </Description>
        <Description
          term={
            <span>
              <FormattedMessage id="measures.version" />
              <Tooltip
                title={<FormattedMessage id="measures.version.description" />}
              >
                {tooltipIcon}
              </Tooltip>
            </span>
          }
        >
          v{entry.version}
        </Description>
      </DescriptionList>
    );
  }

  static renderAction(entry) {
    return (
      <CopyToClipboard
        text={entry.measure}
        onCopy={() =>
          message.success(formatMessage({ id: 'measures.clipboard' }))
        }
      >
        <Button icon="link" />
      </CopyToClipboard>
    );
  }

  componentDidMount() {
    const path = window.location.pathname.replace(/^\//g, ''); // remove first slash
    const { dispatch } = this.props;
    dispatch({
      type: 'measure/fetch',
      payload: { path }
    });
  }

  render() {
    const {
      measure: { data },
      loading
    } = this.props;

    /* eslint-disable react/no-danger */
    return data && data.measure ? (
      <PageHeaderWrapper
        loading={loading}
        title={List.renderTitle(data)}
        logo={data.logo ? <img alt="" src={data.logo} /> : ''}
        content={List.renderContent(data)}
        action={List.renderAction(data)}
        breadcrumbList={List.generateBreadcrumbs(data)}
      >
        <Card loading={loading}>
          <span
            dangerouslySetInnerHTML={{
              __html: formatMessage({
                id: `measures.descriptions.${data.path.replace(/\//g, '.')}`
              })
            }}
          />
        </Card>
      </PageHeaderWrapper>
    ) : (
      <FormattedMessage id="app.loading" />
    );
  }
}

export default List;
