import * as React from 'react';
import styles from './EventSequence.module.scss';
import classNames from 'classnames/bind';
import { EventItemOverview } from '../../types/eventItem';

const cx = classNames.bind(styles);

interface EventSequenceProps {
  className?: string;
  eventItemList?: EventItemOverview[];
}

const EventSequence: React.FC<EventSequenceProps> = ({
  className,
  eventItemList = [],
}) => {
  return (
    <div className={cx(styles.eventSequence, className)}>
      <div className={styles.EventItemList}>
        {eventItemList.map((eventItem) => {
          return (
            <div className={styles.eventItem}>
              <div className={styles.dateTime}>{eventItem.dateTime}</div>
              <div className={styles.eventName}>{eventItem.eventName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventSequence;
