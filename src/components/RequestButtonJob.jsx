"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";

function RequestButtonJob({ className, text }) {
  const { requestPopupDisplayJob, setRequestPopupDisplayJob } = usePopup();

  const orderPopupOpen = () => {
    setRequestPopupDisplayJob(true);
  };
  return (
    <>
      <button className={className} onClick={() => orderPopupOpen()}>
        <span>{text}</span>
      </button>
    </>
  );
}

export default RequestButtonJob;
