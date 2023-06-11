import React from "react"

export default function App() {    
    const [BMI, setBMICalculation] = React.useState()
    const [inputs, setInputs] = React.useState(
        {
            weight: Number(),
            height: Number(),
        }
    )
    function handleChange(event) {
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [event.target.name]: event.target.value
            }
        })
    }
    function CalculateBMI(event){
         event.preventDefault()
         setBMICalculation(prevBMI => {
             return(inputs.weight /  (inputs.height * inputs.height))
         }
       )
    
    }
   
    return (
        <div>
            <h1 className="title" align="center">BMI Calculator</h1>
            <form className="inputs--div">
                <input 
                className="input1"
                type="text"
                value={inputs.weight}
                name="weight"
                placeholder="Type your mass in kg"
                onChange={handleChange}
                
                />                
                <input 
                className="input2"
                type="text"
                value={inputs.height}
                name="height"
                placeholder="Type your height in metres"
                onChange={handleChange}
                />
                <br />
                <button className="button" align="center" onClick={CalculateBMI} >Calculate BMI</button>
                <h1 align="center">BMI: <p className="BMI">{BMI}</p></h1>
                <h4 className="statement">Your BMI indicates you're mass is <h4 >{BMI <= 18.5 && "UnderWeight" || BMI <= 24.9 && "Normal" || BMI <= 29.9 && "Overweight" || BMI <= 34.9 && "Obese" || BMI >= 34.9 && "Extremely Obese"}</h4></h4>
            </form>
        </div>
    )
}