"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";
import { useToast } from "@/components/ui/use-toast";
import posts from "@/data/posts";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  body: z.string().min(1, {
    message: "Body is required",
  }),
  author: z.string().min(1, {
    message: "Author is required",
  }),
  date: z.string().min(1, {
    message: "Date is required",
  }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PostEditPageProps) => {
  const post = posts.find((post) => post.id === params.id);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Post's been updated successfully",
      description: `Updated by ${post?.author} on ${post?.date}`,
    });
  };

  return (
    <>
      <BackButton text="Back to Posts" link="/posts" />
      <h3 className="mb-4 text-2xl">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter body"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full dark:bg-slate-800 dark:text-slate-50">
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};
export default page;
