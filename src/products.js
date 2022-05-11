import React from "react";



function Products(props) {

    const name = props.name
    const food = props.food

    return (
        <>
        <h1>{name} is the greatest student in coding 9</h1>
        <p>{food} are way better than wings. Drew told me to fly out to Buffalo to get some wings</p>
        </>
    )
}


export default Products