import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";



export interface ToastMessagesProps {
  message: string;
  open?: boolean;
  onClose?: () => void;
  duration?: number;
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left' | 'center';
  type?: 'error' | 'warning' |'info' | 'success';
}

 const BrspdToastMessages =({open=true, vertical= 'top', horizontal='left', duration = 5000 , type='success', message, ...props}:ToastMessagesProps) => {
/*   const { open, onClose, message } = props;
  const vertical = props.vertical || "top";
  const horizontal = props.horizontal || "right";
  const duration = props.duration || 5000;
  const type = props.type || "success"; //error|warning|info|success */
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={props.onClose}
      anchorOrigin={{ vertical, horizontal }}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          //onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      <Alert severity={type}>{message || "............"}</Alert>
    </Snackbar>
  );
}
export default BrspdToastMessages;