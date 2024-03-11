import * as React from 'react';
import styles from './TabController.module.scss';
import classNames from 'classnames/bind';
import { useMenuStore } from '../../stores/eventStore';

const cx = classNames.bind(styles);

interface TabControllerProps {
  className?: string;
}

const TabController: React.FC<TabControllerProps> = ({ className }) => {
  const { currentMenu, menuList, setMenu } = useMenuStore();
  return (
    <div className={cx('tab-controller', className)}>
      <div className={cx('tab-controller__tab-list', className)}>
        {menuList.map((tabItem: string) => {
          const isActive = tabItem === currentMenu;
          return (
            <button
              className={cx('tab-controller__tab-button', className)}
              onClick={() => {
                setMenu(tabItem);
              }}
            >
              {tabItem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabController;
