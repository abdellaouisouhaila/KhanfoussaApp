import * as Notifications from 'expo-notifications';

export const scheduleNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Rappel',
      body: 'Ne manquez pas nos dernières mises à jour !',
    },
    trigger: { seconds: 5 },
  });
};
