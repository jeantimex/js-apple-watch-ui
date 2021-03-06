/* eslint-disable */
module.exports = (api) => {
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
    };
  }

  return {
    plugins: ['@babel/plugin-syntax-dynamic-import'],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
