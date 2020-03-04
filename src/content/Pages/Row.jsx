import React, {useState} from "react";

const Row = ({title, params, ...others}) => {
    const [check, setCheck] = useState(false);
    console.log(others);

    return (
        <div className='page-row' width="100%">
            <div className="page-col-1" align='center'><input type="checkbox" checked={check} onChange={() => {
                setCheck(!check)
            }}/></div>
            <div className="page-col">{title}</div>
            <div className="page-col-2">{params.published ? "Published" : "Unpublished"}</div>
            <div className="page-col-2">1 day ago</div>
            <div className="page-col-2">Actions</div>
            <div className="page-col-1" align='center'><span className="dot">...</span></div>
        </div>);
};

export default Row;