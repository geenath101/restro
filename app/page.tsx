"use client";

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Link from "next/link";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setUrl(`${window.location.origin}/menu`);
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Scan to view the menu</h1>
      {isClient && url ? (
        <>
          <h1>{url}</h1>
          <QRCodeCanvas value={url} size={256} />
        </>
      ) : (
        <div style={{ width: 256, height: 256 }} />
      )}
      {/* <p className="mt-8">
        <Link href="/menu" className="text-blue-500 hover:underline">
          Or click here to view the menu
        </Link>
      </p> */}
    </main>
  );
}
