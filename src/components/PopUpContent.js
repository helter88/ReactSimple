import styles from './PopUpContent.module.css';
const PopUpContent = (props) => {
  const popUpHandler = () => {
    props.popUpInfo();
  };

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h2>Invalid input</h2>
      </div>
      <h4>Some</h4>
      <button onClick={popUpHandler}>Okay</button>
    </div>
  );
};

export default PopUpContent;
