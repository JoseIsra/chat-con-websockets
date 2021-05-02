import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding:'20px'
  },
  title: {
    fontSize:'2rem',
    fontFamily: "'DM Sans', sans-serif",
  },
  exitButton:{
    display:'flex',
    alignItems: 'center',
    border:'1px solid black',
    borderRadius:'10px',
    padding:'10px',
    outline:'none',
    color:'black',
    textDecoration: 'none'
  }
}));