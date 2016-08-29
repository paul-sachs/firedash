import React, { PropTypes } from 'react';

import { provide } from 'react-redux-provide';
import { compose, setPropTypes, setDisplayName, withProps } from 'recompose';
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

const enhance = compose(
  provide,
  setDisplayName('Toolbar'),
  setPropTypes({
    toolbarOpen: PropTypes.bool.isRequired,
    userToggleToolBar: PropTypes.func.isRequired,
    userToggleDashboardDetails: PropTypes.func.isRequired
  }),
  withProps(props => ({
    classes: cn(styles.toolbar, { [styles.closed]: !props.toolbarOpen })
  }))
);

export default enhance(({ classes, userToggleToolBar, userToggleDashboardDetails }) =>
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
        <MenuItem value={1} primaryText='Dash 1' />
        <MenuItem value={2} primaryText='Dash 2' />
        <MenuItem value={3} primaryText='Dash 3' />
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
        <MenuItem value={1} primaryText='widget 1' />
        <MenuItem value={2} primaryText='widget 2' />
        <MenuItem value={3} primaryText='widget 3' />
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
  </Toolbar>);