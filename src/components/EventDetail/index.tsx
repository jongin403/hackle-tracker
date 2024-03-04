import * as React from 'react';
import styles from './EventDetail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface EventDetailProps {
  className?: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ className }) => {
  return (
    <div className={cx(styles.eventDetail, className)}>
      <div className={styles.eventDetail}>EventDetail</div>
    </div>
  );
};

export default EventDetail;
