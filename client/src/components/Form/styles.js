
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  paper: {
    padding: theme.spacing(2),
    // backgroundImage: `url(https://www.enjpg.com/img/2020/dark-academia-11.jpg)`,
    borderRadius: '20px',
    background: '#D3D3D3',
    border: '2px solid rgb(90 67 60)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
