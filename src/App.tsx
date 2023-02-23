import './App.css';
import CompanyData from './components/companies';
import AppHeader from './components/appHeader';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <AppHeader />
      <CompanyData />
    </div>
  );
}

export default App;
