import {Tab} from "carbon-components-react";
import React from "react";

const props = {
    tab: {
        href: '#',
        role: 'presentation',
        tabIndex: 0,
    },
};

const PageTabs = ({label}) => (
    <Tab {...props.tab} label={label}>
        <div>

        </div>
    </Tab>
);

export default PageTabs;