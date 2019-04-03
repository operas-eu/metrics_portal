import React from 'react';
import { Card } from 'antd';
import Link from 'umi/link';
import styles from './LinkCard.less';

class LinkCard extends React.PureComponent {
  renderConnet = () => {
    const {
      contentHeight,
      title,
      icon,
      route,
      action,
      content,
      loading
    } = this.props;
    if (loading) {
      return false;
    }
    return (
      <div className={styles.chartCard}>
        <div className={styles.chartTop}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div
          className={styles.content}
          style={{ height: contentHeight || 'auto' }}
        >
          <div className={contentHeight && styles.contentFixed}>{content}</div>
          <div className={styles.action}>
            <Link to={route}>{action}</Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {
      loading = false,
      contentHeight,
      title,
      icon,
      action,
      route,
      content,
      ...rest
    } = this.props;
    return (
      <Card
        loading={loading}
        bodyStyle={{ padding: '20px 24px 8px 24px' }}
        {...rest}
      >
        {this.renderConnet()}
      </Card>
    );
  }
}

export default LinkCard;
