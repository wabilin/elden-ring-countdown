import { createSignal, onMount, onCleanup } from 'solid-js';
import styles from './Particle.module.css';

export default function Particle() {
  const radius = Math.round(Math.random() * 8 + 4);
  const initX = Math.random() * 100 - 50;
  const initY = Math.random() * 100 - 50;
  const opacity = Math.random() * 0.4 + 0.1;

  const [x, setX] = createSignal(initX);
  const [y, setY] = createSignal(initY);
  const ySpeed = Math.random() * 2 + 1;
  let xSpeed = (Math.random() - 0.5) * 4;
  let xSpeedDiff = (Math.random() - 0.5) * 0.4;

  function updateXSpeed() {
    if (Math.random() < 0.2) {
      xSpeedDiff += (Math.random() - 0.5) * 0.4;
    }

    xSpeed += xSpeedDiff;
    if (xSpeed > 4) {
      xSpeed = 4;
      xSpeedDiff = Math.abs(xSpeedDiff) * -1;
    } else if (xSpeed < -4) {
      xSpeed = -4;
      xSpeedDiff = Math.abs(xSpeedDiff);
    }
  }

  onMount(() => {
    const updatePos = () => {
      updateXSpeed();

      setY((v) => {
        const next = v - ySpeed;
        return next < -55 ? 51 : next;
      });

      setX((v) => {
        const next = v + xSpeed;

        if (next < -55) {
          return 51;
        } if (next > 55) {
          return -51;
        }
        return next;
      });
    };
    const timer = setInterval(updatePos, 1000);
    updatePos();

    onCleanup(() => { clearInterval(timer); });
  });

  return (
    <div
      role="presentation"
      className={styles.particle}
      style={{
        opacity,
        transform: `translate3d(${x()}vw, ${y()}vh, 0`,
        width: `${radius}px`,
        height: `${radius}px`,
        'transition-property': (y() === 51 || [51, -51].includes(x())) ? 'none' : 'transform',
      }}
    />
  );
}
