const dotenv = {
  ASSET_PREFIX: process.env.NEXT_PUBLIC_ASSET_PREFIX as string,
  CDN_SERVER: process.env.NEXT_PUBLIC_CDN_SERVER as string,

  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string,
  GOOGLE_SITE_VERIFICATION_ID: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID as string,

  NAVER_SITE_VERIFICATION_ID: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION_ID as string,

  BING_SITE_VERIFICATION_ID: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION_ID as string,

  APP_URL: process.env.NEXT_PUBLIC_URL as string,

  DEV_MODE: process.env.NODE_ENV === 'development',
} as const;

export default dotenv;