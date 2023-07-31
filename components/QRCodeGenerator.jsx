"use client";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Button } from "./ui/button";

const QRCodeGenerator = ({ value, scale }) => {
  const canvasRef = useRef(null);
  const [name, setName] = useState("themuuln");

  useEffect(() => {
    if (value && canvasRef.current) {
      const options = {
        width: canvasRef.current.width * scale,
        height: canvasRef.current.height * scale,
      };

      QRCode.toCanvas(canvasRef.current, value, options, (error) => {
        if (error) {
          console.error("Error generating QR code:", error);
        }
      });
    }
  }, [value, scale]);

  const downloadQRCode = () => {
    if (canvasRef.current) {
      const tempCanvas = document.createElement("canvas");
      const tempContext = tempCanvas.getContext("2d");
      const { width, height } = canvasRef.current;
      tempCanvas.width = width;
      tempCanvas.height = height;
      tempContext.drawImage(canvasRef.current, 0, 0, width, height);

      tempCanvas.toBlob(
        (blob) => {
          const downloadLink = document.createElement("a");
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = name + " QR";
          downloadLink.click();
        },
        "image/png",
        1.0,
      ); // Adjust the quality here (0.0 - 1.0)
    }
  };

  return (
    <>
      <div>
        <canvas
          className="border border-solid"
          ref={canvasRef}
        />
      </div>
      <Button onClick={downloadQRCode}>Download</Button>
    </>
  );
};

export default QRCodeGenerator;
