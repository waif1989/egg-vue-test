import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  vuessr: {
    enable: true,
    package: 'egg-view-vue-ssr',
  },
};

export default plugin;
