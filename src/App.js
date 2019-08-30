import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Songs from "./components/Songs";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Comments from "./components/Comments";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <section className="App hero is-black is-fullheight">
                <Navbar />
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/songs" exact component={Songs} />
                            <Route path="/songs/:id/comments" component={Comments} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default App;
