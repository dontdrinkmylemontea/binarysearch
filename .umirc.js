// ref: https://umijs.org/config/
export default {
  base: '/binarysearch/',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'binarysearch',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
