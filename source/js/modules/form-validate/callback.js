const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
  modals.open('not-success-send-message');
};

const successSendMessageCallback = (event) => {
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  modals.open('success-send-message');
};

export const callbacks = {
  sendMessage: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: successSendMessageCallback,
    errorCallback: baseErrorCallback,
  },
};
