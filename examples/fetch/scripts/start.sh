#! /bin/bash
kotatsu serve \
  --mount-node=COMMUNITY_FEED_CONTAINER \
  -c config/webpack.config.js \
  -p 3079 \
  --public public \
  --hmrurl http://localhost:3079 \
  --progress \
  --devtool \\#eval-source-map \
  --babel \
& npm run test:watch \
& npm run lint:watch
