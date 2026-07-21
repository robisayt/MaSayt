import type { ReactElement, CSSProperties } from "react";
import type { IconKey } from "./data";

const base = "22";

export const ICONS: Record<IconKey, () => ReactElement> = {
  landing: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
  ),
  building: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  cart: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L21.5 7H6" />
    </svg>
  ),
  portfolio: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  redesign: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
  uiux: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </svg>
  ),
  layout: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  responsive: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <rect x="17" y="8" width="5" height="9" rx="1" />
    </svg>
  ),
  speed: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  ),
  support: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22a8 8 0 0 0 8-8h-2a2 2 0 0 1-2-2v-1a6 6 0 0 0-12 0v1a2 2 0 0 1-2 2H2a8 8 0 0 0 8 8" />
      <path d="M6 12v3a2 2 0 0 0 2 2h1" />
    </svg>
  ),
  design: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  seo: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  code: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  ),
  detail: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    </svg>
  ),
  chat: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  publish: () => (
    <svg width={base} height={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
};

export function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.2-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.3-.1-.5-.6-.2L6.2 12.9l-5-1.6c-1-.3-1-1 .2-1.5L20.6 3.2c.9-.3 1.6.2 1.3 1.1z" />
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6 8 7 8-7" />
    </svg>
  );
}

/** Shared logo mark: browser window + code chevron + cursor. Used in the
 *  header, hero (address bar), footer, preloader and app/icon.svg. */
export function LogoMark({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect x="2.5" y="4" width="19" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 8.2H21.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="5.3" cy="6.1" r="0.75" fill="currentColor" />
      <path d="M9 9L9 18.5L11.7 16.1L13.6 20L15.3 19.2L13.4 15.3L17 15Z" fill="currentColor" />
    </svg>
  );
}
