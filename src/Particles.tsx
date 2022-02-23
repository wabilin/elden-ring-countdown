import { For } from 'solid-js';
import Particle from './Particle';

const COUNT = 50;

export default function Particles() {
  const particles = Array(COUNT).fill(0);

  return (
    <For each={particles}>{() => (
      <Particle />
    )}</For>
  );
}
