import { Small } from '../atom/text';

export default function Author({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-start space-x-5">{children}</div>
  );
}

Author.Image = function AImage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full">
      {children}
    </div>
  );
};

Author.Biodata = function Biodata({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};

Author.Name = function NameAuthor({ children }: { children: string }) {
  return <Small>{children}</Small>;
};

Author.Profesion = function Profesion({ children }: { children: string }) {
  return (
    <Small size="small" className="text-white/60">
      {children}
    </Small>
  );
};
