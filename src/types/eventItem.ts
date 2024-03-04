export interface EventItemOverview {
  eventName: string;
  dateTime: string;
}

export interface EventItemDetail {
  eventId: string;
  time: string;
  deviceId: string;
  userId: string;
  sessionId: string;
  platform: string;
}

export interface EventItemProperties {
  customPropertyName: string;
  customPropertyValue: string;
}

export type EventItemTotalProps = EventItemOverview &
  EventItemDetail &
  EventItemProperties;
