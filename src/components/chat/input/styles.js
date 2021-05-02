import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width:'100%',
    padding:'10px',
    display:'flex',
    justifyContent: 'space-between',
    
    
  },
  input: {
    padding:'10px',
    fontSize:'16px',
    width:'70%',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
  },
  button: {
    display:'none'
  }
}));