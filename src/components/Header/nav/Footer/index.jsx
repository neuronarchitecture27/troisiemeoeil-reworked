import styles from './style.module.scss';
import Magnetic from '@/common/Magnetic';

export default function index() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <a className='footerEl'>Awwwards</a>
      </Magnetic>

      <Magnetic>
        <a className='footerEl'>Instagram</a>
      </Magnetic>
      <Magnetic>
        <a className='footerEl'>Dribble</a>
      </Magnetic>
      <Magnetic>
        <a className='footerEl'>LinkedIn</a>
      </Magnetic>

    </div>
  )
}
