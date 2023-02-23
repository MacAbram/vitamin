import CompanySearch from './companySearch';
import './companies.css';
import { useEffect, useState } from 'react';
import services from '../../services';
import { CompanyDatasetData } from './types';
import Chart from './chart';

const CompanyData = (): JSX.Element => {
  const [companyDbCode, setCompanyDbCode] = useState<string | null>(null);
  const [companyHistoryData, setCompanyHistoryData] = useState<CompanyDatasetData>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (companyDbCode) {
      const fetchCompanyStockHistory = async () => {
        // eslint-disable-next-line camelcase
        const { data, error } = await services.getCompanyStockHistory(companyDbCode);
        setCompanyHistoryData(data.dataset_data);
        setIsError(error);
      };

      fetchCompanyStockHistory();
    }
  }, [companyDbCode]);

  const handleCompanySelect = (event: { target: HTMLSelectElement }) => {
    setCompanyDbCode(event.target.value);
  };

  return (
    <>
      <CompanySearch handleCompanySelect={handleCompanySelect} />
      {isError && <>There was an error loading chart data</>}
      {companyHistoryData && <Chart companyHistoryData={companyHistoryData} />}
    </>
  );
};

export default CompanyData;
