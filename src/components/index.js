import React from 'react';
import styles from './styles.css';
import Grid from './grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export default () =>
  <MuiThemeProvider>
    <div className={styles.main}>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <IconButton>
            <ActionHome/>
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
      <Grid/>
    </div>
  </MuiThemeProvider>;
