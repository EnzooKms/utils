import { Time } from "../index.js";

function sleep(duration: number): boolean {
  const now = Date.now();
  while (Date.now() - now < duration) {}
  return true;
}

Time.prototype.sleep = sleep;