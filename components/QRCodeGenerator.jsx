"use client";
import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = ({ value }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (value && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, (error) => {
        if (error) {
          console.error("Error generating QR code:", error);
        }
      });
    }
  }, [value]);

  return <canvas ref={canvasRef} />;
};

export default QRCodeGenerator;
