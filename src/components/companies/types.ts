export type CompanySearchProps = {
  handleCompanySelect: (event: { target: HTMLSelectElement }) => void;
};

export type CompanySearchDataProps = [
  {
    database_code: number;
    dataset_code: number;
    name: string;
  },
];

export type CompanySearchResults = {
  data: {
    datasets: CompanySearchDataProps;
  };
  loading: boolean;
  error: boolean;
};

export type CompanyHistoryDataResults = {
  data: {
    dataset_data: CompanyDatasetData;
  };
  loading: boolean;
  error: boolean;
};

export type CompanyDatasetData = {
  column_names: [];
  data: [CompanyDatasetDataData];
  end_date: string;
  frequency: string;
  start_date: string;
};

export type CompanyDatasetDataData = [string, number, number, number, number];
