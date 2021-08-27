import React, { useEffect, useState }  from 'react'
import { fetchData } from './api'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'


const App = () => {

  const [state, setstate] = useState(
   {
    data:{},
    country:""
   }
  )
  useEffect(()=>{

    const mount =async()=>{
      const data = await fetchData();
      setstate({data})
    }
    mount();
   
  },[])
 
  console.log(state);

const handleChange=async(country)=>{
const data = await fetchData(country);
setstate({data, country:country})
}


  const {data,country}=state;


  return (
    <div className={styles.container}>
    <h1>Covid-19 Tracker</h1>
      <img    src="https://answers.childrenshospital.org/wp-content/uploads/2021/03/COVID-DealingWithUnknown_image-scaled.jpg"    className={styles.image}  alt=""/>
      <Cards  data={data}  />
      <CountryPicker      handleChange={handleChange}       />

      <Chart data={data} country={country}  />
    </div>
 

  )
}

export default App
