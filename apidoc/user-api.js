
/**
 * @apiDefine AuthRequired
 * @apiHeader {String} X-Auth-Token Авторизационный токен
 * @apiHeader {String="application/json"} Accept-Encoding
 */

/**
 * @apiDefine VehicleParams
 * @apiParam {String} vendor Производитель
 * @apiParam {String} model Модель
 * @apiParam {Number} year Год выпуска
 * @apiParam {String} vin VIN
 * @apiExample {json} Пример запроса
 * HTTP/1.1
 * {
 *   "vendor": "Toyota",
 *   "model": "Rav4",
 *   "year": 2014,
 *   "vin": "Oijwfow9809823RF"
 * }
 */

/**
 * @api {post} /register Регистрация
 * @apiGroup Client
 * @apiParam {String} imei IMEI
 * @apiParam {String} phone Номер телефона
 * @apiParam {String} name Имя
 * @apiParam {String} surname Фамилия
 * @apiParam {String} second_name Отчество
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"id": 100500}
 */

/**
 * @api {post} /login Логин
 * @apiGroup Client
 * @apiParam {String} imei IMEI
 * @apiParam {String} phone Номер телефона
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"token": "X-Auth-Token"}
 * @apiExample {json} Ошибка - пользователь не зарегистрирован
 * 450 User not found
 */

/**
 * @api {post} /vehicle Добавить ТС
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiUse VehicleParams
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"id": 100500}
 */

/**
 * @api {put} /vehicle/{id} Изменить информацию о ТС
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiUse VehicleParams
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"status": "OK"}
 */

/**
 * @api {get} /request?query=params Список заявок
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * [
 *    {
 *        "id": 1,
 *        "vehicle_id": 100500,
 *        "creation_ts": "2015-10-13T18:36:19.770Z",
 *        "geo_position": {
 *            "latitude": 40.689060,
 *            "longitude": 50.689060
 *        }
 *    },
 *    {
 *        "id": 2,
 *        "vehicle_id": 100500,
 *        "creation_ts": "2015-10-13T18:36:19.770Z",
 *        "geo_position": {
 *            "latitude": 40.689060,
 *            "longitude": 50.689060
 *        }
 *    }
 * ]
 *
 */

/**
 * @api {get} /request/{id} Информация о заявке
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {
 *     "id": 1,
 *     "vehicle_id": 100500,
 *     "creation_ts": "2015-10-13T18:36:19.770Z",
 *     "geo_position": {
 *         "latitude": 40.689060,
 *         "longitude": 50.689060
 *     },
 *     "photos": [
 *        {
 *          "id": 1,
 *          "url": "http://cdn.autofix.ru/img1.jpeg"
 *        },
 *        {
 *          "id": 2,
 *          "url": "http://cdn.autofix.ru/img2.jpeg"
 *        }
 *     ]
 * }
 *
 */


/**
 * @apiDefine EstimationRequestParams
 * @apiGroup API
 * @apiParam {Number} vehicle_id ID транспортного средства
 * @apiExample {json} Пример запроса
 * HTTP/1.1
 * {
 *   "vehicle_id": 100500,
 *   "geo_position": {
 *       "latitude": 40.689060,
 *       "longitude": 50.689060
 *   }
 * }
 */

/**
 * @api {post} /request Подать заявку на оценку
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiUse EstimationRequestParams
 * @apiParam {Object} geo_position Текущая гео-позиция
 * @apiParam {Number} geo_position.longitude
 * @apiParam {Number} geo_position.latitude
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"id": 100500}
 */

/**
 * @api {put} /request/{id} Изменить заявку
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiUse EstimationRequestParams
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"status": "OK"}
 */

/**
 * @api {post} /request/{request_id}/photo Добавить фото к заявке
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiParam {String} url Адрес фотографии [предварительно загружается через file-manager]
 * @apiExample {json} Пример запроса
 * HTTP/1.1
 *
 * {"url": "http://cdn.autofix.ru/img1.jpeg"}
 *
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"id": 1050}
 */

/**
 * @api {delete} /request/{request_id}/photo/{photo_id} Удалить фото из заявки
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {"status": "OK"}
 */

/**
 * @api {get} /request/{id}/estimations Посмотреть предложенные оценки от сервисов
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * [
 *   {
 *     "id": 10005000,
 *     "partner_name": "Супер-сервис у Ашота",
 *     "estimated_price": 4499.99
 *   },
 *   {
 *     "id": 10005001,
 *     "partner_name": "Супер-сервис у Пети",
 *     "estimated_price": 4599.99
 *   }
 * ]
 *
 */

/**
 * @api {get} /request/{request_id}/estimations/{estimation_id} Информация о предложении сервиса
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {
 *   "partner": {
 *     "name": "Супер-сервис у Ашота",
 *     "address": "Улица московская",
 *     "phone": 8-123-123-45-67
 *     "rating": 3
 *   },
 *   "estimated_price": 4499.99,
 *   "comments": "Прокачаем тачку вааще!",
 * }
 */

 /**
 * @api {post} /photo/upload Загрузить фото
 * @apiGroup Client
 * @apiUse AuthRequired
 * @apiExample {String} Request
 *
 *     Content-Type:multipart/form-data; boundary=----WebKitFormBoundarypKEL10CuddWurY1V
 *     X-Auth-Token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0NDgxNTY5MDN9.jRyZdMlDyjkctM6DUwWj9-iq2dE6cOYmFitJQN7ZDOw
 *
 *     ------WebKitFormBoundarypKEL10CuddWurY1V
 *
 *     Content-Disposition: form-data; name="content"; filename="IMG_4351.jpeg"
 *     Content-Type: image/jpeg
 *
 *      BINARY CONTENT
 *
 *     ------WebKitFormBoundarypKEL10CuddWurY1V--
 *
 * @apiSuccess {String} path Путь к созданному файлу (относительно STATIC_BASE_URL)
 * @apiSuccessExample {json} Success response
 *     HTTP/1.1 200
 *     Content-Type: application/json; charset=utf-8
 *
 *     {
 *           "path":"path/to/IMG_4351.jpeg"
 *     }
 */