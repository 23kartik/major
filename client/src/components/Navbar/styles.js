import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    // backgroundImage: `url(https://media.istockphoto.com/photos/abstract-luxurious-polygonal-black-background-with-gold-accents-frame-picture-id1249749650?b=1&k=20&m=1249749650&s=170667a&w=0&h=iz5G9XEqoN8KL7YA2diq8sao7TR7ltulZ3OZ1UKDEbM=)`,
    backgroundColor:'#bcbcbc',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '-300px',
    height:'50px',
    border: '1px solid antiquewhite',
    borderRadius: '25px!important' 

  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
     
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color:'antiquewhite'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
