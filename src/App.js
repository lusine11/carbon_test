import React from "react";
// import LeftPanel from "./lib/leftPanel";
import './app.scss';
import { Content } from 'carbon-components-react/es/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import NestedTable from './content/NestedTable';
import SortableTree from './content/SortableTree';
import Pages from './content/Pages';

export default function App() {
    return (
        <>
            <TutorialHeader/>
            <Content>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/repos" component={RepoPage} />
                    <Route path="/data" component={NestedTable} />
                    <Route path="/tree" component={SortableTree} />
                    <Route path="/pages" component={Pages} />
                </Switch>
            </Content>
        </>
    )
}