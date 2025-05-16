import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';

const Cards = (props) => {
    const [chefData,setChefData] = useState([]);
    const {wantToCook} = props;
    useEffect(()=>{
         const fetchChefData = async () => {
               const res = await fetch('chefData.json');
               const data = await res.json();
               setChefData(data);
         }
         fetchChefData();
    },[]);
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:w-2/3'>
            {
                chefData.map(foodItem => <Card foodItem = {foodItem} key={foodItem.id} wantToCook={wantToCook}></Card>)
            }
        </section>
    );
};

export default Cards;