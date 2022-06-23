import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    borderRadius: '20px',
    background: '#D3D3D3',
    border: '2px solid rgb(90 67 60)',
  },
  abe:{
    background: '#D3D3D3',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    borderRadius: '20px',
    background: '#D3D3D3',
    border: '2px solid rgb(90 67 60)',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      
    },
  },
}));
