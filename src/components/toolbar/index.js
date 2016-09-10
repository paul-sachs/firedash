import React from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SocialWhatsHot from 'material-ui/svg-icons/social/whatshot';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import MergeType from 'material-ui/svg-icons/editor/merge-type';
import SVGIcon from 'material-ui/SVGIcon';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Widgets from 'material-ui/svg-icons/device/widgets';
import cn from 'classnames';
import styles from './styles.css';
import fromState from 'src/common/from-state';
import fromUserActions from 'src/common/from-user-actions';
import { map, values } from 'ramda';

const enhance = compose(
  fromState({
    toolbarOpen: 'toolbarOpen',
    dashboardList: 'dashboardList',
    selectedDashboard: 'selectedDashboard',
    widgetList: 'widgetList'
  }),
  fromUserActions({
    userToggleDashboardDetails: 'userToggleDashboardDetails',
    userToggleToolBar: 'userToggleToolBar'
  }),
  setDisplayName('Toolbar'),
  withProps(props => ({
    classes: cn(styles.toolbar, { [styles.closed]: !props.toolbarOpen })
  }))
);

const mapObjectToMenuItems = (valueKey, textKey, object) => map((item, index) =>
  <MenuItem key={index} value={item[valueKey]} primaryText={item[textKey]} />)(values(object));

export default enhance(({ classes, userToggleToolBar,
  userToggleDashboardDetails, dashboardList,
  selectedDashboard, widgetList }) =>
  <Toolbar className={classes}>
    <ToolbarGroup firstChild={true} onClick={userToggleToolBar}>
      <IconButton className={styles.icon} iconStyle={{ color: '#ff6b6b' }}>
        <SocialWhatsHot/>
      </IconButton>
      <ToolbarSeparator className={styles.logoSeperator}/>
    </ToolbarGroup>
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
    <ToolbarSeparator className={styles.seperator}/>
    <ToolbarGroup title='Widget'>
      <SVGIcon className={styles.icon}>
        <Widgets/>
      </SVGIcon>
      <IconMenu style={{ display: 'flex' }}
        iconButtonElement={
          <IconButton className={styles.icon}>
            <ContentAddBox />
          </IconButton>
        }
        >
        {selectedDashboard && mapObjectToMenuItems('name', 'name', widgetList[selectedDashboard])}

      </IconMenu>
    </ToolbarGroup>
    <ToolbarSeparator className={styles.seperator}/>
    <ToolbarGroup title='Datasouce' >
      <SVGIcon className={styles.icon}>
        <MergeType/>
      </SVGIcon>
      <IconMenu style={{ display: 'flex' }}
        iconButtonElement={
          <IconButton className={styles.icon}>
            <ContentAddBox />
          </IconButton>
        }
        >
        <MenuItem value={1} primaryText='datasource 1' />
        <MenuItem value={2} primaryText='datasource 2' />
        <MenuItem value={3} primaryText='datasource 3' />
      </IconMenu>
    </ToolbarGroup>
  </Toolbar>
);