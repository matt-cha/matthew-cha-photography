import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const PackagesLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default PackagesLayout;
