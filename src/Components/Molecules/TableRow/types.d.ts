export type TableData = {
  standing: string;
  name: string;
  matches: string;
  balance: string;
  points: string;
};

export type StyledContainerProps = {
  isHeaderRow?: boolean;
  isLastElement?: boolean;
};

export type TableRowProps = {
  data: TableData;
} & StyledContainerProps;
