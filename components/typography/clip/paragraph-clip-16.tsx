export default function ParagraphClip16({ text, isScaled }) {
  return (
    <p className="text-[16px] font-medium leading-[132%] -tracking-[.16px] max-w-sm bg-linear-5 !bg-clip-text text-transparent">{text}</p>
  )
}
