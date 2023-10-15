"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <InfinitySpin width="200" color="#B41103" />
    </div>
  );
}
