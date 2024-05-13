"use client";
import "./globals.css";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
