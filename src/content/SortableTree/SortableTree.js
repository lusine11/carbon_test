import React, {useState} from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import './sortable.scss';
import Row from './Row';
import data from './data';

//harcnel childrenneri hamar

const TreeExample = () => {
    const [treeData, setTreeData] = useState(dataToTree(data.pages));

    return (
        <div style={{height: 400}}>
            <SortableTree
                treeData={treeData}
                onChange={treeData => setTreeData(treeData)}
                // theme={FileExplorerTheme}
            />
        </div>
    );
};

function dataToTree(data) {
    return data.map(function f(v) {
        return {
            title: <Row {...v} key={v.id}/>,
            expanded: false,
            children: ( v.children && v.children.length) ? v.children.map(f) : []
        }
    });
}

export default TreeExample;