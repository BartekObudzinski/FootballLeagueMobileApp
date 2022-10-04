module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            Components: './src/Components',
            Navigation: './src/Navigation',
            Setup: './src/Setup',
            Utils: './src/Utils',
          },
        },
      ],
    ],
  };
};
