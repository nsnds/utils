/**
 * 随机打乱数组
 */
export function shuffle(array = []) {
  const arr = Array.from(array);

  for (let i = 1; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}
