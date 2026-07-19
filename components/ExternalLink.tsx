import { ArrowUpRight } from "@/components/icons";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export function ExternalLink({ children, className, ...rest }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 ${className ?? ""}`}
      {...rest}
    >
      {children}
      <ArrowUpRight
        width={16}
        height={16}
        className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
