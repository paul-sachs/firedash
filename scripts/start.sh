#! /bin/bash
kotatsu serve \
  --mount-node=COMMUNITY_FEED_CONTAINER \
  -c config/webpack.config.js \
  -p 3078 \
  --progress \
  --devtool \\#eval-source-map \
  --babel \
  src/index.js \
& npm run test:watch \
& npm run lint:watch
