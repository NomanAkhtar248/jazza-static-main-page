"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { postOrder } from "./actions";
// import { useState } from "react";

const OrderTracking = () => {
  const [message, formAction, isPending] = useActionState(postOrder, null);
  return (
    <div className="px-4">
      <div className="px-10 py-10">
        <h1 className="text-4xl font-bold">Track Order</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md justify-center space-y-6">
          {/* Description */}
          <p className="font-semibold text-gray-700">
            To track your order please enter your Order ID in the box below and
            press the Track button. This was given to you on your receipt and in
            the confirmation email you should have received.
          </p>

          {/* Form */}
          <form action={formAction} className="space-y-4">
            {/* Order ID */}
            <div>
              <label
                htmlFor="orderId"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Order ID
              </label>
              <Input
                id="orderId"
                name="orderId"
                placeholder="Found in your order confirmation email."
                required
              />
            </div>

            {/* Billing Email */}
            <div>
              <label
                htmlFor="billingEmail"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Billing email
              </label>
              <Input
                id="billingEmail"
                name="billingEmail"
                type="email"
                placeholder="Email you used during checkout"
                required
              />
            </div>

            {/* Button */}
            <div className="pt-2 text-center">
              <Button
                type="submit"
                className="bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
              >
                TRACK
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
