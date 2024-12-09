import Image from "next/image";

interface CompanyLogoProps {
  src: string;
  alt: string;
}

const CompanyLogo = ({ src, alt }: CompanyLogoProps) => (
  <div className="flex items-center justify-center">
    <Image
      src={src}
      alt={alt}
      width={120}
      height={40}
      className="grayscale w-28 sm:w-36 hover:grayscale-0 transition"
    />
  </div>
);

export default CompanyLogo;
