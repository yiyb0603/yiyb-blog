const dotenv = {
  ASSET_PREFIX: process.env.NEXT_PUBLIC_ASSET_PREFIX as string,
  CDN_SERVER: process.env.NEXT_PUBLIC_CDN_SERVER as string,
  APP_URL: process.env.NEXT_PUBLIC_URL as string,
  DEV_MODE: process.env.NODE_ENV === 'development',
} as const;

export default dotenv;