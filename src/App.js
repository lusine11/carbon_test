import React from "react";
// import LeftPanel from "./lib/leftPanel";
import './app.scss';
import { Content } from 'carbon-components-react/es/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

export default function App() {
    return (
        <>
            {/*<LeftPanel />*/}
            <TutorialHeader/>
            <Content>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/repos" component={RepoPage} />
                </Switch>
            </Content>
        </>
    )
}