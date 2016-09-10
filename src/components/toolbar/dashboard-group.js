import React from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import SVGIcon from 'material-ui/SVGIcon';
import cn from 'classnames';
import styles from './styles.css';
import fromState from 'src/common/from-state';
import fromUserActions from 'src/common/from-user-actions';
import DropDownMenu from 'material-ui/DropDownMenu';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import { mapObjectToMenuItems } from './common';

const enhance = compose(
  fromState({
    dashboardList: 'dashboardList'
  }),
  fromUserActions({
    userToggleDashboardDetails: 'userToggleDashboardDetails'
  }),
  setDisplayName('DashboardGroup'),
  withProps(props => ({
    classes: cn(styles.toolbar, { [styles.closed]: !props.toolbarOpen })
  }))
);

export default enhance(({ userToggleDashboardDetails, dashboardList }) =>
  <ToolbarGroup title='Dashboard' >
    <SVGIcon className={styles.icon}>
      <Dashboard/>
    </SVGIcon>
    <DropDownMenu value={1} style={{ display: 'flex' }}>
      {mapObjectToMenuItems('name', 'name', dashboardList)}
    </DropDownMenu>
    <IconButton className={styles.icon} onClick={userToggleDashboardDetails}>
      <ContentAddBox />
    </IconButton>
  </ToolbarGroup>
);