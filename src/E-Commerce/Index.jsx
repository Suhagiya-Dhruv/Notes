import React, { useEffect, useState } from 'react'
import Card from './Card';

const ECommerce = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function run() { // asynchronous function

            const url = "https://dummyjson.com/products"

            const value = await fetch(url);
            const jsonData = await value.json();

            setData(jsonData.products);
        }

        run()

        // .then(data => data.json())
        // .then(data => console.log(data.products))
        // .catch(err => console.log(err))

    }, []);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center"
        }}>
            {/* {
                data.map((obj, ind) => {
                    return <Card data={obj} />
                })
            } */}

            
            {data.length && // conditional rending
                <Card data={data[0]}></Card>
            }
        </div>
    )
}

export default ECommerce;