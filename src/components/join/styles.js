import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=> ({
  root:{
    padding:'20px',
    width:'450px',
    height:'400px',
    border: '1px solid black',
    borderRadius: '10px',
  },
  heading: {
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: '30px',
  },
  formContainer: {
    marginTop: '2rem',
    padding: '10px',
    '& > form': {
      width:'100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  formFields: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    '& > input': {
      padding:'10px',
      margin: '0.5rem auto',
      fontFamily: "'DM Sans', sans-serif",
      fontSize:'1.2rem',
      outline: 'none'
    }
  },
  button: {
    padding: '15px',
    margin: '1rem auto',
    fontSize: '1.5rem',
    cursor: 'pointer',
  }



}));