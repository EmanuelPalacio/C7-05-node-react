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
    notifyButton: {
      enable: true,
    }
  });
  OneSignal.showSlidedownPrompt();
  return OneSignal.getUserId();
}

export async function registerNotificationId (idTurn:string,idNotif:string) {
  await axios.post(`${API_URL}/turns/${idTurn}`,{id:idNotif}, CONFIG_TOKEN)
}