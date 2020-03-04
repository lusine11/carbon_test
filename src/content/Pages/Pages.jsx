import React from "react";
import {Tabs, Tab} from "carbon-components-react";
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import './pages.scss';
import Tree from "./Tree";
import data from './data';

const props = {
    tabs: {
        selected: 0,
        triggerHref: '#',
        role: 'navigation',
    },
    tab: {
        href: '#',
        role: 'presentation',
        tabIndex: 0,
    },
};

const pageTypes = ['Main Pages', 'Secondary Pages', 'System Pages'];

const Pages = () => {
    return (
        <div className="navigation">
            <Tabs {...props.tabs} aria-label="Tab navigation">
                {pageTypes.map((v, i) => (
                    <Tab {...props.tab} label={v} key={i}>
                        <Tree pages={data.pages.filter(p => p.navigationId === i) }/>
                    </Tab>
                ))}
            </Tabs>
        </div>

    )
};

export default Pages;