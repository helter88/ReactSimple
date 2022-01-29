import styles from './PopUp.module.css';
const PopUp = (props) => {
  const popUpHandler = (e) => {
    e.stopPropagation();
    props.popUpInfo();
  };
  return (
    <div className={styles['pop-up']} onClick={popUpHandler}>
      {props.children}
    </div>
  );
};
export default PopUp;
