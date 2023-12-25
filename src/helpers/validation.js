export function validator(value, rule, regex, max, min) {
  switch (rule) {
    case "pattern":
      return regex.test(value);
    default:
      return value.length >= min && value.length <= max;
  }
}
