export type TableData = {
  standing: string;
  name: string;
  matches: string;
  balance: string;
  points: string;
};

export type StyledContainerProps = {
  isHeaderRow?: boolean;
};

export type StyledCellContainerProps = {
  /** Stretch cell in a table row */
  long?: boolean;
};

export type TableRowProps = {
  data: TableData;
} & StyledContainerProps;
