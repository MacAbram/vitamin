import axios from 'axios';
import { CompanyHistoryDataResults, CompanySearchResults } from '../components/companies/types';
import { NASDAQ_API_URL, NASDAQ_API_KEY } from '../config/config-vars';

const getCompaniesFromNasdaqApi = async (): Promise<CompanySearchResults> => {
  const options = {
    params: {
      // It's not safe to make queries directly from the frontend to the API and passing credentials
      // Better to use NextJS or a separate backend so the API keys would not be visible
      'api_key': NASDAQ_API_KEY,
      format: 'json',
    },
  };

  return await axios.get(NASDAQ_API_URL, options);
};

const getCompanyStockHistory = async (companyDbCode: string): Promise<CompanyHistoryDataResults> => {
  const options = {
    params: {
      // It's not safe to make queries directly from the frontend to the API and passing credentials
      // Better to use NextJS or a separate backend so the API keys would not be visible
      'api_key': NASDAQ_API_KEY,
    },
  };

  const url = `${NASDAQ_API_URL}/${companyDbCode}/data.json`;

  return await axios.get(url, options);
};

export default {
  getCompaniesFromNasdaqApi,
  getCompanyStockHistory,
};
