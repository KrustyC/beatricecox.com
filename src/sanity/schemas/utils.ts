export function validateIn(
  values: (string | number)[],
  value: string | number | undefined
) {
  if (!value) {
    return `Value is required`;
  }

  return values.includes(value)
    ? true
    : `Value must be one of ${values.join(", ")}`;
}
