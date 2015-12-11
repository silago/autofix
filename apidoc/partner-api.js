
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
 * @api {get} /partner/requests?query=params Получить список заявок
 * @apiGroup Partner
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * [
 *    {
 *      "id": 1,
 *      "vehicle": {
 *         "vendor": "Toyota",
 *         "model": "Rav4",
 *         "year": 2014
 *      },
 *      "creation_ts": "2015-10-13T18:36:19.770Z",
 *      "geo_position": {
 *         "latitude": 40.689060,
 *         "longitude": 50.689060
 *      }
 *   },
 *    {
 *      "id": 1,
 *      "vehicle": {
 *         "vendor": "Toyota",
 *         "model": "Rav4",
 *         "year": 2014
 *      },
 *      "creation_ts": "2015-10-13T18:36:19.770Z",
 *      "geo_position": {
 *         "latitude": 40.689060,
 *         "longitude": 50.689060
 *      }
 *   }
 * ]
 */

/**
 * @api {get} /partner/requests/{id} Подробная информация о заявке
 * @apiGroup Partner
 * @apiUse AuthRequired
 * @apiExample {json} Пример ответа
 * 200 OK
 *
 * {
 *   "id": 1,
 *   "vehicle": {
 *      "vendor": "Toyota",
 *      "model": "Rav4",
 *      "year": 2014
 *   },
 *   "creation_ts": "2015-10-13T18:36:19.770Z",
 *   "geo_position": {
 *      "latitude": 40.689060,
 *      "longitude": 50.689060
 *   },
 *   "photos": ["http://cdn.autofix.ru/img1.jpeg", "http://cdn.autofix.ru/img2.jpeg"],
 *   "estimation_id": 1023 //null - если партнер еще не дал оценку
 * }
 */

/**
 * @api {post} /partner/requests/{id}/estimation Предложить оценку
 * @apiGroup Partner
 * @apiUse AuthRequired
 * @apiExample {json} Пример запроса
 *
 * {
 *   "cost": 4499.99,
 *   "days": 10,
 *   "comments": "Прокачаем тачку вааще!"
 * }
 *
 * @apiExample {json} Пример ответа
 * {"id": 1023}
 */

/**
 * @api {put} /partner/requests/{request_id}/estimation/{estimation_id} Изменить оценку
 * @apiGroup Partner
 * @apiUse AuthRequired
 * @apiExample {json} Пример запроса
 *
 * {
 *   "cost": 4499.99,
 *   "days": 10,
 *   "comments": "Прокачаем тачку вааще!"
 * }
 *
 * @apiExample {json} Пример ответа
 * 200 OK
 */