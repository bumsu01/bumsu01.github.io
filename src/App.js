import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';
import {Box, CssBaseline, ThemeProvider} from "@mui/material";

import theme from "./assets/theme";
import Sidenav from "./container/Sidenav";
import routes from "./routes";

import {useEffect, useState} from "react";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "./store";

import brandWhite from "./assets/images/logo-ct.png";
import brandDark from "./assets/images/logo-ct-dark.png";

function App() {

    const [controller, dispatch] = useMaterialUIController();
    const {
        miniSidenav,
        direction,
        layout,
        openConfigurator,
        sidenavColor,
        transparentSidenav,
        whiteSidenav,
        darkMode,
    } = controller;

    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const { pathname } = useLocation();

    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(dispatch, false);
            setOnMouseEnter(true);
        }
    };

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(dispatch, true);
            setOnMouseEnter(false);
        }
    };

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);


    const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.collapse) {
                console.log(route)
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return <Route exact path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {layout === "dashboard" && (
                <>
                    <Sidenav
                        color={sidenavColor}
                        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                        brandName="KBS's Portfolio"
                        routes={routes}
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    />
                </>
            )}
            <Routes>
                {getRoutes(routes)}
                <Route path="*" element={<Navigate to="/profile" />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
