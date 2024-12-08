// src/components/CompanyLogo.tsx
import Image from "next/image";

interface CompanyLogoProps {
  src: string;
  alt: string;
}

const CompanyLogo = ({ src, alt }: CompanyLogoProps) => (
  <div className="flex items-center justify-center p-4">
    <Image
      src={src}
      alt={alt}
      width={150}
      height={50}
      className="grayscale w-36"
    />
  </div>
);

export default CompanyLogo;
