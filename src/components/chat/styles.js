import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width:'45vw',
    height: '80vh',
    border: '1px solid black',
    borderRadius: '14px',
    display:'flex',
    flexDirection: 'column'
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  }

}));