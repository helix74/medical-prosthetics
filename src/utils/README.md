# Utils

## Structure

```
utils/
├── formatting.ts    # Fonctions de formatage (dates, nombres, etc.)
├── validation.ts    # Fonctions de validation
├── animations.ts    # Utilitaires d'animation
└── index.ts        # Export centralisé
```

## Organisation

### Formatting (`formatting.ts`)
```typescript
export function formatDate(date: Date, locale = 'fr-FR'): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatPrice(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(amount);
}
```

### Validation (`validation.ts`)
```typescript
export function isValidEmail(email: string): boolean {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}
```

## Conventions de Nommage

1. **Fonctions**
   - Noms descriptifs en camelCase
   - Verbes d'action (format, validate, parse, etc.)
   - Préfixes cohérents (is, has, get, set, etc.)

2. **Types**
   ```typescript
   type FormatOptions = {
     locale?: string;
     currency?: string;
     precision?: number;
   };
   ```

## Bonnes Pratiques

1. **Pure Functions**
   ```typescript
   // ✅ Bonne pratique
   export function add(a: number, b: number): number {
     return a + b;
   }

   // ❌ À éviter
   let total = 0;
   export function addToTotal(n: number): number {
     total += n;
     return total;
   }
   ```

2. **Error Handling**
   ```typescript
   export function parseJSON<T>(json: string): T {
     try {
       return JSON.parse(json) as T;
     } catch (error) {
       throw new Error(`Failed to parse JSON: ${error.message}`);
     }
   }
   ```

3. **Documentation**
   ```typescript
   /**
    * Formate un nombre en prix avec devise
    * @param {number} amount - Le montant à formater
    * @param {string} [currency='EUR'] - La devise à utiliser
    * @returns {string} Le prix formaté
    * @example
    * formatPrice(42.99) // "42,99 €"
    */
   export function formatPrice(amount: number, currency = 'EUR'): string {
     // ...
   }
   ```

## Exemples d'Utilisation

### Formatage
```typescript
import { formatDate, formatPrice } from '@/utils/formatting';

const date = new Date();
console.log(formatDate(date)); // "01 février 2024"
console.log(formatPrice(42.99)); // "42,99 €"
```

### Validation
```typescript
import { isValidEmail, isValidPassword } from '@/utils/validation';

const email = 'user@example.com';
const password = 'Password123';

if (isValidEmail(email) && isValidPassword(password)) {
  // Procéder à l'inscription
}
```

### Animations
```typescript
import { fadeIn, slideUp } from '@/utils/animations';

const variants = {
  hidden: { opacity: 0 },
  visible: fadeIn({ duration: 0.5 }),
};

function Component() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      Content
    </motion.div>
  );
}
```

## Tests

```typescript
// __tests__/formatting.test.ts
describe('formatting', () => {
  describe('formatPrice', () => {
    it('should format price correctly', () => {
      expect(formatPrice(42.99)).toBe('42,99 €');
      expect(formatPrice(1000)).toBe('1 000,00 €');
    });
  });
});
``` 