import React from 'react'
import styles from './Cards.module.css'
import { Grid } from '@material-ui/core'
import CustumCard from '../CustomCard.js/CustumCard'
import cx from 'classnames'

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {

  if(!confirmed){
    return <h2>data fetching from server please loading......</h2>
  }

  console.log(confirmed,recovered,deaths,lastUpdate);

    return (
        <div className={styles.container}>
            <Grid  container spacing={3} justifyContent="center"   > 
              <CustumCard 
              classnames={cx(styles.card,styles.infected)} 
               title="Infected" 
                value={confirmed.value} 
                 date={new Date(lastUpdate).toDateString()} 
                 description="Number cases from covid-19"  />
              <CustumCard
                 classnames={cx(styles.card,styles.recovered)} 
               title="Recoverd" 
                value={895050780} 
                 date={new Date(lastUpdate).toDateString()}  
                 description="Number cases  recoverd from covid-19"

              />
              <CustumCard

                 classnames={cx(styles.card,styles.death)} 
                 title="Death"
                value={deaths.value} 
                 date={new Date(lastUpdate).toDateString()} 
                 description="Number deaths from covid-19"


              />
            </Grid>
        </div>
    )
}

export default Cards
