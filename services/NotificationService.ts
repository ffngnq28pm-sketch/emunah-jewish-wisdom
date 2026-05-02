import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export const NotificationService = {
  async requestPermissions(): Promise<boolean> {
    if (Platform.OS === 'web') return false;
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  },

  async scheduleEveningCheckin(): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      await NotificationService.cancelEveningCheckin();
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '✡️ Défi du soir',
          body: "Avez-vous accompli votre pratique spirituelle aujourd'hui ?",
          data: { type: 'evening_checkin' },
          sound: false,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: 20,
          minute: 0,
        },
      });
    } catch {}
  },

  async cancelEveningCheckin(): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      const scheduled = await Notifications.getAllScheduledNotificationsAsync();
      for (const n of scheduled) {
        if ((n.content.data as any)?.type === 'evening_checkin') {
          await Notifications.cancelScheduledNotificationAsync(n.identifier);
        }
      }
    } catch {}
  },
};
