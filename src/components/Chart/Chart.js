import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api'
import {Line,Bar}   from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData, setDailyData] = useState([])
    useEffect(()=>{
        const fetchApi = async ()=>{
            const fetchData = await fetchDailyData();
            setDailyData(fetchData)
        }
        fetchApi()
    },[])

    console.log(dailyData);
    const lineChart = (
        dailyData.length ?(
            <Line
             data={{
                 labels:dailyData.map(({data})=>data),
                 datasets :[
                    {
                        data:dailyData.map(({confirmed})=>confirmed),
                        label:"Infected",
                        borderColor:"#3333ff",
                        backgroundColor:"rgba(255,0,0,0.5)",
                        fill:true
                    },

                    {
                        data:dailyData.map(({deaths})=>deaths),
                        label:"Deaths",
                        borderColor:"red",
                        fill:true

                    }


                 ]
             }}
            />
        ) : null
    )


const barChar = (
    confirmed ? (

        <Bar



            data={{
                labels:["infected" , "Recovered" , "Death"],
                datasets:[
                    {
                        label:"People",
                        backgroundColor:["rgba(0,0,255,0.5)" , "rgba(0,255,0,0.5)" , "rgba(255,0,0,0.5)"],
                        data:[confirmed.value,558833,deaths.value]
                    }
                ]
            }}
        />
    ): null


)







    return (
        <div className=     {styles.container}   >
            {country ? barChar:lineChart}

            <h3>Developed & Designed By: Mifras_Gaffoor</h3>
        </div>
    )
}

export default Chart
