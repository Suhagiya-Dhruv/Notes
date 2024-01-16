import React, { useEffect, useState } from 'react'
import Card from './Card';

const ECommerce = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://dummyjson.com/products"
        fetch(url).then(data => data.json()).then(data => setData(data.products)); // get method
    }, []);

    return (
        <div style={{
            display:"flex",
            flexWrap :"wrap",
            gap: "1rem",
            justifyContent:"center"
        }}>
            {
                data.map((obj, ind) => {
                    return <Card data={obj} />
                })
            }

        </div>
    )
}

export default ECommerce;