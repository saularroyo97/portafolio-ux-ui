// components/ui/card.jsx
import React, { forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Card = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(clsx("rounded-xl border bg-card text-card-foreground shadow", className))}
      {...rest}
    />
  );
});

// Resto de componentes Card (CardHeader, CardTitle, etc...)
const CardHeader = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={twMerge(clsx("flex flex-col space-y-1.5 p-6", className))} {...rest} />
  );
});

const CardTitle = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={twMerge(clsx("font-semibold leading-none tracking-tight", className))} {...rest} />
  );
});

const CardDescription = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={twMerge(clsx("text-sm text-muted-foreground", className))} {...rest} />
  );
});

const CardContent = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={twMerge(clsx("p-6 pt-0", className))} {...rest} />
  );
});

const CardFooter = forwardRef(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={twMerge(clsx("flex items-center p-6 pt-0", className))} {...rest} />
  );
});

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};