import styles from './Particle.module.css';
import { createSignal, onMount, onCleanup } from "solid-js";

export default function Particle() {
  const radius = Math.round(Math.random() * 8 + 4);
  const initX = Math.random() * 100 - 50;
  const initY = Math.random() * 100 - 50;
  const opacity = Math.random() * 0.4 + 0.1;

  const [x, setX] = createSignal(initX);
  const [y, setY] = createSignal(initY);
  const ySpeed = Math.random() * 2 + 1;
  let xSpeed = (Math.random() - 0.5) * 4;

  onMount(() => {
    const updatePos = () => {
      setY(v => {
        const next = v - ySpeed
        return next < -55 ? 51 : next
      })

      setX(v => {
        const next = v + xSpeed
        xSpeed += (Math.random() - 0.5) * 0.2;
        xSpeed = Math.min(Math.max(xSpeed, -4), 4);
        if (next < -55) {
          return 51;
        } else if (next > 55) {
          return -51;
        }
        return next;
      });
    }
    const timer = setInterval(updatePos, 1000)
    updatePos();

    onCleanup(() => { clearInterval(timer) });
  })

  return (
    <div
      role="presentation"
      className={styles.particle}
      style={{
        opacity,
        transform: `translate3d(${x()}vw, ${y()}vh, 0`,
        width: `${radius}px`,
        height: `${radius}px`,
        "transition-property": (y() === 51 || [51, -51].includes(x())) ? 'none' : "transform",
      }}
    />
  )
}
