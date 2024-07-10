"use client";

// to handle error gracefully, instead of red screen it will show this

// let suppose fetch se error aaa gaya 401 ka to ye handle kar le ga.
// automatically wrap the route segemtn and its child components in the correct boundary.
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
  // is se hum dobara retry kar sakin gay,
  // 1 button banaa lain gay our us se dobara retry kar lain gay
}) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundary;
