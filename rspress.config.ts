import * as path from "node:path";
import { defineConfig } from "rspress/config";
import type { RspressPlugin } from "@rspress/shared";

const zephyrRspressPlugin = (): RspressPlugin => ({
  name: "zephyr-plugin",
  builderConfig: {
    tools: {
      rspack: async (config) => {
        //@ts-expect-error - type conflict with zephyr and rsbuild
        // biome-ignore lint/style/noParameterAssign: I hate you biome
        config = await withZephyr()(config);
        // console.log("ZE");
      }
    }
  }
});

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "My Site",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png"
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress"
      }
    ]
  }
});
