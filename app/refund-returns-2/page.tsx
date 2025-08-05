"use client";
import React, { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { postRefund } from "./action";

const RefundReturns = () => {
  const [message, formAction, isPending] = useActionState(postRefund, null);

  return (
    <div className="px-4 py-10 lg:px-32">
      <div className="grid-col grid w-full md:grid-cols-1">
        <div className="mt-10">
          <h1 className="mb-2 text-3xl font-bold">Claims</h1>
          <p className="mb-8 text-xl font-semibold text-red-600">
            Fill The Form For Your Claim
          </p>
        </div>

        <div className="max-w-4xl">
          <form action={formAction} className="space-y-6">
            {/* Name and Email */}
            <div className="grid-cols grid gap-4 md:grid-cols-2">
              <Input
                name="Name"
                placeholder="Name *"
                required
                className="bg-gray-100"
              />
              <Input
                name="email"
                placeholder="E-mail *"
                type="email"
                required
                className="bg-gray-100"
              />
            </div>

            {/* Mobile and Order Number */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                name="phone"
                placeholder="Mobile Number *"
                required
                className="bg-gray-100"
              />
              <Input
                placeholder="Order Number *"
                required
                className="bg-gray-100"
              />
            </div>

            {/* Reason */}
            <Input
              name="reason for return"
              placeholder="Reason For Return *"
              required
              className="bg-gray-100"
            />

            {/* Details */}
            <Textarea
              name="detail for return"
              placeholder="Detail For Return *"
              rows={6}
              required
              className="bg-gray-100"
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RefundReturns;
