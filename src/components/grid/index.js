import { compose, mapProps, withState, lifecycle, defaultProps } from 'recompose';
import React from 'react';
import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import styles from './styles.css';

const generatedLayout = _.map(_.range(0, 25), (item, i) => {
  const y = Math.ceil(Math.random() * 4) + 1;
  return {
    x: _.random(0, 5) * 2 % 12,
    y: Math.floor(i / 6) * y,
    w: 2,
    h: y,
    i: i.toString()
  };
});

const enhance = compose(
  mapProps(() => ({
    initialLayout: generatedLayout
  })),
  withState('mounted', 'setMounted', false),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    }
  }),
  defaultProps({
    className: styles.grid,
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
  })
);

export default enhance((props) =>
  <ResponsiveReactGridLayout
    {...props}
    // WidthProvider option
    measureBeforeMount={false}
    // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
    // and set `measureBeforeMount={true}`.
    useCSSTransforms={props.mounted}>
    {generateDOM(props.initialLayout)}
  </ResponsiveReactGridLayout>
);

const generateDOM = (layout) =>
  _.map(layout, (l, i) =>
    <div key={i} className="">{i}
    </div>
  );