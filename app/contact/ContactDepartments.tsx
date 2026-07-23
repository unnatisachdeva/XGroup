import { ArrowRight } from "lucide-react";

const departments = [
  {
    title: "General Enquiries",
    description: "Questions about our transportation and logistics services.",
    email: "info@thexgroup.ca",
  },
  {
    title: "Dispatch",
    description: "24/7 shipment coordination and operational support.",
    email: "dispatch@thexgroup.ca",
  },
  {
    title: "Safety & Compliance",
    description: "Questions about safety protocols and compliance requirements.",
    email: "compliance@thexgroup.ca",
  },
];

export default function ContactDepartments() {
  return (
    <section className="bg-gray-50 py-28">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-red-600">
            Departments
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Contact by Department
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Reach out directly to the team best suited to assist you.
          </p>

        </div>

        <div className="mt-20 divide-y divide-gray-200">

          {departments.map((department) => (

            <a
              key={department.email}
              href={`mailto:${department.email}`}
              className="group flex items-center justify-between py-10 transition-all duration-300 hover:pl-4"
            >

              <div>

                <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                  {department.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {department.description}
                </p>

                <p className="mt-5 font-medium text-red-600">
                  {department.email}
                </p>

              </div>

              <ArrowRight className="h-7 w-7 text-gray-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-600" />

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}