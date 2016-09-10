import React from 'react';
import { map, values } from 'ramda';
import MenuItem from 'material-ui/MenuItem';

export const mapObjectToMenuItems = (valueKey, textKey, object) => map((item, index) =>
  <MenuItem key={index} value={item[valueKey]} primaryText={item[textKey]} />)(values(object));