import React, { useState, useEffect } from 'react';
import MuiGrid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';


import TictacGrid from './TictacGrid';

import ticTacDefaultState from './states';


const Grid = styled(MuiGrid)(spacing);
const useStyles = makeStyles(styles);


const GameStatus = {
    X_TURN: "X's Turn",
    O_TURN: "O's Turn",
    GAME_ENDED: "Game Ended",
};

function Tictac(props){
    const classes = useStyles();

    const [showReset, setShowReset] = useState(false);

    const [tictacState, setTictacState ] = useState({...ticTacDefaultState});
    const [gameStatus, setGameStatus] = useState(GameStatus.X_TURN);

    useEffect(()=> {
    }, [showReset]);

    function handleRestart() {
        setShowReset(false);
        setTictacState({...ticTacDefaultState});
        setGameStatus(GameStatus.X_TURN);
    }

    function onReset(){
        setShowReset(true);
        setGameStatus(GameStatus.GAME_ENDED);
    }

    function onTicChange(tic) {
        if( tic === 0) {
            setGameStatus(GameStatus.X_TURN);
        } else if( tic === 1 ) {
            setGameStatus(GameStatus.O_TURN);
        }
    }

    function renderButton() {
        if( showReset) {
            return (
             <Grid container item xs={12} >
                <Button 
                        className={classes.menuButton}
                        variant="outlined"
                        color="primary"
                        onClick={handleRestart}
                    >
                        Restart Game
                </Button>

            </Grid>
            )
        }
        return null;
    }

    return (
        <Grid container xs={12} justify="center">
            <Grid item  xs={12} mb={3}  className={classes.welcome} alignItems='center'> Welcome to Tic-Tac-Toe! </Grid>
            <Grid item  xs={12} mb={3} className={classes.status} alignItems='center' >{ gameStatus } </Grid>
            <Grid item  xs={12} className={classes.tictacContainer} >
              <TictacGrid 
                onTicChange={onTicChange}
                defaultState={tictacState}
                onReset={onReset}
                />
            </Grid>
            {renderButton()}
        </Grid>
    )
}
 
export default Tictac;