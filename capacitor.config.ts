import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.spanishpractice.app",
  appName: "Spanish Practice",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
