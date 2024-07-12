import names from './names.js';
import ansiColor from 'ansi-color';

const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getRandomColoredName = () => {
  const name = getRandomName();
  const coloredName = ansiColor.set(name, 'green');
  return coloredName;
};

export { getRandomName, getRandomColoredName };
