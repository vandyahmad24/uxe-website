import { Footer } from "../footer/Footer";
import React, { ReactNode } from 'react';

import dt from './layout-data.json'
import { Navigation } from "../navigation/Navigation";
import { Meta } from "../meta/Meta";

type SchemaData = {
  menu?: any;
  footer?: any;
}

interface LayoutProps {
  data?: SchemaData;
  children?: ReactNode;
}

export const Layout = ({ data, children }: LayoutProps) => {
  const menu = data?.menu || dt.menu;
  const footer = { ...dt.footer, ...data?.footer };
  
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation menu={menu} />
        {children}
      </div>
      <Footer data={footer} />
    </>
  );
};
