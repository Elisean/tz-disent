
import { Route, Routes } from 'react-router-dom';
import { CountryPage } from '../CountryPage';
import { HomePage } from "../HomePage";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
       <Routes>
          <Route element={<HomePage />} path='/'/>
          <Route element={<CountryPage />} path='/countryPage/:id' />
       </Routes>
    </div>
  )
}

export default App;
