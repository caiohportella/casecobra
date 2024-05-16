/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  darkMode?: boolean;
}

const Phone = ({
  imgSrc,
  darkMode = false,
  className,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          darkMode
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
        className="pointer-events-none select-none z-50"
      />

      <div className="absolute -z-10 inset-0">
        <img
          src={imgSrc}
          alt="overlaying phone image"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Phone;
