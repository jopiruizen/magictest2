import React, { useState, useEffect } from 'react';
import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import TictacSquare from './TictacSquare';

import styles from './styles';
//import defaultState from './states';

const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);



function TictacGrid(props){
    const {
        onReset,
        onTicChange,
        defaultState,
    } = props;

    const classes = useStyles();

    const [tic, setTic ] = useState(0);
    const [tictacState , setTictacState] = useState({...defaultState});

    function alternateTic() {
        if ( tic === 0 ) {
            setTic(1);
            onTicChange(1);
        } else {
            setTic(0);
            onTicChange(0);
        }
    }

    function isGameEnded() {
        for( let i in tictacState ) {
            if( tictacState[i] ===  -1 ){
                return false;
            }
        }
        return true; //Game Ended...
    }

    function reset() {
        setTictacState({...defaultState});
        setTic(0);
    }

    function handleClick(target){
        if(tictacState[target] === -1) {
             tictacState[target] = tic;
             setTictacState(
                 {
                     ...tictacState,
                     [target]: tic,
                 }
             )
             alternateTic();
        }
        if( isGameEnded() ){
            if( onReset ) {
                onReset();
            }
        }
    }   

    useEffect(()=>{
        reset();
    },[defaultState]);

    return (
        <Grid container className={classes.tictacGrid} spacing={2}>
            <TictacSquare tic={tictacState.tic1} onClick={()=> handleClick('tic1') } />
            <TictacSquare tic={tictacState.tic2} onClick={()=> handleClick('tic2') } />
            <TictacSquare tic={tictacState.tic3} onClick={()=> handleClick('tic3') } />

            <TictacSquare tic={tictacState.tic4}  onClick={()=> handleClick('tic4') }/>
            <TictacSquare tic={tictacState.tic5}  onClick={()=> handleClick('tic5') }/>
            <TictacSquare tic={tictacState.tic6} onClick={()=> handleClick('tic6') }/>

            <TictacSquare tic={tictacState.tic7} onClick={()=> handleClick('tic7') } />
            <TictacSquare tic={tictacState.tic8} onClick={()=> handleClick('tic8') }/>
            <TictacSquare tic={tictacState.tic9} onClick={()=> handleClick('tic9') } />
        </Grid>
    )
}
 
export default TictacGrid;