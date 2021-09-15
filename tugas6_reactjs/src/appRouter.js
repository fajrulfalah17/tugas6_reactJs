import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";


function AppRouter() {
    return(
        <BrowserRouter>
            <div>
            
                <Route path="/" exact component={App} />
                <Route path="/menu-makanan" component={MenuMakanan} />
                <Route path="/menu-minuman" component={MenuMinuman} />
                <Route path="/kontak" component={Kontak} />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;