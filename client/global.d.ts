// src/global.d.ts
export {}; // Tránh lỗi "Cannot redeclare block-scoped variable"

declare global {
  interface Window {
    FB: any;
  }
}
