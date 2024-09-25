import { Link } from "react-router-dom";

export default function CatTableRow({ name, catId }) {
    return (
        <tr>
            <td>{name}</td>
            <td>
                <Link to={'/details/' + catId} >Részletek</Link>
            </td>
        </tr>
    )
}