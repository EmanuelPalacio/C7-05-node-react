import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  await OneSignal.init({
    appId: '560e5ab2-9ceb-4379-8cef-545851f0b9e9',
    allowLocalhostAsSecureOrigin: true,
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
