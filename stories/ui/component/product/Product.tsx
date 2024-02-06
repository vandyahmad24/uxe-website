import Link from "next/link";
import { TextLarge } from "@/ui/text/text-large/TextLarge";

type SchemaEdges = {
  edges: SchemaNode[];
};

type SchemaNode = {
  node: SchemaData;
};

type SchemaSourceUrl = {
  sourceUrl: string;
}

type SchemaFeature = {
  node: SchemaSourceUrl;
};

type SchemaData = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: SchemaFeature;
}

type SchemaSetting = {
  show_title: boolean
}

interface ProductProps {
  data: SchemaEdges;
  settings?: SchemaSetting;
  style?: any;
}

export const Product = ({ data, settings, ...props }: ProductProps) => {
  return (
    <div className="bg-white" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))_48px_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="flex flex-col gap-[48px]">
          {settings?.show_title && (
            <div className="flex flex-col items-center text-center">
              <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
                Products
              </p>
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">
                Discover Innovation in <br /> Smart Security Products
              </h2>
            </div>
          )}
          <div className="grid grid-cols-3 gap-[20px] max-xl:grid-cols-2 max-md:grid-cols-1">
            {data?.edges.map(({ node }, index) => (
              <div key={index} className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={node?.featuredImage?.node?.sourceUrl}
                      alt={node?.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <Link
                    href={"/product/" + node?.slug}
                    className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70"
                  >
                    {node?.title}
                  </Link>
                  <TextLarge
                    label={node?.excerpt
                      .replace("<p>", "")
                      .replace("</p>", "")}
                    cls="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]"
                  />
                </div>
              </div>
            ))}
          </div>
          {settings?.show_title && (
            <div className="flex justify-center">
              <Link
                href={"/product"}
                className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
              >
                See All Product
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
