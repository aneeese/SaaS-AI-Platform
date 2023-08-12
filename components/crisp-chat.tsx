"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("05c7757d-1a76-4bb0-abeb-93333b87a9c7");
  }, []);

  return null;
};