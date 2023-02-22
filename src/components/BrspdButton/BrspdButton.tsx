import React from "react";
import "./BrspdButton.scss";


export interface ButtonProps {
  buttonType?: 'primary' | 'secondary' | 'tertiary'
  secondary?:boolean;
  size?: 'default' | 'fullwidth';
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const BrspdButton = ({
  buttonType= 'primary',
  secondary = false,
  size = 'default',
  label,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  const mode = buttonType === 'primary' ?  'button--primary' : buttonType === 'secondary' ? 'button--secondary' : 'button--tertiary';
  return (
    <button
      //type="button"
      disabled={isDisabled}
      className={isDisabled ? [`button--${buttonType}`,`button--${size}`, mode].join(' ') : [`button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default BrspdButton;
