import { compose, withProps, withState } from 'recompose';
import React from 'react';
import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const generatedLayout = generateLayout();

const enhance = compose(
  withProps(() => ({
    layout: generatedLayout
  }))
);

export default enhance(({ layout }) =>
  <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
    {generateDOM(layout)}
  </ReactGridLayout>
);


const generateLayout = () => {
  return _.map(_.range(0, 25), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: _.random(0, 5) * 2 % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}

const generateDOM = (layouts) => {
  return _.map(layouts.lg, function (l, i) {
    return (
      <div key={i} className={l.static ? 'static' : ''}>
        {l.static ?
          <span className="text" title="This item is static and cannot be removed or resized.">Static - {i}</span>
          : <span className="text">{i}</span>
        }
      </div>);
  });
}