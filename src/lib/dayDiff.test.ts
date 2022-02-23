import { dayDiff } from './dayDiff';

describe('dayDiff', () => {
  it('returns zero values if the dates are the same', () => {
    const date1 = new Date('2019-01-01');
    const date2 = new Date('2019-01-01');
    expect(dayDiff(date1, date2)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('returns the correct values if the dates are different', () => {
    expect(dayDiff(new Date('2019-01-02'), new Date('2019-01-01'))).toEqual({
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(dayDiff(
      new Date('2022-02-25T14:20:20.000Z'),
      new Date('2022-02-22T12:16:08.000Z'),
    )).toEqual({
      days: 3,
      hours: 2,
      minutes: 4,
      seconds: 12,
    });

    expect(dayDiff(
      new Date('2022-02-25T00:00:00.000Z'),
      new Date('2022-02-22T12:16:08.000Z'),
    )).toEqual({
      days: 2,
      hours: 11,
      minutes: 43,
      seconds: 52,
    });
  });

  it('returns zero day the correct values if the 2nd date is bigger', () => {
    expect(dayDiff(new Date('2019-01-01'), new Date('2019-01-02'))).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
});
