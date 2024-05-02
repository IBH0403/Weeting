import styles from '@/styles/game/GameWaiting.module.css';
import logo from '@/assets/images/logo.png';

const GameWaitingLogo = () => {
  return (
    <>
      <img className={styles.GameWaitingLogo} src={logo} alt="GameTemplate" />
    </>
  );
};

export default GameWaitingLogo;