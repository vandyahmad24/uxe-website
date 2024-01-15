export default function TitleClip64({ text, isScaled }) {
  return (
    <h2 className="text-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] font-medium leading-[120%] -tracking-[1.28px] bg-linear-4 !bg-clip-text text-transparent">{text}</h2>
  )
}
