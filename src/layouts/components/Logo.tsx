"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({
  srcLight,
  srcDark,
  logoWidth,
  logoHeight,
  title,
}: {
  srcLight: string;
  srcDark: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const logoPath =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? srcDark
      : srcLight;

  return (
    <Link href="/" className="navbar-brand">
      <div className="hover:cursor-pointer flex justify-center items-center align-middle">
        {logoPath ? (
          <Image
            width={logoWidth}
            height={logoHeight}
            src={logoPath}
            alt={title}
            priority
          />
        ) : (
          title
        )}
      </div>
    </Link>
  );
};

export default Logo;
