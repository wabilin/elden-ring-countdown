const msPerMinute = 60000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;

export type DayDiff = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function dayDiff(a: Date, b: Date): DayDiff {
  const timeLeft = Math.max(a.getTime() - b.getTime(), 0);
  const days = Math.floor(timeLeft / msPerDay);
  const moddedMs = Math.floor(timeLeft % msPerDay);
  const hours = Math.floor(moddedMs / msPerHour);
  const minutes = Math.floor((moddedMs % msPerHour) / msPerMinute);
  const seconds = Math.floor(((moddedMs % msPerHour) % msPerMinute) / 1000);

  return {
    days, hours, minutes, seconds,
  };
}
