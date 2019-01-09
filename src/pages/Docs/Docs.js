import React, { PureComponent, Suspense } from 'react';
import { getLocale } from 'umi/locale';
import { Card, Col, Row } from 'antd';
import ReactMarkdown from 'react-markdown';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageLoading from '@/components/PageLoading';
import styles from './Docs.less';

import gettingStarted_enGB from './getting-started.en-GB.md';
import gettingStarted_esES from './getting-started.es-ES.md';

const files = {
  'getting-started': {
    'en-GB': gettingStarted_enGB,
    'es-ES': gettingStarted_esES
  }
};

const names = {
  'getting-started': 'Getting Started'
};

const paths = {
  'getting-started': '/docs/getting-started'
};

const menu = [
  {
    'name': names['getting-started'],
    'path': paths['getting-started']
  },
];

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
    const path = window.location.pathname.replace('/docs/', '');
    const selectedLang = getLocale();
    const fileName = files[path][selectedLang];
    fetch(fileName)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ markdown: text, path })
      })
  }

  render() {
    return (
      <Suspense fallback={<PageLoading />}>
        <Card>
          <Row>
            <Col {...menuColResponsiveProps}>
              <ul>
              {menu.map(entry => (
                  <li><a href={entry.path}>{entry.name}</a></li>
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
