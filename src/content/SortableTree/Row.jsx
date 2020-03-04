import React, {useState} from "react";

const Row = ({title, ...others}) => {
    const [check, setCheck] = useState(false);
    console.log(others);

    return (
        <table width={200}>
            <tbody>
            <tr>
                <td>{title}</td>
                <td align='right'><input type="checkbox" checked={check} onChange={() => {
                    setCheck(!check)
                }}/></td>
            </tr>
            </tbody>
        </table>);
};

export default Row;