import logo from './logo.svg';
import './App.css';
import RouteLink from './routes';
import MyProvider from './components/config/MyProvider';

function App() {
  return (
    <MyProvider>
      <RouteLink />
    </MyProvider>
  );
}

export default App;
