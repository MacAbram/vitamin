import { useEffect, useState } from 'react';
import services from '../../services';
import { CompanySearchDataProps, CompanySearchProps } from './types';

const CompanySearch = ({ handleCompanySelect }: CompanySearchProps): JSX.Element => {
  const [companies, setCompanies] = useState<CompanySearchDataProps | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data, loading, error } = await services.getCompaniesFromNasdaqApi();
      const sortedCompanies = data.datasets.sort((a, b) => a.name?.localeCompare(b.name));
      setCompanies(sortedCompanies);
      setIsLoading(loading);
      setError(error);
    };

    fetchCompanies();
  }, []);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading data: {error}</>;

  return (
    <form id='company-search'>
      <span>Select a Company: </span>
      <select onChange={handleCompanySelect}>
        <option value=''>Please select...</option>
        {companies.map((company, index) => (
          <option key={index} value={`${company.database_code}/${company.dataset_code}`}>
            {company.name}
          </option>
        ))}
        ;
      </select>
    </form>
  );
};

export default CompanySearch;
