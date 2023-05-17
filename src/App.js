import './App.css';
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import DataPage from './pages/DataPage';
import {Route,Routes} from "react-router-dom";
import NewAbout from './components/NewAbout/NewAbout';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const newClient = new QueryClient()
  return (
    <QueryClientProvider client={newClient}>
      <div className="App">
        <Routes>
          <Route path='/'element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/data' element={<DataPage/>}/>
          <Route path='/newAbout' element={<NewAbout/>}/>
        </Routes>  
      </div>
    </QueryClientProvider>
  );
}

export default App;
