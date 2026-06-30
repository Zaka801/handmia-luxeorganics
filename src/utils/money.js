export const formatPKR = (value) => {
  if (typeof value !== 'number') return '';

  return `PKR ${value.toLocaleString('en-PK')}`;
};
