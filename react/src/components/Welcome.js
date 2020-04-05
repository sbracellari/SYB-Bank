import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const styles = () => ({
  background: {
    background: 'linear-gradient(180deg, #000000 60%, #232428 40%)',
    height: '101vh',
    margin: -10,
  },
  title: {
    fontSize: 80,
    color: 'white',
    fontFamily: 'Lemonada',
    textAlign: 'center',
    marginTop: -30,
    paddingTop: 270,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 5
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 30
  },
  btn: {
    color: 'white',
    backgroundColor: '#0091c2'
  },
  button: {
    marginLeft: 30
  }

})

class Welcome extends Component {
    render() {

    const { classes } = this.props

        return (
            <div className={classes.background}>
              <Typography className={classes.title}>Welcome</Typography>
              <div className={classes.container}>
                <Typography className={classes.subtitle}>I am...</Typography>
                <Button 
                  className={classes.button} 
                  classes={{root: classes.btn}}
                  component={Link}
                  to='/login'
                >
                  An administrator
                </Button>
                <Button 
                  className={classes.button} 
                  classes={{root: classes.btn}}
                  component={Link}
                  to='/login'
                >
                  A SYB Bank Customer
                </Button>
              </div>
            </div>
        )
    }
}

export default withStyles(styles)(Welcome)