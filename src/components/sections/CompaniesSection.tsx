import CompanyLogo from "../CompanyLogo";

const CompaniesSection = () => (
  <section className="bg-gray-100 py-12 flex px-6 gap-16">
    <div className="px-10 text-center my-16 mx-auto mb-8 w-90">
      <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
    </div>
    <div className="flex justify-center gap-12">
      <CompanyLogo src="/images/sonangol.png" alt="Company 1" />
      <CompanyLogo src="/images/bai.jpg" alt="Company 2" />
      <CompanyLogo src="/images/logo.png" alt="Company 3" />
      <CompanyLogo src="/images/logo.png" alt="Company 4" />
      <CompanyLogo src="/images/logo.png" alt="Company 5" />
      <CompanyLogo src="/images/logo.png" alt="Company 5" />
    </div>
  </section>
);

export default CompaniesSection;
