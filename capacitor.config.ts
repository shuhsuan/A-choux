import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'A-choux',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
