import { Route, Routes } from 'react-router-dom';
import Dialogue from './screens/Dialogue';
import History from './screens/History';
import MainMenu from './screens/MainMenu';
import QuickActions from './screens/QuickActions';

export default function AppRoutes() {
    return (
        <Routes>
            <Route key={"main_menu"} path={"/"} element={<MainMenu />} />
            <Route key={"game"} path={"/game"}
                element={<>
                    <History />
                    <QuickActions />
                    <Dialogue />
                </>}
            />
        </Routes>
    )
}
