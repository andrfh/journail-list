import './Button.css';

const Button = ( {text, click} ) => {

	return ( 
		<button className='button accent' onClick={click}>{text}</button>
	);
};
 
export default Button;