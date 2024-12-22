"use client";

// @components
import Link from "next/link";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="p-10 lg:p-20">
      <p className="text-foreground text-base text-center">
        {YEAR} &copy; Sajad. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-4 mt-6">
        <Link
          href="https://github.com/sajadevo"
          aria-label="Sajad Github Profile"
        >
          <svg
            viewBox="0 0 24 24"
            version="1.1"
            className="size-5 text-primary"
          >
            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
          </svg>
        </Link>
        <Link
          href="https://x.com/sajadevo_"
          aria-label="Sajad X/Twitter Profile"
        >
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-primary"
          >
            <path
              d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M20 3L4 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <Link
          href="https://dribbble.com/sajadevo"
          aria-label="Sajad Dribbble Profile"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-primary"
          >
            <path
              d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href="https://www.instagram.com/sajadevo/"
          aria-label="Sajad Instagram Profile"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-primary"
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M17.5 6.51L17.51 6.49889"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href="https://layers.to/sajadevo"
          aria-label="Sajad Layers Profile"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-primary"
          >
            <mask
              id="mask0_312_353"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={20}
              height={20}
            >
              <path d="M0 0H20V20H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_312_353)">
              <path
                d="M-3.79145e-05 11.4121L0.049962 4.14054C0.058712 2.82418 1.00809 1.6957 2.31871 1.44358L9.56059 0.0520599C11.3006 -0.282485 12.9156 1.03812 12.9043 2.78539L12.8543 10.0581C12.845 11.3733 11.8956 12.5018 10.5856 12.7539L3.34246 14.1454C1.60309 14.4805 -0.0119129 13.1599 -3.79145e-05 11.4121Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M3.54813 14.3133L3.59813 7.0406C3.60626 5.72545 4.55625 4.59757 5.86688 4.34545L13.1088 2.95393C14.8488 2.61939 16.4638 3.93939 16.4519 5.68727L16.4019 12.96C16.3931 14.2758 15.4438 15.4036 14.1331 15.6558L6.89125 17.0479C5.15125 17.3818 3.53626 16.0618 3.54813 14.3145V14.3133Z"
                fill="currentColor"
                fillOpacity="0.5"
              />
              <path
                d="M7.09626 17.2144L7.14626 9.9417C7.15501 8.62533 8.10438 7.49806 9.41501 7.24594L16.6569 5.85382C18.3969 5.51927 20.0119 6.83988 20 8.58715L19.95 15.8599C19.9413 17.1762 18.9919 18.3041 17.6813 18.5556L10.4394 19.9478C8.69938 20.2823 7.08501 18.9617 7.09626 17.2144Z"
                fill="currentColor"
                fillOpacity="0.8"
              />
            </g>
          </svg>
        </Link>
      </div>
    </footer>
  );
}
