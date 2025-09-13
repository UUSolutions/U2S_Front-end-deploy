import styles from '../../assets/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.HomeHeaderBlock}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Left: Title */}
        <div className="d-flex align-items-center">
          <h1 className={styles.mainheaderHome}>
            Universal Umbrella Solutions 
          </h1>
        </div>

        {/* Right: Subtitle / description */}
        <div className="d-flex align-items-center">
          <p className={styles.pr_home}>
            <strong>Access to wisdom is universal</strong>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;