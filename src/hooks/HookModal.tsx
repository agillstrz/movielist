"use client";
import React, { useState } from "react";

export default function HookModal() {
  const [modal, setModal] = useState<boolean>(false);
  return { modal, setModal };
}
