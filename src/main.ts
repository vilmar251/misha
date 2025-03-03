type Units = 'b' | 'kb' | 'mb' | 'gb';

type FileInfo = {
  name: string;
  size: number;
  units: Units;
};

type SpeedInfo = {
  speedPerSecond: number;
  units: Units;
};

const convertToBytes = (size: number, units: Units): number => {
  const pow = {
    b: 0,
    kb: 1,
    mb: 2,
    gb: 3,
  };

  return size * 1000 ** pow[units];
};

const convertSecondsToFriendlyFormat = (seconds: number): string => {
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;

  const days = Math.floor(seconds / secondsInDay);
  seconds %= secondsInDay;

  const hours = Math.floor(seconds / secondsInHour);
  // Оставляем только секунды, не входящие в полные часы
  seconds %= secondsInHour;

  const minutes = Math.floor(seconds / secondsInMinute);
  const remainingSeconds = seconds % secondsInMinute;

  return `Дни: ${days}. Часы: ${hours}. Минуты: ${minutes}. Секунды: ${remainingSeconds}.`;
};

const downloadTimeCalculator = (file: FileInfo, speed: SpeedInfo): string => {
  const fileSizeInBytes = convertToBytes(file.size, file.units);
  const speedSizeInBytes = convertToBytes(speed.speedPerSecond, speed.units);

  const secondsForDownload = Math.ceil(fileSizeInBytes / speedSizeInBytes);

  return convertSecondsToFriendlyFormat(secondsForDownload);
};

const testCases = [
  [
    { name: 'День рождения.mp4', size: 1, units: 'gb' },
    { speedPerSecond: 100, units: 'kb' },
    'Дни: 0. Часы: 2. Минуты: 46. Секунды: 40.',
  ],
  [
    { name: 'Отчёт.docx', size: 1023443, units: 'kb' },
    { speedPerSecond: 1, units: 'mb' },
    'Дни: 0. Часы: 0. Минуты: 17. Секунды: 4.',
  ],
  [
    { name: 'Голосовое сообщение.mp3', size: 1, units: 'b' },
    { speedPerSecond: 1000, units: 'gb' },
    'Дни: 0. Часы: 0. Минуты: 0. Секунды: 1.',
  ],
  [
    { name: 'Корги.png', size: 100.45, units: 'mb' },
    { speedPerSecond: 1162.6, units: 'b' },
    'Дни: 1. Часы: 0. Минуты: 0. Секунды: 2.',
  ],
  [
    { name: 'GTA V', size: 100.45, units: 'gb' },
    { speedPerSecond: 1, units: 'b' },
    'Дни: 1162615. Часы: 17. Минуты: 46. Секунды: 40.',
  ],
] as const;

for (const testCase of testCases) {
  const file = testCase[0];
  const speed = testCase[1];
  const expected = testCase[2];

  const result = downloadTimeCalculator(file, speed);

  if (result === expected) {
    console.log(`Расчеты верны для файла "${file.name}"!`);
  } else {
    console.log(`Расчеты НЕВЕРНЫ для файла "${file.name}"!`);
  }
}
