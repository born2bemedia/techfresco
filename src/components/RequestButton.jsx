"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";

function RequestButton({ className, text }) {
  const { requestPopupDisplay, setRequestPopupDisplay } = usePopup();

  const orderPopupOpen = () => {
    setRequestPopupDisplay(true);
  };
  return (
    <>
      <button className={className} onClick={() => orderPopupOpen()}>
        <span>{text}</span>
      </button>
    </>
  );
}

export default RequestButton;
