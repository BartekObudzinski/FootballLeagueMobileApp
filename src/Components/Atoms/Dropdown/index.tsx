import DropDownPicker from 'react-native-dropdown-picker';
import React, { memo } from 'react';
import { DropdownProps } from './types';
import theme from 'Setup/theme';

export const Dropdown: React.FC<DropdownProps> = memo((props) => {
  return (
    <DropDownPicker
      placeholder="Wybierz z listy"
      dropDownContainerStyle={{
        zIndex: 10000,
        borderWidth: 1,
        borderColor: theme.colors.SECONDARY,
      }}
      {...props}
      style={{ borderWidth: 2, borderColor: theme.colors.SECONDARY }}
      labelStyle={{ fontSize: theme.fontSize.small }}
      placeholderStyle={{ fontSize: theme.fontSize.small }}
    />
  );
});
