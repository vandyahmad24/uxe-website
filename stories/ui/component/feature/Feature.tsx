type SchemaData = {
  icon: string;
  title: string;
  description: string;
};

interface FeatureProps {
  data: SchemaData[];
}

export const Feature = ({ data, ...props }: FeatureProps) => {
  return (
    <div className="bg-white" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(100_/_1440)),_100px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="grid grid-cols-3 gap-[48px_32px] max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col justify-center p-[0_20px_0_14px] bg-[url('/image/featured-background.png')] bg-cover">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Features</p>
            <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">Your Gateway to Safer Tomorrow</h2>
          </div>
          {data.map(({icon, title, description}, index) => (
            <div key={index} className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
              <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]" dangerouslySetInnerHTML={{
                __html: icon.toString().replace(/\\/g, ''),
              }}>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">{title}</h3>
                <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">{description}</p>
              </div>
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
};
