import React, { useState } from 'react'

function FormTwo() {
    const [user, setUser] = useState({name:"", age:0, color:"" , height:0 })
    const [name, setName] = useState("Devarshi")
    const [age, setAge] = useState(12)
    const [color, setColor] = useState('red')
    const [height, setHeight] = useState(163)

function ChangeData(){
    setUser({
        name: name,
        age: age,
        color:color,
        height:height
    })
}
    return (
        <div>
        <div>
            <input type="text"  placeholder="Name"  value={name}  onChange={(e) => setName(e.target.value)} />
            <input type="text"  placeholder="Age"  value={age}  onChange={(e) => setAge(e.target.value)} />
            <input type="text"  placeholder="Color" value={color}  onChange={(e) => setColor(e.target.value)} />
            <input type="text"  placeholder="Height" value={height}  onChange={(e) => setHeight(e.target.value)}  />
            <button onClick={ChangeData}>Submit</button>
        </div>
        <div>
            {name}
            {age}
            {color}
            {height}
        </div>
        </div>
    )
}

export default FormTwo
