"use client";

import { CustomButton } from "../Button/CustomButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  message: z.string(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export const ContactForm = () => {
  const [tosAccepted, setTosAccepted] = useState(false);

  const handleTosAcceptedChange = () => {
    setTosAccepted(!tosAccepted);
  };

  type FormData = z.infer<typeof schema>;

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
  }

  return (
    <section className="flex flex-col gap-[40px] py-[40px] md:gap-[60px] md:py-[60px] lg:gap-[80px] lg:py-[80px]">
      <div className="flex flex-col items-center gap-[10px] md:items-start">
        <h2 className="font-azeret-mono text-center text-[32px] font-medium text-white md:text-[40px] lg:text-[48px]">
          Let&apos;s work together
        </h2>
        <p className="font-inter text-medium-gray text-[16px] leading-[24px] md:text-[18px]">
          Have a question or ready to transform your business?
        </p>
      </div>

      <div className="border-light-blue max-w-[598px] border-3 p-[40px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[44px] md:items-start"
          >
            <div className="flex w-full flex-col gap-[24px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="sr-only">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        className="font-inter text-light-gray placeholder:text-light-gray h-[42px] border-0 bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px] text-[14px] font-medium"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex w-full flex-col gap-[24px] md:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          className="font-inter text-light-gray placeholder:text-light-gray h-[42px] border-0 bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px] text-[14px] font-medium"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="sr-only">Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Phone"
                          className="font-inter text-light-gray placeholder:text-light-gray h-[42px] border-0 bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px] text-[14px] font-medium"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="sr-only">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="font-inter text-light-gray placeholder:text-light-gray min-h-[120px] border-0 bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px] text-[14px] font-medium"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex w-full flex-col items-center gap-[20px] md:flex-row md:justify-between">
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-[14px] space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={tosAccepted}
                        onCheckedChange={handleTosAcceptedChange}
                        className="border-gray data-[state=checked]:bg-light-blue mt-0.5 size-[16px] rounded-[2px] data-[state=checked]:text-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-inter text-gray cursor-pointer text-[10px] leading-[14px]">
                        We value your privacy and are committed to protecting
                        your data in accordance with GDPR regulations.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <CustomButton
                type="submit"
                variant="Primary"
                disabled={!tosAccepted}
                className="disabled:cursor-not-allowed disabled:opacity-50"
              >
                Get started
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};
