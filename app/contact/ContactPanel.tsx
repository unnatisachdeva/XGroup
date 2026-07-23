import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPanel() {
  return (
    <section className="relative z-20 -mt-20 px-6">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-72 w-[70%] rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* Address */}

          <div className="group border-b border-gray-200 p-10 transition-all duration-500 hover:-translate-y-1 md:border-b-0 md:border-r">

            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 transition-all duration-500 group-hover:bg-red-600">

              <MapPin className="h-7 w-7 text-red-600 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />

            </div>

            <p className="text-xs font-semibold uppercase tracking-[4px] text-gray-400">
              Visit Us
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
              Head Office
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              #208 17520 108th Ave. NW
              <br />
              Edmonton, AB T5S 1E8
            </p>

            <div className="mt-8 h-[2px] w-10 bg-red-600 transition-all duration-500 group-hover:w-24" />

          </div>

          {/* Phone */}

          <div className="group border-b border-gray-200 p-10 transition-all duration-500 hover:-translate-y-1 md:border-b-0 md:border-r">

            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 transition-all duration-500 group-hover:bg-red-600">

              <Phone className="h-7 w-7 text-red-600 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />

            </div>

            <p className="text-xs font-semibold uppercase tracking-[4px] text-gray-400">
              Call Us
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
              24/7 Dispatch
            </h3>

            <a
              href="tel:+15876931551"
              className="mt-5 block text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-red-600"
            >
              (587) 693-1551
            </a>

            <div className="mt-8 h-[2px] w-10 bg-red-600 transition-all duration-500 group-hover:w-24" />

          </div>

          {/* Email */}

          <div className="group p-10 transition-all duration-500 hover:-translate-y-1">

            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 transition-all duration-500 group-hover:bg-red-600">

              <Mail className="h-7 w-7 text-red-600 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />

            </div>

            <p className="text-xs font-semibold uppercase tracking-[4px] text-gray-400">
              Email Us
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
              General Enquiries
            </h3>

            <a
              href="mailto:info@thexgroup.ca"
              className="mt-5 block text-lg text-gray-700 transition-colors duration-300 hover:text-red-600"
            >
              info@thexgroup.ca
            </a>

            <div className="mt-8 h-[2px] w-10 bg-red-600 transition-all duration-500 group-hover:w-24" />

          </div>

        </div>

      </div>
    </section>
  );
}