import { isProduction } from '@utils/variables';

export default {
  baseUrl: isProduction ? '' : '',
  getStations: '/stations',
};
