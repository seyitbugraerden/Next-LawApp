import { IoHomeOutline } from "react-icons/io5";
import Container from "../ui/Container";
import { MdOutlineAttachEmail, MdOutlineLocalPhone } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import Link from "next/link";

export const ContactForm = () => {
  return (
    <section className="mt-12 lg:py-24 bg-tertiary overflow-y-hidden">
      <Container className="flex flex-col lg:flex-row lg:px-24 bg-transparent">
        <div className="flex-1 flex flex-col gap-6 p-4 pb-12 lg:p-24">
          <h2 className="text-white text-xl lg:text-4xl bg-transparent">
            İletişim Adresi
          </h2>
          <div className="w-full h-[1px] bg-secondary"></div>
          <p className="text-white text-sm lg:text-lg bg-transparent">
            Hukuki ihtiyaçlarınız için her zaman yanınızdayız.
          </p>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-row items-center gap-4">
              <div>
                <IoHomeOutline className="text-white size-8 lg:size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="font-semibold text-sm lg:text-2xl">
                  Adres
                </h2>
                <p className="text-xs lg:text-sm">
                  244 Royal Ln. Mesa, New Jersey
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <MdOutlineAttachEmail className="text-white size-8 lg:size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="font-semibold text-sm lg:text-2xl">E-Posta</h2>
                <p className="text-xs lg:text-sm">justuprodemo@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <MdOutlineLocalPhone className="text-white size-8 lg:size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="text-sm lg:text-2xl font-semibold">Telefon</h2>
                <p className="text-xs lg:text-sm">(684) 555-0102</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <TbClockHour4 className="text-white size-8 lg:size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="text-sm lg:text-2xl font-semibold">
                  Çalışma Saatleri
                </h2>
                <p className="text-xs lg:text-sm">Mon-Sun: 10am – 7pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 p-4 lg:p-24 bg-secondary shadow-2xl shadow-black/70">
          <h2 className="text-white text-xl lg:text-4xl bg-transparent">
            İletişim Formu
          </h2>
          <div className="w-full h-[1px] bg-primary"></div>
          <input
            type="text"
            placeholder="Adınız"
            required
            className="border border-white/30 bg-transparent text-xs lg:text-sm focus:outline-none focus:border-white/30 p-3 placeholder:text-white/30 text-white"
          />
          <input
            type="email"
            placeholder="E-Posta Adresiniz"
            required
            className="border border-white/30 bg-transparent text-xs lg:text-sm focus:outline-none focus:border-white/30 p-3 placeholder:text-white/30 text-white"
          />
          <input
            type="tel"
            placeholder="Telefon Numaranız"
            required
            className="border border-white/30 bg-transparent text-xs lg:text-sm focus:outline-none focus:border-white/30 p-3 placeholder:text-white/30 text-white"
          />
          <select className="border border-white/30 bg-transparent text-xs lg:text-sm focus:outline-none focus:border-white/30 p-3 text-white/30">
            <option className="bg-primary" value="Konu*">
              Konu
            </option>
            <option
              className="bg-primary"
              value="Şirketler Hukuku Danışmanlığı"
            >
              Şirketler Hukuku Danışmanlığı
            </option>
            <option
              className="bg-primary"
              value="Sözleşme Hukuku Danışmanlığı*"
            >
              Sözleşme Hukuku Danışmanlığı
            </option>
            <option
              className="bg-primary"
              value="Fikri ve Sınai Haklar Hukuku*"
            >
              Fikri ve Sınai Haklar Hukuku
            </option>
            <option
              className="bg-primary"
              value="Gayrimenkul Hukuku Danışmanlığı"
            >
              Gayrimenkul Hukuku Danışmanlığı
            </option>
            <option className="bg-primary" value="İş ve Sosyal Güvenlik Hukuku">
              İş ve Sosyal Güvenlik Hukuku
            </option>
          </select>
          <textarea
            rows={5}
            placeholder="Açıklama"
            className="border border-white/30 bg-transparent text-xs lg:text-sm focus:outline-none focus:border-white/30 p-3 placeholder:text-white/30 text-white"
          />
          <div className="bg-transparent flex justify-center mt-auto">
            <Link
              href="/"
              className="px-6 py-2 border border-white/30 bg-transparent text-white"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
