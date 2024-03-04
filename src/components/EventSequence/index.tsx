import * as React from 'react';
import styles from './EventSequence.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface EventSequenceProps {
  className?: string;
}

const EventSequence: React.FC<EventSequenceProps> = ({ className }) => {
  return (
    <div className={cx(styles.eventSequence, className)}>
      <div className={styles.eventSequence}>111Header Component</div>
    </div>
  );
};

export default EventSequence;
