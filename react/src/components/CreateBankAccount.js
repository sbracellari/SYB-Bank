import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  background: {
    backgroundColor: '#232428',
    color: 'white',
    margin: '10px -10px -10px -10px',
    height: '70vh',
    overflowX: 'hidden',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    margin: 40,
    width: 700,
  },
  paper: {
    margin: '5px 20px 20px 20px',
    backgroundColor: '#000000',
    borderRadius: 'none',
    height: '40vh',
    minHeight: '56vh',
    padding: 10
  },
  txt: {
    fontFamily: 'Lemonada',
    fontSize: 20,
    paddingLeft: 20
  },
})

class CreateBankAccount extends Component {
    render () {
        const { classes } = this.props
        return (
            <div className={classes.background}>
              <div className={classes.container}>
                <Typography className={classes.txt}>Create an Account</Typography>
                <div className={classes.paper}>
                </div>
              </div>
            </div>
        )
    }
}

export default withStyles(styles)(CreateBankAccount)