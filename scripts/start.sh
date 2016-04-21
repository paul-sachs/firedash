#! /bin/bash
kotatsu serve \
  --mount-node=app \
  -c config/webpack.config.js \
  -p 3078 \
  --progress \
  --devtool \\#eval-source-map \
  --babel \
  src/index.js \
& npm run test:watch \
& npm run lint:watch
