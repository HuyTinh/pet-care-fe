module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      "nativewind/babel",
      'react-native-reanimated/plugin'
    ],
  };
};

// module.exports = function (api) {
//   api.cache(true)
//   return {
//     presets: [
//       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//       "nativewind/babel",
//     ],
//     env: {
//       production: {
//         plugins: ['react-native-paper/babel'],
//       },
//     },
//     plugins: [
//       "react-native-reanimated/plugin",
//       "@babel/plugin-proposal-export-namespace-from",
//     ],
//   }
// }