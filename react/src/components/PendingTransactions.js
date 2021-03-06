// import necessary packages
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

// apply styles
const styles = () => ({
  approve: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  background: {
    backgroundColor: '#232428',
    color: 'white',
    margin: '10px -10px -10px -10px',
    height: '70vh',
    overflowX: 'hidden'
  },
  container: {
    margin: '30px 70px 40px 70px'
  },
  paper: {
    margin: '5px 20px 20px 20px',
    backgroundColor: '#000000',
    borderRadius: 'none',
    minHeight: '56vh',
    padding: 10
  },
  txt: {
    fontFamily: 'Lemonada',
    fontSize: 20,
    paddingLeft: 20
  },
    tblTitle: {
    color: 'white',
    fontFamily: 'Lemonada',
    paddingBottom: 24,
    fontSize: 18
  },
  body: {
    color: 'white',
    padding: 22,
    fontSize: 18
  },
  btn: {
      color: 'white',
      backgroundColor: '#0091c2',
      margin: 2
  },
  data: {
    fontFamily: 'Lemonada',
    fontSize: 16,
    textAlign: 'center'
  }
})

class PendingTransactions extends Component {
  render () {
  const { 
    classes, 
    pending_transactions, // get props passed in App.js
    onApprove, 
    onDeny, 
    logged_in 
  } = this.props
   
  // check if user is logged in. if not, redirect to welcome page
  if (!logged_in) {
    return <Redirect to="/" />
  }

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Typography className={classes.txt}>Pending Transactions</Typography>
        <div className={classes.paper}>
          {pending_transactions.length === 0 ? ( // check if there are any pending transactions
            <Typography className={classes.data}>No data to display at this time.</Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tblTitle} align="center">Transaction ID</TableCell>
                    <TableCell className={classes.tblTitle} align="center">Customer ID</TableCell>
                    <TableCell className={classes.tblTitle} align="center">Account From</TableCell>
                    <TableCell className={classes.tblTitle} align="center">Account To</TableCell>
                    <TableCell className={classes.tblTitle} align="center">Update Amount</TableCell>
                    <TableCell className={classes.tblTitle} align="center">Update Date</TableCell>
                    <TableCell className={classes.tblTitle} align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pending_transactions.map((transactions, i) => // map pending transactions to a table
                    <TableRow key={i}>
                      <TableCell className={classes.body} align="center">
                        {/* perform null checks on each column */}
                        {transactions.TRANS_ID === null ? 'N/A' : transactions.TRANS_ID}
                      </TableCell>
                      <TableCell className={classes.body} align="center">
                        {transactions.CUS_ID === null ? 'N/A' : transactions.CUS_ID}
                      </TableCell>
                      <TableCell className={classes.body} align="center">
                        {transactions.ACCT_FROM === null ? 'N/A' : transactions.ACCT_FROM}
                      </TableCell>
                      <TableCell className={classes.body} align="center">
                        {transactions.ACCT_TO === null ? 'N/A' : transactions.ACCT_TO}
                      </TableCell>
                      <TableCell className={classes.body} align="center">
                        {transactions.UPDATE_AMT === null ? 'N/A' : transactions.UPDATE_AMOUNT}
                      </TableCell>
                      <TableCell className={classes.body} align="center">
                        {transactions.UPDATE_DATE === null ? 'N/A' : transactions.UPDATE_DATE}
                      </TableCell>
                      <TableCell className={classes.approve} align="center">
                        <Button 
                          size="small" 
                          className={classes.btn}
                          onClick={() => onApprove(i)} // defined in App.js
                        >
                          Approve
                        </Button>
                        <Button 
                          size="small" 
                          className={classes.btn}
                          onClick={() => onDeny(i)} // defined in App.js
                        >
                          Deny
                        </Button> 
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
    )
  }
}

export default withStyles(styles)(PendingTransactions)