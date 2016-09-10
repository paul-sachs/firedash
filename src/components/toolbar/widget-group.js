import React from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import IconMenu from 'material-ui/IconMenu';
import SVGIcon from 'material-ui/SVGIcon';
import Widgets from 'material-ui/svg-icons/device/widgets';
import cn from 'classnames';
import styles from './styles.css';
import fromState from 'src/common/from-state';
import { mapObjectToMenuItems } from './common';

const enhance = compose(
  fromState({
    selectedDashboard: 'selectedDashboard',
    widgetList: 'widgetList'
  }),
  setDisplayName('WidgetGroup'),
  withProps(props => ({
    classes: cn(styles.toolbar, { [styles.closed]: !props.toolbarOpen })
  }))
);

export default enhance(({ selectedDashboard, widgetList }) =>
  <ToolbarGroup title='Widget'>
    <SVGIcon className={styles.icon}>
      <Widgets/>
    </SVGIcon>
    <IconMenu style={{ display: 'flex' }}
      iconButtonElement={
        <IconButton className={styles.icon}>
          <ContentAddBox />
        </IconButton>
      }>
      {selectedDashboard && mapObjectToMenuItems('name', 'name', widgetList[selectedDashboard])}
    </IconMenu>
  </ToolbarGroup>
);