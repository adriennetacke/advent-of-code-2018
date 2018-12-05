const findConsistentLaziestGuard = (input) => {
  let nightShifts = input.split('\n')
    .map(x => x.trim())
    .sort();
  
  let sleepMinutes = {};

  let guardId = 0;
  let minuteAdrift = 0;
  let minuteAwaken = 0;

  for (let i = 0; i < nightShifts.length; i++) {
    let shift = nightShifts[i];
    let matchGroups = shift.match(/\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})\] (\w+) #?(\d+\d+|\w+)/);
    let minute = parseInt(matchGroups[5]);

    const action = matchGroups[6];

    if (action.toLowerCase() === 'guard') {
      guardId = matchGroups[7];

      if (sleepMinutes[guardId] == undefined) {
        sleepMinutes[guardId] = {};

        for (let i = 0; i < 60; i++) {
          sleepMinutes[guardId][i] = 0;
        }
      }
    };

    if (action.toLowerCase() === "falls") {
      minuteAdrift = minute;
    };

    if (action.toLowerCase() === "wakes") {
      minuteAwaken = minute;

      for (let m = minuteAdrift; m < minuteAwaken; m++) {
        sleepMinutes[guardId][m] += 1;
      };
    };
  };

  let mostMinutesSlept = Object
    .keys(sleepMinutes)
    .map(x => Object
      .values(sleepMinutes[x])
      .sort((a, b) => b - a)[0])
    .sort((a, b) => b - a)[0];

  let laziestGuardId = Object
    .keys(sleepMinutes)
    .find(x => Object
      .keys(sleepMinutes[x])
      .find(y => sleepMinutes[x][y] === mostMinutesSlept));
  
  let sleepiestMinuteId = Object
    .keys(sleepMinutes[laziestGuardId])
    .filter(x => sleepMinutes[laziestGuardId][x] === mostMinutesSlept)[0];

  return +laziestGuardId * sleepiestMinuteId;
};

module.exports = findConsistentLaziestGuard;