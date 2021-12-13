import React,{useState} from "react";
import {nanoid} from'nanoid'
import data from './mock-data.json'
import './employ.css'

function Employees(){
    const [cdata, updata]= useState(data);
    
    const [addfrom, setfrom]=useState({
        Name:'',
        Job:''
    })
    const handelFromChange =(event)=>{
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newaddfrom={...addfrom};
        newaddfrom[fieldName]= fieldValue;
        setfrom(newaddfrom);
    };
    const handelFromSubmit=(event)=>{
        event.preventDefault();
        const newdata={
            Name: addfrom.Name,
            Job: addfrom.Job
        };
        const newdatas=[...cdata, newdata];
        updata(newdatas)
    };
    const deletData=(id)=>{
            console.log(id)
            const updateitems= cdata.filter((ele, ind)=>{
                return id !== ind;
               
            })
            console.log(updateitems)
            updata(updateitems)
            }
            
        
    return(
        <div className="employ-container">
            <h2 >Add a Enploy</h2>
            <from >
                <input 
                    type="text"
                    name="Name"
                    required="required"
                    placeholder="Enter the name"
                    onChange={handelFromChange}
                    
                    />
                     <input 
                    type="text"
                    name="Job"                   
                    required="required"
                    placeholder="Enter the job title"
                    onChange={handelFromChange}
                    />
                    <button type="submit" onClick={handelFromSubmit} >Add</button>
            </from>
            <table >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Option</th>
                </tr>
                </thead>
                
                <tbody>
                    { cdata.map((cdata, ind)=>(
                            <tr key={cdata.id}>
                                    <td>{cdata.Name}</td>
                                    <td>{cdata.Job}</td>
                                    <td><button onClick={()=>deletData(ind)}>delet</button></td>

                            </tr>
                        ))
                    }
                </tbody>
                
            </table>
        </div>
    );
}
export default Employees;