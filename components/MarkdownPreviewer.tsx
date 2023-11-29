"use client";

import { cn } from '@/lib/utils';
import React, { FunctionComponent } from 'react'
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.min.css";


interface Props {
  content: string;
  className?: string;
}

export const MarkdownPreviewer: FunctionComponent<Props> = ({
  content,
  className = ""
}) => {
  return (
    <Markdown
      className={cn("space-y-3", className)}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className='text-3xl font-bold' />
        },
        h2: ({ node, ...props }) => {
          return <h2 {...props} className='text-2xl font-semibold' />
        },
        h3: ({ node, ...props }) => {
          return <h3 {...props} className='text-xl font-semibold' />
        },
        ol: ({ node, ...props }) => (
          <ol {...props} className="list-decimal list-inside ml-4" />
        ),
        ul: ({ node, ...props }) => (
          <ul {...props} className="list-disc list-inside ml-4" />
        ),
        li: ({ node, ...props }) => (
          <li {...props} className="ml-4 list-item" />
        ),

        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          const id = (Math.floor(Math.random() * 100) + 1).toString();

          console.log(node)

          if (match?.length) {
            return <div className=" bg-graident-dark border-[0.5px] rounded-md border-zinc-500">
              <div className="flex items-center justify-between px-5 py-2 border-b-[0.5px] border-zinc-500">
                <div className="flex items-center gap-2">
                  コード
                  <p className="text-sm text-gray-400">
                    {/* TODO コードを形式を表示する */}
                    {/* {node?.properties?.className?.[1]} */}
                  </p>
                </div>
                {/* <CopyButton id={id} /> */}
              </div>

              <div className="overflow-x-auto w-full">
                <div className="p-5" id={id}>
                  {children}
                </div>
              </div>
            </div>
          } else {
            return <code
              className="text-lg break-words px-1 rounded-sm"
              {...props}
            >
              {children}
            </code>
          }
        }
      }}
    >
      {content}
    </Markdown>
  )
}
