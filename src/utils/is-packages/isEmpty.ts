const isEmpty = (value: unknown): value is null | undefined => {
  if (Array.isArray(value)) {
    if (value.length <= 0) {
      return true;
    }
  }

  if (!value || String(value).trim().length <= 0) {
    return true;
  }

  return false;
};

export default isEmpty;
