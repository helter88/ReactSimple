import styles from './PopUp.module.css';
const PopUp = (props) => {
  return <div className={styles['pop-up']}>{props.children}</div>;
};
export default PopUp;
