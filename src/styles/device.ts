export const deviceSize = {
  smallMobile: '350px',
  mobile: '400px',
  mediumMobile: '500px',
  smallTablet: '650px',
  tablet: '768px',
  mediumTablet: '850px',
  smallLaptop: '950px',
  laptop: '1024px',
  mediumLaptop: '1200px',
} as const;

type DeviceSizes = keyof typeof deviceSize;

type Device = Record<DeviceSizes, `@media only screen and (max-width: ${typeof deviceSize[DeviceSizes]})`>;

export const device: Device = Object.entries(deviceSize).reduce((device, [deviceName, deviceSize]) => {
  device[deviceName as DeviceSizes] = `@media only screen and (max-width: ${deviceSize})`;

  return device;
}, {} as Device);

export const constantSafeArea = {
  top: 'constant(safe-area-inset-top)',
  left: 'constant(safe-area-inset-left)',
  right: 'constant(safe-area-inset-right)',
  bottom: 'constant(safe-area-inset-bottom)',
} as const;

export const envSafeArea = {
  top: 'env(safe-area-inset-top)',
  left: 'env(safe-area-inset-left)',
  right: 'env(safe-area-inset-right)',
  bottom: 'env(safe-area-inset-bottom)',
} as const;