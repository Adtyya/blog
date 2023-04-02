import { Small } from '../atom/text';

export default function Breadcrumb({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex items-center space-x-3">{children}</div>;
}

Breadcrumb.Category = function Category({ children }: { children: string }) {
  return <Small className="text-white/60">{children}</Small>;
};
Breadcrumb.Seperator = function Seperator() {
  return <div className="h-1 w-1 rounded-full bg-white/60"></div>;
};
Breadcrumb.Date = function Date({ children }: { children: string }) {
  return <Small className="text-white/60">{children}</Small>;
};
