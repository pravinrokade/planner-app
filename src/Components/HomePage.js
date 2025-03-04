import React, { useState } from 'react'

function HomePage() {

    const [subject, setSubject] = useState('');
    const [hour, setHour] = useState('');
    const [plan, setPlan] = useState(() => JSON.parse(localStorage.getItem('plan')) || []);

    
    const handleAdd = () => {
        if(subject && hour){
            const updatedPlan = [...plan, {Subject: subject, Hour: parseInt(hour)}]
            
            setSubject('');
            setHour('');
            setPlan(updatedPlan);

            localStorage.setItem('plan', JSON.stringify(updatedPlan))
            
        }
    }

    const increment = (i) =>{
        const up = [...plan];
        up[i].Hour += 1;
        
        localStorage.setItem('plan',JSON.stringify(up));
        setPlan(up);
    }
    const decrement = (i) =>{
        const dn = [...plan];
        dn[i].Hour -= 1;
        
        localStorage.setItem('plan',JSON.stringify(dn));
        setPlan(dn);
    }

  return (
    <div>
        <h1>Geekster Education Planner</h1>
        <div className="input">
            <input 
                type="text" 
                name="" id="Subject" 
                placeholder='Subject' 
                value={subject}
                onChange={(e) => {setSubject(e.target.value)}} />
            <input 
                type="number" 
                name="" 
                id="Hour" 
                placeholder='Hour' 
                value={hour}
                onChange={(e) => {setHour(parseInt(e.target.value))}} />
            <input 
                type="button" 
                value="Add"
                onClick={handleAdd} />
        </div>
        <h2>Study Plan</h2>
        <ul>
            {plan.map((pla, ind) => (
                <li key={ind}>Subject: {pla.Subject} | Hour: {pla.Hour}  <button onClick={()=>increment(ind)}>+</button> <button onClick={()=>decrement(ind)}>-</button></li>
            ))}
        </ul>
    </div>
  )
}

export default HomePage

