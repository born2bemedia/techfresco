"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";

function OrderButton({ className, text, service }) {
  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    setServiceValue,
  } = usePopup();

  const orderPopupOpen = () => {
    setServiceValue(service);
    setOrderPopupDisplay(true);
  };
  return (
    <>
      <button className={className} onClick={() => orderPopupOpen()}>
        <span>{text}</span>
      </button>
    </>
  );
}

export default OrderButton;
