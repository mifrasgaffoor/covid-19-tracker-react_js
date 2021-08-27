import React from 'react'
import { Grid,Card,CardContent,Typography } from '@material-ui/core'
import cx from 'classnames'
import CountUp from 'react-countup';
import styles from  './CustomCard.module.css'

const CustumCard = ({classnames,title,value,date,description}) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={classnames}>
                <CardContent>
                      <Typography  color="textSecondary"  >{title}</Typography>
                      <Typography  varient="h5" >
                       <CountUp   start={0}  end={value} duration={3} separator=","/>
                      </Typography>

                      <Typography  color="textSecondary"  >{date}</Typography>
                      <Typography  color="textSecondary"  varient="body2"  >{description}</Typography>
                </CardContent>
               </Grid>
    )
}

export default CustumCard
