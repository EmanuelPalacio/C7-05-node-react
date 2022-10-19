import { API_URL, CONFIG_TOKEN } from '@/utils/config';
import axios from 'axios';
import OneSignal from 'react-onesignal';

export async function runOneSignal() {
  await OneSignal.init({
    appId: '560e5ab2-9ceb-4379-8cef-545851f0b9e9',
    allowLocalhostAsSecureOrigin: true,
    subdomainName: '',
    serviceWorkerPath: 'OneSignalSDKWorker.js',
    // eslint-disable-next-line camelcase
    safari_web_id: 'web.onesignal.auto.2473987d-7114-4e84-8494-f768208d432f',
    notificationClickHandlerMatch: 'origin',
    notificationClickHandlerAction: 'focus',

    promptOptions: {
      slidedown: {
        prompts: [
          {
            type: 'push', // current types are "push" & "category"
            autoPrompt: true,
            text: {
              actionMessage: 'Necesitamos que actives las notificaciones para avisarte cuando el pedido está listo.',
              acceptButton: 'Activar',
              cancelButton: 'No',
            },
            delay: {
              pageViews: 0,
              timeDelay: 1,
            },
          },
          {
            type: 'category',
            autoPrompt: true,
            text: {
              actionMessage: 'Necesitamos que actives las notificaciones para avisarte cuando el pedido está listo.',
              acceptButton: 'Activar',
              cancelButton: 'No',

              negativeUpdateButton: 'Cancelar',
              positiveUpdateButton: 'Guardar',
              updateMessage: '¿Te gustaría recibir promociones de este negocio?',
            },
            delay: {
              pageViews: 0,
              timeDelay: 0,
            },
            categories: [
              {
                tag: 'promociones',
                label: 'Promociones',
              },
            ],
          },
        ],
      },
    },
  });
  return OneSignal.getUserId();
}

export async function showPrompt(idTurn: string) {
  await OneSignal.showSlidedownPrompt({ force: true });
  OneSignal.on('subscriptionChange', async () => {
    const id = await OneSignal.getUserId();
    if (id) {
      console.log(`Registrando notificacion con id ${id}`);
      registerNotificationId(idTurn, id);
    }
  });
}

export function showCategories() {
  let permission;
  OneSignal.isPushNotificationsEnabled((isEnabled) => {
    if (isEnabled) {
      permission = isEnabled;
      OneSignal.showCategorySlidedown({ force: true });
    } else {
      OneSignal.on('notificationPermissionChange', (permissionChange) => {
        permission = permissionChange.to;
        console.log(permission);
      });
    }
  });
}

export async function registerNotificationId(idTurn: string, idNotif: string) {
  await axios.post(`${API_URL}/turns/${idTurn}`, { id: idNotif }, CONFIG_TOKEN);
}
