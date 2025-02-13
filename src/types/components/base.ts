import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Size, Variant } from '../common';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: IconType;
}

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onError?: () => void;
}

export interface CardProps extends BaseComponentProps {
  variant?: 'elevated' | 'outlined';
  size?: Size;
  hover?: boolean;
}

export interface InputProps extends BaseComponentProps {
  label?: string;
  error?: string;
  helper?: string;
  size?: Size;
  variant?: 'default' | 'error' | 'success';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isFullWidth?: boolean;
  isDisabled?: boolean;
} 