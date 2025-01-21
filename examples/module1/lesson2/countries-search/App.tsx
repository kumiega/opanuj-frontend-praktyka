import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SearchContainer } from './containers/SearchContainer';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <SearchContainer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
