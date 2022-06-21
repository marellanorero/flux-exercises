import { BrowserRouter, Route, Switch } from "react-router-dom"
import injectContext from "./store/appContext";
import DarkModeContext from "./store/DarkModeContext";
import Home from "./views/Home";

const Layout = () => {
    return (
        <DarkModeContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} > <Home /> </Route>
                </Switch>
            </BrowserRouter>
        </DarkModeContext>
    )
}

export default injectContext(Layout);