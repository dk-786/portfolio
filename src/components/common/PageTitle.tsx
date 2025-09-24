import React from "react";

type Crumb = {
  label: string;
  href?: string;
  active?: boolean;
};

type PageTitleProps = {
  title: string;
  crumbs: Crumb[];
  className?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, crumbs, className = "" }) => {
  return (
    <div className={`text-center py-12  text-white ${className}`}>
      <div className="flex items-center justify-center gap-4 text-xl">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span
              className={`${crumb.active ? "text-[#ffbd4a]" : "text-white hover:text-[#ffbd4a]"} cursor-pointer`}
            >
              {crumb.label}
            </span>
            {index < crumbs.length - 1 && (
              <span className="h-px w-10 bg-gray-500"></span>
            )}
          </React.Fragment>
        ))}
      </div>

      <h1 className="mt-6 text-6xl  leading- tracking-wide">{title}</h1>
    </div>
  );
};

export default PageTitle;



