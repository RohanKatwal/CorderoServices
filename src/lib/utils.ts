export const formattedDate = (time?: Date | number) => {
  if (!time) return "—"; 
  return new Date(time).toLocaleDateString();
};
