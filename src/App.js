import React from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppLayout from './AppLayout';
import theme from './theme';
import { CSSTransition } from "react-transition-group";

const GlobalCss = withStyles( (theme) => ({
    '@global': {
      '.MuiTypography-body2': {
        color:theme.palette.text.secondary,
        fontSize: '12px',
        marginBottom: '30px',
        lineHeight: '1.9',
        fontFamily:theme.typography.fontFamilySecondary
      },
      '.box-title': {
        fontWeight: 'bold',
        fontSize: '21px',
        letterSpacing: '2px',
        marginBottom: theme.spacing(4),
        textTransform: 'uppercase'
      },
      '.MuiFilledInput-root': {
        borderRadius: '3px'
      },
      '.MuiInputBase-input':{
        fontSize: '14px'
      }
    },
}))(() => null);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount(){
    this.setState({
      mounted: true
    })
  }

  render(){
    return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalCss />
    <CSSTransition
        in={this.state.mounted}
        appear={true}
        classNames="fade"
        timeout={2000}
      >
        <div>
        <AppLayout />
        </div>
      </CSSTransition>
  </ThemeProvider>
    )
  }
}

export default App;
