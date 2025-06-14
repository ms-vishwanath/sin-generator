"use client";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { v4 as uuid } from "uuid";
import { toast } from "sonner";
const formSchema = z.object({
  screenName: z.string().min(1).max(10),
});
const MacOsControls = () => {
  return (
    <div className="flex gap-2">
      <button
        className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        aria-label="Close"
      />
      <button
        className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
        aria-label="Minimize"
      />
      <button
        className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        aria-label="Expand"
      />
    </div>
  );
};
export default function SINGenerator() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      screenName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }
  const [Sin, setSin] = useState<number>();
  useEffect(() => {
    const SIN = Math.floor(1000000000 + Math.random() * 9000000000);
    setSin(SIN);
  }, [form.watch("screenName")]);

  return (
    <div className="space-y-4">
      <div>
        <h1></h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="screenName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Screen Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the screen name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div>
        {form.watch("screenName") ? (
          <div
            className="cursor-pointer font-bold"
            onClick={async () => {
              try {
                const text = `${form.watch("screenName")} - ${Sin}`;
                await navigator.clipboard.writeText(text);
                toast.success("Copied to clipboard");
              } catch (err) {
                toast.error("Failed to copy ");
              }
            }}
          >
            <span>
              {form.watch("screenName")} - {Sin}
            </span>
          </div>
        ) : (
          <div className="py-[12px] "></div>
        )}
        <div className="h-[40dvh] border p-2"></div>
      </div>
    </div>
  );
}
