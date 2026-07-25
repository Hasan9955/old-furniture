import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacts({ dict, lang = "en" }: { dict: any; lang?: string }) {
  const contactData = dict.Contact;

  if (!contactData) return null;

  return (
    <section id="contact" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            {contactData.titlePart1}
            <span className="text-emerald-600"> {contactData.titlePart2}</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{contactData.locationTitle}</h3>
                  <p className="mt-2 text-slate-600">{contactData.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{contactData.callUsTitle}</h3>
                  <p className="mt-2 text-slate-600 font-semibold" dir="ltr">{contactData.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{contactData.emailTitle}</h3>
                  <p className="mt-2 text-slate-600">{contactData.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{contactData.workingHoursTitle}</h3>
                  <p className="mt-2 text-slate-600">{contactData.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 lg:h-auto min-h-[350px] sm:min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=26°25'34.9%22N+50°04'01.5%22E&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}