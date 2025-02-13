// Common type definitions
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ColorScheme = 'light' | 'dark' | 'system';
export type Status = 'idle' | 'loading' | 'success' | 'error' | 'warning';
export type Direction = 'horizontal' | 'vertical';
export type Alignment = 'start' | 'center' | 'end' | 'between' | 'around';

// Form field configuration
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  validation?: {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
  options?: Array<{
    value: string;
    label: string;
  }>;
}

// Component utility types
export interface WithVariant {
  variant?: Variant;
}

export interface WithSize {
  size?: Size;
}

export interface WithStatus {
  status?: Status;
}

// Animation types
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

// Event handler types
export type HandleChange = (value: string) => void;
export type HandleSubmit = (e: React.FormEvent) => void;
export type HandleClick = (e: React.MouseEvent) => void; 