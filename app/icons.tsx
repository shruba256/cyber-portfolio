type IconName = "arrow-up-right" | "arrow-down" | "arrow-up" | "sun" | "moon" | "play" | "pause" | "spark";

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name === "arrow-up-right" && <path d="M6 18 18 6M6 6h12v12" />}
      {name === "arrow-down" && <path d="M12 4v16m-6-6 6 6 6-6" />}
      {name === "arrow-up" && <path d="M12 20V4m-6 6 6-6 6 6" />}
      {name === "sun" && <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>}
      {name === "moon" && <path d="M20.8 13.2A9 9 0 0 1 10.8 3.2 9 9 0 1 0 20.8 13.2Z" />}
      {name === "play" && <path d="m8 5 11 7-11 7Z" />}
      {name === "pause" && <path d="M8 5v14M16 5v14" />}
      {name === "spark" && <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />}
    </svg>
  );
}
