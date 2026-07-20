"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "arrow";
  href?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  children,
  showArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "btn-text-arrow";

  const content = (
    <>
      <span>{children}</span>
      {(showArrow || variant === "arrow") && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${baseClass} ${className}`} {...props}>
      {content}
    </button>
  );
}
