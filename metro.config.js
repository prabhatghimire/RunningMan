const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  return {
    transformer: {
      // babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },

    resolver: {
      assetExts: [...assetExts],
      sourceExts: [
        ...sourceExts,
        'svg',
        'js',
        'fbx',
        'db',
        'mp3',
        'ttf',
        'obj',
        'png',
        'jpg',
        'glb',
        'gltf',
      ],
    },
  };
})();
