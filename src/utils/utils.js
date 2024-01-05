
import { clsx } from 'clsx';
const { twMerge } = require('tailwind-merge');

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
