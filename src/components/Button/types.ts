import React, {ReactNode} from "react";
export interface IButtonProps extends 
  React.ComponentPropsWithoutRef<"button"> {
    size?: 'small' | 'default' | 'large'
  }