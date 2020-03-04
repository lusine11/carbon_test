import React, {useState} from 'react';
import SortableTree from 'react-sortable-tree';
import Row from './Row';

//harcnel childrenneri hamar

const Tree = ({pages}) => {
    const [treeData, setTreeData] = useState(dataToTree(pages));

    return (
        <div style={{height: 400}}>
            <SortableTree
                maxDepth={3}
                treeData={treeData}
                onChange={treeData => setTreeData(treeData)}
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

export default Tree;