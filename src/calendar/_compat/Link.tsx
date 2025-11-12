// src/calendar/_compat/next.tsx
import React from "react";

// ---- replacement for next/link ----
export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, ...rest } = props;
  return <a href={href} {...rest} />;
}

