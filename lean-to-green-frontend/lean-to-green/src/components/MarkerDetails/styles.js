import { alpha,makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
  }},
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    paddingLeft: 2,
    paddingRight: 0,
    paddingTop: 2,
    paddingBottom: 2,
    color: '#8FDD3C',
    border: '2px;',
    borderColor: 'black',
    fontSize: '16px',
    width: '100%',
    
    

    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
}));