const getFirstName = (name: string | undefined) => {
  if (!name) return "";

  return name.split(" ")[0];
};

export { getFirstName };
