import Administration from "./components/Administration";
import HomeComponent from "./components/dashboard/Home/HomeComponent";
import Employees from "./components/hrManagement/Employees";
import HrManagement from "./components/hrManagement/HrManagement";
import AmbulanceInformation from "./components/maps/AmbulanceInformation";
import CommonMaps from "./components/maps/CommonMaps";
import FitnessReport from "./components/reports/FitnessReport";
import HrReports from "./components/reports/HrReports";
import TelementryReport from "./components/reports/TelementryReport";

export const routes = [

    { path: "/", component: HomeComponent },
    { path: "/dashboard", component: HomeComponent },
    { path: "/map-live-view", component: CommonMaps },
    { path: "/employee-dashboard", component: Employees },
    { path: "/ambulance-information", component: AmbulanceInformation },
    { path: "/hr-management", component: HrManagement },
    { path: "/administration", component: Administration },
    { path: "/hr-report", component: HrReports },
    { path: "/fitness-report", component: FitnessReport },
    { path: "/telementry-report", component: TelementryReport }
];