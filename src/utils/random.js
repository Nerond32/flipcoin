const [COIN_HEAD, COIN_TAILS] = [0, 1];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const coinFlip = () => {
  return randomNumber(COIN_HEAD, COIN_TAILS);
};

export { coinFlip, randomNumber, COIN_HEAD, COIN_TAILS };
