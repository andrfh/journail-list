import styles from'./Header.module.css';
import logoImg from '../../assets/logo.svg';

const Header = () => {
	return ( 
		<img className={styles.logo} src={logoImg} alt="logo" />
	);
};
 
export default Header;