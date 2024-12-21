import { IoHomeOutline } from "react-icons/io5";
import Container from "../ui/Container";
import { MdOutlineAttachEmail, MdOutlineLocalPhone } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import Link from "next/link";

export const ContactForm = () => {
  return (
    <section className="py-24  bg-tertiary overflow-y-hidden">
      <Container className="flex px-24 bg-transparent">
        <div className="flex-1 flex flex-col gap-6 p-24">
          <h2 className="text-white text-4xl bg-transparent">Contact Info</h2>
          <div className="w-full h-[1px] bg-secondary"></div>
          <p className="text-white text-lg bg-transparent">
            Amet turpis urna malesuada sed augue ut. Orci neque elit massa
            semper turpis vel. Enim tortor at hac quis odio. Quam nulla gravida
            sit gravida vitae fermentum parturient.
          </p>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-row items-center gap-4">
              <div>
                <IoHomeOutline className="text-white size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="text-2xl font-semibold">Office Address</h2>
                <p className="text-sm">244 Royal Ln. Mesa, New Jersey</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <MdOutlineAttachEmail className="text-white size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="text-2xl font-semibold">Emsil</h2>
                <p className="text-sm">justuprodemo@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <MdOutlineLocalPhone className="text-white size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="text-2xl font-semibold">Phone</h2>
                <p className="text-sm">(684) 555-0102</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div>
                <TbClockHour4 className="text-white size-12" />
              </div>
              <div className="text-white flex flex-col items-start gap-2">
                <h2 className="text-2xl font-semibold">Office Hour</h2>
                <p className="text-sm">Mon-Sun: 10am – 7pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 p-24 bg-secondary">
          <h2 className="text-white text-4xl bg-transparent">Contact Us</h2>
          <div className="w-full h-[1px] bg-primary"></div>
          <input
            type="text"
            placeholder="Your Name*"
            required
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <input
            type="email"
            placeholder="Your Email*"
            required
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <input
            type="tel"
            placeholder="Phone*"
            required
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <select className="border border-white bg-transparent focus:outline-none focus:border-white p-3 text-white">
            <option value="Subject*">Subject*</option>
          </select>
          <textarea
            rows={5}
            placeholder="Case Description"
            className="border border-white bg-transparent focus:outline-none focus:border-white p-3 placeholder:text-white text-white"
          />
          <div className="bg-transparent flex justify-center mt-auto">
            <Link
              href="/"
              className="px-6 py-2 border border-white bg-transparent text-white"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </Container>{" "}
    </section>
  );
};
