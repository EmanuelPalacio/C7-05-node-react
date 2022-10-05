const OneSignal = require('@onesignal/node-onesignal');
const { ONESIGNAL_API_KEY } = require('../config/globals');

const ONESIGNAL_APP_ID = "560e5ab2-9ceb-4379-8cef-545851f0b9e9";

const tokenProvider = {
  getToken() {
      return ONESIGNAL_API_KEY;
  }
};

const configuration = OneSignal.createConfiguration({
  authMethods: {
    app_key: {
      tokenProvider: tokenProvider,
    }
  }
});

const client = new OneSignal.DefaultApi(configuration);

const notification = new OneSignal.Notification();
notification.app_id = ONESIGNAL_APP_ID;
notification.contents = {
  en: "Hello world!",
  es: "¡Hola mundo!"
}

const crearNotificacion =  async (AppId) => {
  const {id} = await client.createNotification(notification);
  
  const response = await client.getNotification(AppId || ONESIGNAL_APP_ID,id);
  console.log(response)
  return response;

}


module.exports = {
  crearNotificacion
}