export const required = (value) => {
    if (value) return undefined;
    return "This filed is required";
}

export const maxLengthValidator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Maximum allowed length is ${maxLength}`;
    return undefined;
}