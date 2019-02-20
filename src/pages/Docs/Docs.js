import React, { PureComponent, Suspense } from 'react';
import { getLocale } from 'umi/locale';
import Link from 'umi/link';
import { Card, Col, Row } from 'antd';
import ReactMarkdown from 'react-markdown';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageLoading from '@/components/PageLoading';
import styles from './Docs.less';

// Document paths and menu items are specified in data.js
import { files, paths, menus } from './data.js';

const menuColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 8,
  lg: 8,
  xl: 6,
};

const textColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 16,
  lg: 16,
  xl: 18,
};

class Docs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { terms: null }
  }

  componentWillMount() {
    const pathname = window.location.pathname;
    const path = pathname.replace('/docs/', '');
    // const selectedLang = getLocale();
    const selectedLang = 'en-GB';
    const fileName = files[path][selectedLang];
    fetch(fileName)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ markdown: text, path, pathname })
      })
  }

  render() {
    return (
      <Suspense fallback={<PageLoading />}>
        <Card>
          <Row>
            <Col {...menuColResponsiveProps}>
              <ul className={styles.menucontainer}>
              {menu.map(entry => (
                  <li className={this.state.pathname == entry.path
                                 ? styles.itemselected : styles.menuitem}
                      key={entry.path}>
                    <Link to={entry.path}>{entry.name}</Link>
                  </li>
              ))}
              </ul>
            </Col>
            <Col {...textColResponsiveProps}>
              <ReactMarkdown
                className={styles.markdown}
                source={this.state.markdown} />
            </Col>
          </Row>
        </Card>
      </Suspense>
    );
  }
}

export default Docs;
