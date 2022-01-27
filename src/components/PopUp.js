import styles from './PopUp.module.css';
const PopUp = (props) => {
  const spaceHandler = (e) => {
    e.stopPropagation();
    props.popUpInfo();
  };
  return (
    <div className={styles['pop-up']} onClick={spaceHandler}>
      {props.children}
    </div>
  );
};
export default PopUp;
