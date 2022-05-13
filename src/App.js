import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import MainApp from './Modules/MainApp';
import NavbarWeb from "./Modules/Layouts/NavbarWeb";
import Home from "./Modules/Components/Home/Home";
import Ranking from "./Modules/Components/Ranking/Ranking";
import Multimedia from "./Modules/Components/Multimedia/Multimedia";
import Blog from "./Modules/Components/Blog/Blog";
import MainApp from "./Modules/MainApp";
import Footer from "./Modules/Layouts/Footer";
import Foro from "./Modules/Components/Foro/Foro";
import ForoListDetails from "./Modules/Components/Foro/ForoListDetails";
import { AuthContextProvider } from "./Modules/context/User/UserState";

function App() {
    return (
        <>
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavbarWeb />}>
                        <Route index element={<Home />} />
                        <Route path="Ranking" element={<Ranking />} />
                        <Route path="Multimedia" element={<Multimedia />} />
                        <Route path="Blog" element={<Blog />} />
                        <Route path="Foro" element={<Foro />} />
                        <Route path="details/:id" element={<ForoListDetails />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthContextProvider>
        </>
    );
}

export default App;
