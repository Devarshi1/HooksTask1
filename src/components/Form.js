//2. Create an input form that takes in a name, an age, a height and a skincolor and a submit button that changes the user state with the entered values

import React , {useState} from 'react'

function Form() {
    const [data , setData] = useState({
        name: "devarshi",
        age: 18,
        height: 130,
        color: "red"
    })

    return (
        <div>
            <div>
                    <input type="text" placeholder = "Name" value = {data.name} onChange = {(e) => {setData({...data ,name: e.target.value})}}/>
                    <input type="text" placeholder = "Age"  value = {data.age} onChange = {(e) => {setData({...data ,name: e.target.value})}}/>
                    <input type="text" placeholder = "Height" value = {data.height} onChange = {(e) => {setData({...data ,name: e.target.value})}}/>
                    <input type="text" placeholder = "color" value = {data.color} onChange = {(e) => {setData({...data ,name: e.target.value})}}/>
                                                                                                           
            </div>
            <div>
                    {data.name}
                    {data.age}
                    {data.height}
                    {data.color}
             </div>
        </div>
    )
}

export default Form
