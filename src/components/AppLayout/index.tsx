import * as React from 'react';
import styles from './AppLayout.module.scss';
import classNames from 'classnames/bind';
import TabMenu from '../TabMenu';
import EventSequence from '../EventSequence';
import EventDetail from '../EventDetail';
import TabController from '../TabController';
import { useMenuStore } from '../../stores/eventStore';

const cx = classNames.bind(styles);

const AppLayout = () => {
  const { currentMenu, setMenu } = useMenuStore();

  return (
    <div className={styles.appLayout}>
      <TabMenu className={styles.tabMenu}></TabMenu>
      <TabController className={styles.tabController}></TabController>
      <div className={styles.eventWrap}>
        <EventSequence className={styles.eventSequence}></EventSequence>
        <EventDetail className={styles.eventDetail}></EventDetail>
      </div>
    </div>
  );
};

export default AppLayout;
