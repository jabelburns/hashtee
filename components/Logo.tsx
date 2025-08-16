import React from "react";
export function Logo({ className = "h-8 w-auto" }: { className?: string }){
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow">
        <rect x="2" y="2" width="24" height="24" rx="6" fill="url(#g)"/>
        <path d="M9 10h10v2H9v-2zm0 6h6v2H9v-2z" fill="white"/>
        <defs>
          <linearGradient id="g" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4F7D"/><stop offset="1" stopColor="#00B4D8"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display tracking-tight text-2xl">
        <span className="text-brand">Hash</span><span className="text-ink">Tee.store</span>
      </span>
    </div>
  );
}
