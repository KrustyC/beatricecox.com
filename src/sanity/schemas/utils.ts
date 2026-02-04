export function validateIn(values: (string | number)[], value: any) {
    return values.includes(value) ? true : `Value must be one of ${values.join(", ")}`;
}
