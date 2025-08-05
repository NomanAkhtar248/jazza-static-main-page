"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { postContact } from "./actions";

const ContactPage = () => {
  const [message, formAction, isPending] = useActionState(postContact, null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Button variant="link" className="h-auto p-0 text-gray-600">
                Home
              </Button>
            </li>
            <li className="text-gray-400">/</li>
            <li>Contact</li>
          </ol>
        </nav>

        {/* Alert */}
        {/* {showAlert && (
          <Alert className="mb-8 border-green-200 bg-green-50">
            <div className="text-green-800">
              Thank you for your message! We will get back to you soon.
            </div>
          </Alert>
        )} */}

        {/* Contact Section */}
        <div className="mb-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-red-500">
                Do you have some questions?
              </h2>
              <p className="mb-6 text-gray-600">
                Office No. 301 Jalal Building Fry Al Noor Karoo Dubai.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-center space-x-3">
                  {/* <Mail className="h-5 w-5 text-red-500" /> */}
                  <span className="text-lg font-semibold text-red-500">
                    info@jazaa.ae
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <Phone className="h-5 w-5 text-blue-600" /> */}
                  <span className="font-medium text-blue-600">
                    +97144486644
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <MapPin className="h-5 w-5 text-gray-500" /> */}
                  <span className="text-gray-600">Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form action={formAction}>
              <div className="grid gap-4">
                {/* <div className="grid grid-cols-1 gap-4"> */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Input
                      name="Name"
                      required
                      placeholder="Name *"
                      className="bg-gray-200"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-mail *"
                      required
                      className="bg-gray-200"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      className="bg-gray-200"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject *"
                      required
                      className="bg-gray-200"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Message *"
                    rows={4}
                    className="resize-none bg-gray-200"
                  />
                </div>
                {/* </div> */}

                <Button
                  type="submit"
                  className="bg-black px-8 text-white hover:bg-gray-800"
                >
                  SEND MESSAGE
                </Button>
                {/* </div> */}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
