import background from '../../assests/background2.jpg';
//auto|length|cover|contain|initial|inherit;
const styles = {
    root: {
      margin: 0,
      padding: 0,
      backgroundImage:  `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      overflow: 'hidden',
    },
    container: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      },
    signUpForm: {
      display: 'flex',
      flexDirection: 'column',
    },
  
    inputField: {
      margin: '3% 0',
      padding: '4%',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  
    inputFieldFocus: {
      boxShadow: '0 0 5px 2px #e16060',
    },
  
    submitButton: {
      backgroundColor: '#e16060',
      padding: '5%',
      width: '100%',
      marginTop: '3%',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '20px',
      transition: 'background-color 0.3s ease',
      border: 'none',
      color: '#ffffff',
    },
  
    submitButtonHover: {
      backgroundColor: '#d34848',
    },
  };
  
  export default styles;
  