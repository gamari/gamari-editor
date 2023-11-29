"use client";

import React, { FunctionComponent } from 'react'

interface Props {
    content: string;
}

export const MarkdownPreviewer: FunctionComponent<Props> = ({
    content
}) => {
  return (
    <div>{content}</div>
  )
}
