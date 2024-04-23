import React from 'react'

export default function Student(props) {
    //Logic
    const sayHi = ()=>{
          alert('Hi Everyone..!')
    }
    const printName = (name)=>{
          alert(name)
    }
  return (
    <div>
        <table border={1}>
            <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Gender</th>
                     <th colSpan={2}>Action(s)</th>
                 </tr>
            </thead>
            <tbody>
                {
                    props.students.map((std,index)=>(
                        <tr key={index}>
                            <td>{std.id}</td>
                            <td>{std.name}</td>
                            <td>{std.gender}</td>
                            <td>
                                 {/* calling function without parameter */}
                                 <button onClick={sayHi} >say Hi</button>
                                  {/* calling function wit hparameter */}
                                 <button onClick={()=>printName(std.name)}>print name</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
