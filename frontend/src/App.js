import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Location from './pages/Location';
import Location_Region from './pages/location/Location_Region';
import Location_Province from './pages/location/Location_Province';
import Location_City from './pages/location/Location_City';
import Location_District from './pages/location/Location_District';
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import FileManager_Profile from './pages/filemanager/Profile';
 
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";

import CertificateClearance from './pages/certificates/CertificateClearance';
import Reports from './pages/reports/Reports';

import CreateAdmin from './pages/accounts/admin/main';
import EnableEditingRow from './pages/mrt/enable_editing_row/main';
import EditingCrud from './pages/mrt/editing_crud/main';

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/region" element={<Location_Region />} />
          <Route path="/location/province" element={<Location_Province />} />
          <Route path="/location/city" element={<Location_City />} />
          <Route path="/location/district" element={<Location_District />} />

          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/settings/profile" element={<FileManager_Profile />} /> 
         
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="/certificate" element={<CertificateClearance />} />
          <Route path="/report" element={<Reports />} />


          <Route path="/mrt/tablegrid" element={<CreateAdmin />} />
          <Route path="/mrt/enable_editing_row" element={<EnableEditingRow />} />
          <Route path="/mrt/editing_crud" element={<EditingCrud />} />
          <Route path="*" element={<> route not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
