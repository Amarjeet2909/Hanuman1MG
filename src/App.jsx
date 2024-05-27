import { useState } from "react";
import "./App.css";
import Login from "./auth/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import HomeCards from "./components/dashboard/Home/HomeCards";
import Layout from "./components/layout/Layout";
import HomeComponent from "./components/dashboard/Home/HomeComponent";
import MapComponent4 from "./components/maps/MapComponent4";
import Employees from "./components/hrManagement/Employees";
import AmbulanceInformation from "./components/maps/AmbulanceInformation";
import MapComponent3 from "./components/maps/MapComponent3";
import MapComponent2 from "./components/maps/MapComponent2";
import MapComponent from "./components/maps/MapComponent";
import CommonMaps from "./components/maps/CommonMaps";
import Sidebar from "./components/layout/Sidebar";
import HrManagement from "./components/hrManagement/HrManagement";
import Administration from "./components/Administration";
import HrReports from "./components/reports/HrReports";
import FitnessReport from "./components/reports/FitnessReport";
import TelementryReport from "./components/reports/TelementryReport";
import Protected from "./auth/Protected";
import { routes } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {/* Child routes rendered inside the Outlet */}
          {routes.map((mainroute) => {
            return (
              <Route
                path={mainroute.path}
                element={
                  <Protected>
                    <mainroute.component />
                  </Protected>
                }
              />
            );
          })}
        </Route>

        {/* <Route
            path="/1mg-dashboard"
            element={
              <Protected>
                <HomeComponent />
              </Protected>
            }
          /> */}
        {/* <Route path="/map-live-view" element={<MapComponent/>} /> */}
        {/* <Route path="/map-live-view" element={<CommonMaps />} />
          <Route path="/employee-dashboard" element={<Employees />} />
          <Route
            path="/ambulance-information"
            element={<AmbulanceInformation />}
          />
          <Route path="/hr-management" element={<HrManagement />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/hr-report" element={<HrReports />} />
          <Route path="/fitness-report" element={<FitnessReport />} />
          <Route path="/telementry-report" element={<TelementryReport />} /> */}
      </Routes>
    </>
  );
}

export default App;
