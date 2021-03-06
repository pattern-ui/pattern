import { createContext } from 'react';
import { NotificationsContextProps } from './types';

export const NotificationsContext = createContext<NotificationsContextProps>(null);
NotificationsContext.displayName = '@pattern-ui/notifications/NotificationsContext';
