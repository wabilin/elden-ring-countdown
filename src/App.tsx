import type { Component } from 'solid-js';
import { createSignal, onCleanup } from 'solid-js';
import { dayDiff } from './lib/dayDiff'

const App: Component = () => {
  const releaseDate = new Date('2022-02-25T08:00:00.000Z')
  const [now, setNow] = createSignal(new Date());

  const timer = setInterval(() => {
    setNow(() => {
     const d =  new Date()
     return d
    })
  }, 1000);
  onCleanup(() => clearInterval(timer));

  const diff = () => dayDiff(releaseDate, now());

  return (
    <main
      className="flex flex-col justify-center items-center min-h-screen
      bg-neutral-900 text-[rgb(223,191,111)]"
    >
      <h1 className="text-2xl sm:text-4xl my-2 sm:my-4 font-black">エルデンリング発売まで</h1>
      <strong className="text-xl sm:text-3xl font-mono">
        {diff().days}日&nbsp;
        {diff().hours}時&nbsp;
        {diff().minutes}分&nbsp;
        {String(diff().seconds).padStart(2, '0')}秒
      </strong>
    </main>
  );
};

export default App;
