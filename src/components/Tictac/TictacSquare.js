import React, { useState, useEffect } from 'react';
import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';
const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);


function TictacSquare(props){
    const {
        tic = -1,
        onClick,
    } = props;
    const classes = useStyles();

    function renderTic(){
        if( tic === -1 ) {
            return <div></div>;
        }
        if( tic === 0 ) {
            return (<div> x </div>);
        }
        return (<div> o </div>);
    }
    return (
        <Grid  xs={4} item className={classes.square} >
            <div onClick={onClick} className={classes.squareContent}>
                {renderTic()}
            </div>
        </Grid>
    )
}
 
export default TictacSquare;