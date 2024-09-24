import styles from'./Header.module.css';
import logoImg from '../../assets/logo.svg';
import SelectUser from '../SelectUser/SelectUser';

const Header = () => {
	return ( 
		<>
			<img className={styles.logo} src={logoImg} alt="logo" />
			<SelectUser />
		</>
	);
};
 
export default Header;