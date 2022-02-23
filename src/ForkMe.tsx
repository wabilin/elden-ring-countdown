import forkMe from './assets/github-corner-right.svg';

export default function ForkMe() {
  return (
    <a
      href="https://github.com/wabilin/elden-ring-countdown"
      className="fixed block right-0 top-0 opacity-90"
    >
      <img
        loading="lazy" width="250" height="250"
        className="w-20 h-20 sm:w-32 sm:h-32 aspect-square"
        src={forkMe}
        alt="Fork me on GitHub"
      />
    </a>
  )
}
