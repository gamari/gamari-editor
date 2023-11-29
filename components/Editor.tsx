"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Textarea } from "./ui/textarea"
import { MarkdownPreviewer } from "./MarkdownPreviewer"

const FormSchema = z.object({
    content: z.string().min(1, {
        message: "内容を入力してください。"
    })
})

interface Props {
    className?: string;
}

export function Editor({ className }: Props) {
    const form = useForm<z.infer<typeof FormSchema>>({
        mode: "all",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            content: "",
        },
    })

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        toast({
            title: "保存しました。",
            // description: (
            //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            //     </pre>
            // ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 rounded-md border h-full">
                <div className="border-b p-5 flex items-center sm:justify-between flex-wrap sm:flex-row gap-2">
                    <div className="flex items-center flex-wrap gap-5">

                        <span className="border bg-zinc-100 p-2 rounded-md">
                            Markdown Editor
                        </span>
                    </div>

                    <Button type="submit">保存</Button>
                </div>

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }: any) => (
                        <FormItem>
                            <FormControl>
                                <div
                                    // TODO 高さをh-fullで調整したい
                                    className={cn(
                                        "w-full flex p-2 gap-2 divide-x divide-gray-300 h-[50vh]"
                                    )}
                                >
                                    <Textarea
                                        placeholder="内容..."
                                        {...field}
                                        className={cn(
                                            "shadow-none w-1/2 border-none text-lg font-medium leading-relaxed resize-none h-full"
                                        )}
                                    />

                                    <div className="w-1/2">
                                        <MarkdownPreviewer content={form.getValues().content} />
                                    </div>
                                </div>
                            </FormControl>

                            <div className="p-3">
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

            </form>
        </Form>
    )
}
