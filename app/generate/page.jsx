"use client";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("https://github.com/themuuln");

  const qrInputHandler = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="space-y-1">
          <Label>Enter your URL:</Label>
          <Input
            value={url}
            onChange={qrInputHandler}
          />
        </div>
        <QRCodeGenerator value={url} />
      </div>
    </main>
  );
}
