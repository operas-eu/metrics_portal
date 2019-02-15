import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { FormattedMessage } from 'umi/locale';
import { Card, Form } from 'antd';
import Link from 'umi/link';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import TagSelect from '@/components/TagSelect';
import StandardFormRow from '@/components/StandardFormRow';
import styles from './Measures.less';

const FormItem = Form.Item;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

/* eslint react/no-multi-comp:0 */
@connect(({ measure, loading }) => ({
  measure,
  loading: loading.models.measure
}))
@Form.create()
class List extends PureComponent {
  state = {
    formValues: {}
  };

  columns = [
    {
      title: <FormattedMessage id="measures.measure" />,
      dataIndex: 'measure',
      render: (text, record) => (
        <Fragment>
          <Link to={record.path}>
              {record.measure.replace('https://', '').replace('http://', '')}
          </Link>
        </Fragment>
      )
    },
    {
      title: <FormattedMessage id="measures.source" />,
      dataIndex: 'source',
      sorter: true
    },
    {
      title: <FormattedMessage id="measures.type" />,
      dataIndex: 'type',
      sorter: true,
      render: val => <FormattedMessage id={`measures.type.${val}`} />
    },
    {
      title: <FormattedMessage id="measures.version" />,
      dataIndex: 'version',
      sorter: true,
      render: val => <span>v{val}</span>
    },
    {
      title: '',
      render: (text, record) => (
        <Fragment>
          <Link to={record.path}>
            <FormattedMessage id="measures.details" />
          </Link>
        </Fragment>
      )
    }
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'measure/fetch'
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'measure/fetch',
      payload: params
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {}
    });
    dispatch({
      type: 'measure/fetch',
      payload: {}
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf()
      };

      this.setState({
        formValues: values
      });

      dispatch({
        type: 'measure/fetch',
        payload: values
      });
    });
  };

  renderForm(data) {
    const {
      form: { getFieldDecorator }
    } = this.props;

    // get unique sources and types for filtering
    const sources = [...new Set(data.list.map(item => item.source))];
    const types = [...new Set(data.list.map(item => item.type))];

    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <StandardFormRow
          title={<FormattedMessage id="measures.source" />}
          block
          style={{ paddingBottom: 11 }}
        >
          <FormItem>
            {getFieldDecorator('source')(
              <TagSelect expandable>
                {sources.map(source => (
                  <TagSelect.Option key={source} value={source}>
                    {source}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            )}
          </FormItem>
        </StandardFormRow>
        <StandardFormRow
          title={<FormattedMessage id="measures.type" />}
          block
          style={{ paddingBottom: 11 }}
        >
          <FormItem>
            {getFieldDecorator('type')(
              <TagSelect expandable>
                {types.map(type => (
                  <TagSelect.Option key={type} value={type}>
                    {<FormattedMessage id={`measures.type.${type}`} />}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            )}
          </FormItem>
        </StandardFormRow>
      </Form>
    );
  }

  render() {
    const {
      measure: { data },
      loading
    } = this.props;

    return data && data.list && data.list.length ? (
      <PageHeaderWrapper>
        <Card loading={loading}>
          <div className={styles.tableList}>
            <StandardTable
              loading={loading}
              data={data}
              columns={this.columns}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    ) : (
      <FormattedMessage id="app.loading" />
    );
  }
}

export default List;
