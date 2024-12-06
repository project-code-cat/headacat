// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);


const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const { assetExts, sourceExts } = defaultConfig.resolver;

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      assetExts: [...assetExts, 'web.js', 'web.jsx'],
      sourceExts: [...sourceExts, 'web.js', 'web.jsx', 'web.ts', 'web.tsx'],
      platforms: ['ios', 'android', 'web'],
    },
    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    },
  };
})();