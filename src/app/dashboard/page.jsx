"use client";
import React from "react";
import dynamic from "next/dynamic";
import Container from "../Container";

const DashboardPage = dynamic(() => import("@/components/dashboard/DashboardPage"), { ssr: false });

export default function Page() {
  return (
    <Container>
      <DashboardPage />
    </Container>
  );
}
