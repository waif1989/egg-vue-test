import { EggPlugin } from 'egg';
const plugin: EggPlugin = {
  webpack: {
    enable: true,
    package: 'egg-webpack',
  },
  webpackvue: {
    enable: true,
    package: 'egg-webpack-vue',
  },
};

export default plugin;
