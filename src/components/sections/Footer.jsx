import logo from "../../assets/images/footer/logo.svg";
import FooterColumn from "../common/FooterColumn";
import { footerData } from "../../data/footerData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[1920px] mx-auto bg-orange-50">
      <div className="container-3xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-30">
          <div className="pt-8 pb-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Logo" className="w-14 h-13" />
              <a
                href="#"
                className="text-stone-900 text-2xl font-bold leading-8"
              >
                Book Store
              </a>
            </div>
            <p className="w-full lg:max-w-80 text-zinc-600 text-lg font-normal leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a
              type specimen book.
            </p>
          </div>
          <nav aria-label="Footer Navigation">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 pt-2 lg:pt-11 pb-16">
              <FooterColumn
                title={footerData.company.title}
                links={footerData.company.links}
              />
              <FooterColumn
                title={footerData.courses.title}
                links={footerData.courses.links}
              />
              <FooterColumn
                title={footerData.support.title}
                links={footerData.support.links}
              />
              <FooterColumn
                title={footerData.contact.title}
                links={footerData.contact.links}
                className="max-w-58 wrap-break-word"
              />
            </div>
          </nav>
        </div>
      </div>
      <div className="border-t-2 border-zinc-400"></div>
      <div className="text-center pt-5 pb-8 text-zinc-600 text-lg font-normal">
        <p>&copy; {currentYear} BookStore All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
