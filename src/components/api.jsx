import { useEffect, useState } from "react";
import Card from './card';
const api = () => {
    
    const [data, setData] = useState();


    useEffect(() => { 
        fetch('https://jsonplaceholder.org/users')
        .then(res => res.json())
            .then((data) =>{
                setData(data);
                console.log(data)
        })
    }, [])
    
    const cardData = () => {
        return (
            data && data.map((item) => ( <Card name={item.firstname + " " + item.lastname} key={ item.id}></Card>))
            
        );
    }

    return (
        <section className="md:container md:mx-auto lg:container lg:mx-auto xl:container 2xl:mx-auto 2xl:container xl:mx-auto text-center px-20 mt-5">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center items-center">
                {
                   cardData()
                }
            </section>
        </section>
    )

}

export default api;