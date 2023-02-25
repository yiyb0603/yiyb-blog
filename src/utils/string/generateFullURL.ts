import dotenv from '@/libs/dotenv';
import { pageRoute } from '@/libs/models/route';

const generateFullURL = (route: string): string => {
  return `${dotenv.APP_URL}${route !== pageRoute.HOME ? route : ''}`;
};

export default generateFullURL;