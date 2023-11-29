import { Editor } from '@/components/Editor'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function Home() {
  return (
   <main className='flex flex-col gap-4 items-center justify-center h-screen'>
    <div>
      <h4>説明</h4>
      <p>左側が入力欄で、右側がプレビューとして機能しています。</p>
    </div>

    <div className='w-full max-w-5xl h-[70vh]'>
      <Editor />
    </div>
   </main>
  )
}
