module.exports = {
  plugins: {
    autoprefixer: require('autoprefixer'),
    'postcss-px2vp': {
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 4,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['van-'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/\/src\/views\//],
      // include: [/\/src\/mobile\//],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    },
  },
}
