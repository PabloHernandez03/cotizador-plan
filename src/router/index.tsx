import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import DashboardView from '../views/DashBoardView';
// import PatientsView from '../views/PatientsView.tsx';
// import CarePlansView from '../views/CarePlansView';
// import ProfileView from '../views/ProfileView';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} index />
                    {/* <Route path="/patients" element={<PatientsView />} />
                    <Route path="/care-plans" element={<CarePlansView />} />
                    <Route path="/profile" element={<ProfileView />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}