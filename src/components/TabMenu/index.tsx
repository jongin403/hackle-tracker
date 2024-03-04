import * as React from 'react';
import styles from './TabMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const menuNames = ['Events', 'API Options', 'Settings'];

interface TabMenuProps {
  className?: string;
}

const TabMenu = (className: TabMenuProps) => {
  return (
    <div className={cx(styles.tabMenu, className)}>
      <div className={styles.logo}>로고</div>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>메뉴명</div>
      </div>
    </div>
  );
};

export default TabMenu;
