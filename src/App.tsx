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
    <main>
      {diff().days}日 {diff().hours}時 {diff().minutes}分 {diff().seconds}秒
    </main>
  );
};

export default App;
