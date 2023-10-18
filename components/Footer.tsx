import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import Link from "next/link";

// Create a Date object

export const Footer = () => {
  var currentDate = new Date();

  // Get the current year
  var currentYear = currentDate.getFullYear();

  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Link href="/">
        <Logo />
      </Link>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
        <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
          <span className="text-xs">Created by ioannis @{currentYear}</span>
        </Link>
      </div>
    </div>
  );
};
