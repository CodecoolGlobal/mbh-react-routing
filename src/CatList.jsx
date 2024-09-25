import { useState } from "react"

import { data } from './data.js';
import './CatList.css';
import CatTableRow from './CatTableRow.jsx';

export default function CatList() {
    const [cats] = useState(data);

    return (
        <div>
            <table className="cat-table">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Részletek</th>
                    </tr>
                </thead>
                <tbody>
                    {cats.map(cat => <CatTableRow name={cat.name} catId={cat.id} key={cat.id} />)}
                </tbody>
            </table>
        </div>
    )
}