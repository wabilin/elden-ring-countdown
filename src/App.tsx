import type { Component } from 'solid-js';
import { createSignal, onCleanup } from 'solid-js';
import { dayDiff } from './lib/dayDiff';
import ForkMe from './ForkMe';
import Particles from './Particles';

const App: Component = () => {
  const releaseDate = new Date('2022-02-25T08:00:00+09:00');
  const [now, setNow] = createSignal(new Date());

  const timer = setInterval(() => {
    setNow(() => {
      const d = new Date();
      return d;
    });
  }, 1000);
  onCleanup(() => clearInterval(timer));

  const diff = () => dayDiff(releaseDate, now());

  const diffStr = () => {
    const {days, hours, minutes, seconds} = diff()
    const showHours = hours || days;
    const showMinutes = minutes || showHours;
    const showSeconds = seconds || showMinutes;

    return [
      days && `${days}日`,
      showHours && `${hours}時`,
      showMinutes && `${minutes}分`,
      showSeconds && `${seconds.toString().padStart(2, '0')}秒`,
    ].filter(Boolean).join(' ');
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-2xl sm:text-4xl my-2 sm:my-4 font-black">エルデンリング発売まで</h1>
        <strong className="text-xl sm:text-3xl font-mono text-center">
          {diffStr() || (
            <span>...発売した！！<br />はやくプレイしよう！！</span>
          )}
        </strong>
      </main>
      <ForkMe />
      <Particles />
    </>
  );
};

export default App;
