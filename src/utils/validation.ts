/**
 * Valide un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valide un numéro de téléphone français
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone);
}

/**
 * Valide un code postal français
 */
export function isValidPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^[0-9]{5}$/;
  return postalCodeRegex.test(postalCode);
}

/**
 * Vérifie si une chaîne est vide ou ne contient que des espaces
 */
export function isEmptyString(str: string): boolean {
  return str.trim().length === 0;
}

/**
 * Vérifie si une valeur est définie et non nulle
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
} 