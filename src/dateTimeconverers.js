export const putFrontZeroes = (time) => {
  return ("0" + time).slice(-2);
};

export const convertHSLTimeToReal = (time) => {
  return new Date(new Date().setHours(0, 0, time, 0));
};

export const getNormalizedTime = (time) => {
  const date = new Date();
  date.setHours(0, 0, time, 0);
  return (
    putFrontZeroes(date.getHours()) + ":" + putFrontZeroes(date.getMinutes())
  );
};
