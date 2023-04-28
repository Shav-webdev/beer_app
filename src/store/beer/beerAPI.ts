import Api from 'service/api';
import { IRequestData } from 'helpers/global.types';

export default class BeerAPI {
  static getBeersList(params: IRequestData) {
    try {
      const api = new Api('v2/beers');
      return api.get('', { params });
    } catch (e) {
      throw e;
    }
  }
}
