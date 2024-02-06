import Link from "next/link";
import { TextLarge } from "@/ui/text/text-large/TextLarge";

type SchemaEdges = {
  edges: SchemaNode[];
};

type SchemaCategoryEdges = {
  edges: SchemaCategoryNode[];
};
type SchemaCategoryNode = {
  node: SchemaCategoryData;
};
type SchemaCategoryData = {
  name: string;
};

type SchemaNode = {
  node: SchemaData;
};

type SchemaSourceUrl = {
  sourceUrl: string;
};

type SchemaFeature = {
  node: SchemaSourceUrl;
};

type SchemaData = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: SchemaFeature;
  categories: SchemaCategoryEdges;
};

interface PostProps {
  data: SchemaEdges;
  style?: any;
}

export const Post = ({ data, ...props }: PostProps) => {
  return (
    <div className="bg-white" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
              News & Blog
            </p>
            <h2 className="text-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-[#19191B] font-medium leading-[112%] -tracking-[.24px] mt-[10px] max-w-xl">
              Your Daily Dose of Tech News
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[32px] max-xl:grid-cols-2 max-md:grid-cols-1">
            {data.edges.map(({node}, index) => (
              <div
                key={index}
                className="rounded-[12px] border border-[#0000000F] overflow-hidden"
              >
                <img
                  src={
                    node.featuredImage?.node.sourceUrl
                      ? node.featuredImage?.node.sourceUrl
                      : "https://fakeimg.pl/770x450"
                  }
                  alt={node.title}
                  className="max-h-[max(140px,_min(calc(100vw_*_(240_/_1440)),_240px))] w-full object-cover"
                />
                <div className="p-[24px] flex flex-col gap-[32px]">
                  <div className="flex flex-col items-start justify-start gap-[12px]">
                    <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">
                      {node.categories.edges[0].node.name}
                    </span>
                    <Link
                      href={"/post/" + node.slug}
                      className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70 line-clamp-2"
                    >
                      {node.title}
                    </Link>
                    <TextLarge
                      label={node?.excerpt
                        .replace("<p>", "")
                        .replace("</p>", "")}
                      cls="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50 line-clamp-2"
                    />
                  </div>
                  <Link
                    href={"/post/" + node.slug}
                    className="flex items-center gap-[8px] hover:opacity-70"
                  >
                    <span className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">
                      Read post
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666"
                        stroke="#19191B"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
