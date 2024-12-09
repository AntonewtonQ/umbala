import CompanyLogo from "../CompanyLogo";

const CompaniesSection = () => (
  <section className="bg-gray-100 py-12 px-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      <CompanyLogo src="/images/sonangol.png" alt="Sonangol" />
      <CompanyLogo src="/images/bai.jpg" alt="BAI" />
      <CompanyLogo src="/images/sonangol.png" alt="Company 3" />
      <CompanyLogo src="/images/sonangol.png" alt="Company 4" />
      <CompanyLogo src="/images/bai.jpg" alt="Company 5" />
      <CompanyLogo src="/images/bai.jpg" alt="Company 6" />
    </div>
  </section>
);

export default CompaniesSection;
