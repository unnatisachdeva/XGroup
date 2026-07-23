import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[520px] w-full">
      {/* Background Image */}
      <Image
        src="/contact.jpeg"
        alt="Contact Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">
          {/* <p className="uppercase tracking-[6px] text-sm text-gray-300 mb-4">
            THE X GROUP
          </p> */}

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          {/* <p className="mt-6 max-w-2xl text-lg text-gray-200 mx-auto">
            We'd love to hear from you. Whether you have questions,
            need transportation solutions, or want to discuss your
            next project, our team is ready to help.
          </p> */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-500"></div>
    </section>
  );
}