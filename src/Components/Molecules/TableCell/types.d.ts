export type TableData = {
  standing: string;
  name: string;
  matches: string;
  balance: string;
  points: string;
};

export type StyledContainerProps = {
  backgroundColor?: string;
};

export type TableCellProps = {
  data: TableData;
} & StyledContainerProps;
