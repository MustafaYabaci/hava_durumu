import React ,{useState} from "react"
import Weather from "./Weather";
import "./App.css";


function App (){
const APP_KEY=" cf23041a62f34093b4994930212710"
let cityinput=""
const [wheatherdata,setwheatherdata]=useState([])
function citytext()
{
  document.querySelector("input").addEventListener("input", (e)=>{
    cityinput=e.target.value 
    console.log(cityinput)
  })
}
async  function  getdata(value)
{
 
 
  const data=await fetch( `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=5`   )
  const result=await data.json();
  setwheatherdata(result.forecast.forecastday)
  


}
  return  (
    <div>
   
     <div  className="search">
       <input type="text" placeholder="Şehri giriniz" onChange={citytext}/>
        <button onClick={()=>getdata(cityinput)}>arama</button>
     </div>

{wheatherdata.map(item=>(<Weather key={item.date} date={item.date} mintemp={item.day.mintemp_C} maxtemp={item.day. maxtemp_C} condition={item.day.condition.text} icon={item.day.condition.icon}/>))}



    </div>
  )
}





export default App;