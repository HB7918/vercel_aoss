import React from 'react';

interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  labelState?: boolean;
  state?: 'default' | 'hover' | 'disabled';
  name?: string;
  value?: string;
  className?: string;
}

export default function Radio({
  label,
  checked = false,
  onChange,
  labelState = true,
  state = 'default',
  name,
  value,
  className = '',
}: RadioProps) {
  const containerStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
    opacity: state === 'disabled' ? 0.5 : 1,
  };

  const radioOuterStyles: React.CSSProperties = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: `2px solid ${checked ? '#000' : '#d1d5db'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.15s ease',
    backgroundColor: '#fff',
  };

  const radioInnerStyles: React.CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: checked ? '#000' : 'transparent',
    transition: 'all 0.15s ease',
  };

  const labelStyles: React.CSSProperties = {
    fontSize: '14px',
    color: '#000',
    userSelect: 'none',
  };

  const handleClick = () => {
    if (state !== 'disabled' && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label style={containerStyles} className={className}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => handleClick()}
        disabled={state === 'disabled'}
        style={{ display: 'none' }}
      />
      <span style={radioOuterStyles}>
        <span style={radioInnerStyles} />
      </span>
      {labelState && label && <span style={labelStyles}>{label}</span>}
    </label>
  );
}
