import './CardButton.css';

const CardButton = ({children, className, click}) => {
	const cl = 'card-button' + (className ? ' ' + className : '');

	return ( 
		<button className={cl} onClick={click}>{children}</button>
	);
};
 
export default CardButton;