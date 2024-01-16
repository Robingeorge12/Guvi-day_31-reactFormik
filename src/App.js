import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Route/AllRoutes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      <AllRoutes />

    </div>
  );
}

export default App;
