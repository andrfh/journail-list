import './Button.css';

const Button = ( {text, click, style, type} ) => {

	return ( 
		<button className={'button ' + style} onClick={click} type={type}>{text}</button>
	);
};
 
export default Button;