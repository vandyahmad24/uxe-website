import IconShield from '../icon/shield'

export default function Rating({rating}) {
  const ratingElements = [];
  
  for (let i = 0; i < rating; i++) {
    ratingElements.push(
      <div
        className="bg-[#FA550F29] p-[max(2px,_min(calc(100vw_*_(4_/_1440)),_4px))] rounded-[max(2px,_min(calc(100vw_*_(4_/_1440)),_4px))] h-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] w-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] flex items-center justify-center">
        <svg className="h-[max(10px,_min(calc(100vw_*_(16_/_1440)),_16px))]" xmlns="http://www.w3.org/2000/svg"
          width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.99992 11.5134L12.1199 14L11.0266 9.31337L14.6666 6.16004L9.87325 5.75337L7.99992 1.33337L6.12659 5.75337L1.33325 6.16004L4.97325 9.31337L3.87992 14L7.99992 11.5134Z"
            fill="#FA550F" />
        </svg>
      </div>
    )
  }

  return (
    <div className="flex gap-[5px]">
      {ratingElements}
    </div>
  )
}
