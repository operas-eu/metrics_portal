import React, { PureComponent } from 'react';
import { setLocale, getLocale } from 'umi/locale';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export default class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const locales = [
      'en-GB',
      'es-ES',
      'el-GR',
//      'fr-FR',
//      'de-DE',
//      'it-IT',
//      'nl-NL'
    ];
    const languageLabels = {
      'en-GB': 'English',
      'es-ES': 'Español',
      'el-GR': 'Ελληνικά',
//      'fr-FR': 'Français',
//      'de-DE': 'Deutsche',
//      'it-IT': 'Italiano',
//      'nl-NL': 'Nederlands'
    };
    const languageIcons = {
      'en-GB': '🇬🇧',
      'es-ES': '🇪🇸',
      'el-GR': '🇬🇷',
//      'fr-FR': '🇫🇷',
//      'de-DE': '🇩🇪',
//      'it-IT': '🇮🇹',
//      'nl-NL': '🇳🇱'
    };
    const { className } = this.props;
    const selectedLang = getLocale();
    const langMenu = (
      <Menu
        className={styles.menu}
        selectedKeys={[selectedLang]}
        onClick={this.changeLang}
      >
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          {languageIcons[selectedLang]} {languageLabels[selectedLang]}{' '}
          <Icon type="caret-down" />
        </span>
      </HeaderDropdown>
    );
  }
}
