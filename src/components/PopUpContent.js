import styles from './PopUpContent.module.css';
const PopUpContent = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h2>Invalid input</h2>
      </div>
      <h4>Some</h4>
      <button>Okay</button>
    </div>
  );
};

export default PopUpContent;
