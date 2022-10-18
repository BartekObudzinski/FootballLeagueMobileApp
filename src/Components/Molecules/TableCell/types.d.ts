import { PressableProps } from 'react-native';

export type StyledCellContainerProps = {
  /** Stretch cell in a table row */
  long?: boolean;
  isHeaderRow?: boolean;
};

export type TableCellProps = StyledCellContainerProps & {
  value: string;
  onPress?: Pick<PressableProps, 'onPress'>;
};
