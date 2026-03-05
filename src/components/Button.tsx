import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'text' | 'icon';
  style?: 'primary' | 'secondary' | 'tertiary';
  color?: 'default' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  state?: 'default' | 'hover' | 'disabled' | 'loading';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  circular?: boolean;
  shadow?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  label,
  type = 'text',
  style = 'primary',
  color = 'default',
  size = 'medium',
  state = 'default',
  leftIcon,
  rightIcon,
  circular = false,
  shadow = false,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    border: 'none',
    borderRadius: circular ? '50%' : '6px',
    fontFamily: 'inherit',
    fontWeight: 500,
    cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
    transition: 'all 0.15s ease',
    opacity: state === 'disabled' ? 0.5 : 1,
    boxShadow: shadow ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: { padding: '6px 12px', fontSize: '13px' },
    medium: { padding: '8px 16px', fontSize: '14px' },
    large: { padding: '10px 20px', fontSize: '15px' },
  };

  // Style variants
  const styleVariants: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: color === 'danger' ? '#dc2626' : color === 'success' ? '#16a34a' : '#000',
      color: '#fff',
    },
    secondary: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #eaeaea',
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: '#666',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles[size],
    ...styleVariants[style],
  };

  return (
    <button
      style={combinedStyles}
      onClick={onClick}
      disabled={state === 'disabled'}
      className={className}
    >
      {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
      {label}
      {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
    </button>
  );
}
