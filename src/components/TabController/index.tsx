import * as React from 'react';
import styles from './TabController.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface TabControllerProps {
  className?: string;
}

const TabController: React.FC<TabControllerProps> = ({ className }) => {
  return (
    <div className={cx(styles.tabController, className)}>
      111TabController Component
    </div>
  );
};

export default TabController;
