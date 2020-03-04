import React from "react";
import ReactDOM from "react-dom";
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import "react-sortable-tree/style.css";

// const maxDepth = 5;

const renderDepthTitle = ({ path }) => `Depth: ${path.length}`;
const maxDepth = 5;

const treeData = [
    {
        title: "`title`",
        subtitle: "`subtitle`",
        expanded: true,
        children: [
            {
                title: "Child Node",
                subtitle: "Defined in `children` array belonging to parent"
            },
            {
                title: "Nested structure is rendered virtually",
                subtitle: (
                    <span>
            The tree uses&nbsp;
                        <a href="https://github.com/bvaughn/react-virtualized">
              react-virtualized
            </a>
                        &nbsp;and the relationship lines are more of a visual trick.
          </span>
                )
            }
        ]
    },
    {
        expanded: true,
        title: "Any node can be the parent or child of any other node",
        children: [
            {
                expanded: true,
                title: "Chicken",
                children: [{ title: "Egg" }]
            }
        ]
    },
    {
        title: "Button(s) can be added to the node",
        subtitle:
            "Node info is passed when generating so you can use it in your onClick handler"
    },
    {
        title: "Show node children by setting `expanded`",
        subtitle: ({ node }) => `expanded: ${node.expanded ? "true" : "false"}`,
        children: [
            {
                title: "Bruce",
                subtitle: ({ node }) => `expanded: ${node.expanded ? "true" : "false"}`,
                children: [{ title: "Bruce Jr." }, { title: "Brucette" }]
            }
        ]
    },
    {
        title: "Advanced",
        subtitle: "Settings, behavior, etc.",
        children: [
            {
                title: (
                    <div>
                        <div
                            style={{
                                backgroundColor: "gray",
                                display: "inline-block",
                                borderRadius: 10,
                                color: "#FFF",
                                padding: "0 5px"
                            }}
                        >
                            Any Component
                        </div>
                        &nbsp;can be used for `title`
                    </div>
                )
            },
            {
                expanded: true,
                title: "Limit nesting with `maxDepth`",
                subtitle: `It's set to ${maxDepth} for this example`,
                children: [
                    {
                        expanded: true,
                        title: renderDepthTitle,
                        children: [
                            {
                                expanded: true,
                                title: renderDepthTitle,
                                children: [
                                    { title: renderDepthTitle },
                                    {
                                        title: ({ path }) =>
                                            path.length >= maxDepth
                                                ? "This cannot be dragged deeper"
                                                : "This can be dragged deeper"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Disable dragging on a per-node basis with the `canDrag` prop",
                subtitle: "Or set it to false to disable all dragging.",
                noDragging: true
            },
            {
                title: "You cannot give this children",
                subtitle:
                    "Dropping is prevented via the `canDrop` API using `nextParent`",
                noChildren: true
            },
            {
                title:
                    "When node contents are really long, it will cause a horizontal scrollbar" +
                    " to appear. Deeply nested elements will also trigger the scrollbar."
            }
        ]
    }
];


// import "./styles.css";


const alertNodeInfo = ({ node, path, treeIndex }) => {
    const objectString = Object.keys(node)
        .map(k => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
        .join(",\n   ");

    global.alert(
        "Info passed to the button generator:\n\n" +
        `node: {\n   ${objectString}\n},\n` +
        `path: [${path.join(", ")}],\n` +
        `treeIndex: ${treeIndex}`
    );
};

class NestedTable extends React.Component {
    state = {
        searchString: "",
        searchFocusIndex: -1,
        searchFoundCount: 0,
        treeData
    };

    handleTreeOnChange = treeData => {
        this.setState({ treeData });
    };

    handleSearchOnChange = e => {
        this.setState({
            searchString: e.target.value
        });
    };

    selectPrevMatch = () => {
        const { searchFocusIndex, searchFoundCount } = this.state;

        this.setState({
            searchFocusIndex:
                searchFocusIndex !== null
                    ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
                    : searchFoundCount - 1
        });
    };

    selectNextMatch = () => {
        const { searchFocusIndex, searchFoundCount } = this.state;

        this.setState({
            searchFocusIndex:
                searchFocusIndex !== null
                    ? (searchFocusIndex + 1) % searchFoundCount
                    : 0
        });
    };

    toggleNodeExpansion = expanded => {
        this.setState(prevState => ({
            treeData: toggleExpandedForAll({ treeData: prevState.treeData, expanded })
        }));
    };

    render() {
        const {
            treeData,
            searchString,
            searchFocusIndex,
            searchFoundCount
        } = this.state;
        console.log(treeData)

        return (
            <div className="wrapper">
                <div className="bar-wrapper">
                    <button onClick={this.toggleNodeExpansion.bind(this, true)}>
                        Expand all
                    </button>
                    <button
                        className="collapse"
                        onClick={this.toggleNodeExpansion.bind(this, false)}
                    >
                        Collapse all
                    </button>
                    <label>Search: </label>
                    <input onChange={this.handleSearchOnChange} />
                    <button className="previous" onClick={this.selectPrevMatch}>
                        Previous
                    </button>
                    <button className="next" onClick={this.selectNextMatch}>
                        Next
                    </button>
                    <label>
                        {searchFocusIndex} / {searchFoundCount}
                    </label>
                </div>
                <div className="tree-wrapper" style={{height: 800}}>
                    <SortableTree
                        treeData={treeData}
                        onChange={this.handleTreeOnChange}
                        onMoveNode={({ node, treeIndex, path }) =>
                            global.console.debug(
                                "node:",
                                node,
                                "treeIndex:",
                                treeIndex,
                                "path:",
                                path
                            )
                        }
                        maxDepth={maxDepth}
                        searchQuery={searchString}
                        searchFocusOffset={searchFocusIndex}
                        canDrag={({ node }) => !node.noDragging}
                        canDrop={({ nextParent }) => !nextParent || !nextParent.noChildren}
                        searchFinishCallback={matches =>
                            this.setState({
                                searchFoundCount: matches.length,
                                searchFocusIndex:
                                    matches.length > 0 ? searchFocusIndex % matches.length : 0
                            })
                        }
                        isVirtualized={true}
                        generateNodeProps={rowInfo => ({
                            buttons: [
                                <button
                                    className="btn btn-outline-success"
                                    style={{
                                        verticalAlign: "middle"
                                    }}
                                    onClick={() => console.log(rowInfo)}
                                >
                                    ℹ
                                </button>
                            ]
                        })}
                    />
                </div>
            </div>
        );
    }
};


export default NestedTable
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



// import React from 'react'
//
// import SortableCondition from 'react-sortable-condition'
// import 'react-sortable-condition/themes/antd.styl'
//
// const data = [
//     {
//         type: 'or',
//         expanded: true,
//         children: [
//             {
//                 type: 'and',
//                 children: [{ type: 'normal', patterns: { a: 2 } }],
//             },
//             {
//                 type: 'and',
//                 expanded: true,
//                 children: [{ type: 'normal', patterns: { a: 2 } }, { type: 'normal', patterns: { a: 2 } }],
//             },
//         ],
//     },
// ];
//
// const TestPattern = ({ patterns, onChange }) => {
//     console.log('patterns', patterns);
//     const handleClick = () => {
//         console.log('clicked');
//         if (onChange) {
//             onChange({ patterns: 2 })
//         }
//     };
//     return <span onClick={handleClick}>1</span>
// };
//
// const NestedTable = () => {
//     return (
//         <div style={{ height: '400px' }}>
//             <SortableCondition
//                 defaultDataSource={data}
//                 onChange={v => console.log('change', v)}
//                 onDragState={v => console.log('drag', v)}
//                 onVisible={v => console.log('visible', v)}
//                 onMoveNode={v => console.log('move', v)}
//                 maxDepth={3}
//             >
//                 <SortableCondition.Condition
//                     onAdd={() => console.log('add')}
//                     onDelete={() => console.log('delelte')}
//                     // addIcon={<Icon type="plus-circle" />}
//                     // deleteIcon={<Icon type="close-circle" />}
//                 />
//                 <SortableCondition.Pattern>
//                     <TestPattern />
//                 </SortableCondition.Pattern>
//             </SortableCondition>
//         </div>
//     )
// };
//
// export default NestedTable