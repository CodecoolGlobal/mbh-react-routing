import { useParams } from 'react-router-dom';
import { data } from './data.js';

export default function CatDetails() {
    const { id } = useParams();

    const findCatById = (id) => data.find(cat => cat.id === id);

    /* function findCatById2(id) {
        for (const cat of data) {
            if (cat.id === id) {
                return cat;
            }
        }
    } */

    const cat = findCatById(id);

    return (
        <div className="CatDetails">
            <h1>{cat.name} (cat.id)</h1>
            <img src={cat.img} alt={cat.name} />
        </div>
    )
}