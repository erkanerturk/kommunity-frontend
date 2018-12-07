const path = require('path');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, config);

    // for prod, removing all unnecessary css with purge css
    if (!dev && target === 'web') {
      appConfig.plugins.push(
        new PurgecssPlugin({
          paths: () => glob.sync([
            `${PATHS.src}/**/*`,
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/slick-carousel/slick/slick-theme.js',
          ], { nodir: true }),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["js", "html", "json"]
            }
          ]
        }),
      );
    }

    return appConfig;
  }
};
