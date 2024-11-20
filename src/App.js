import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddPropertyList';
import EditProperty from './components/EditPropertyList';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4 text-center">Real Estate Listings</h1>
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/add" element={<AddProperty />} />
          <Route path="/edit/:id" element={<EditProperty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
