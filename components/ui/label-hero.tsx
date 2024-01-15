import IconShield from '../icon/shield'

export default function LabelHero({text}) {
  return (
    <div className="p-[10px] rounded-full backdrop-blur-[6px] bg-linear-2">
      <div className="flex items-center gap-[6px]">
        <div className="bg-[#FFFFFFBF] p-[5px] rounded-full">
          <IconShield width={10} height={10} />
        </div>
        <p className="text-[14px] font-medium leading-[132%] -tracking-[.14px] !bg-clip-text text-transparent bg-linear-1">{text}</p>
      </div>
    </div>
  )
}
