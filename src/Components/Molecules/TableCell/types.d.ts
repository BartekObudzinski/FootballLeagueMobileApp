export type StyledCellContainerProps = {
  /** Stretch cell in a table row */
  long?: boolean;
  isHeaderRow?: boolean;
};

export type TableCellProps = StyledCellContainerProps & {
  value: string;
};
