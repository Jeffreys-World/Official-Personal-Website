import { ArrowUpRight } from "@/components/icons";
import { hoverLift } from "@/lib/hover";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export function ExternalLink({ children, className, ...rest }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 underline decoration-1 decoration-transparent underline-offset-4 ${hoverLift} hover:text-accent hover:decoration-accent ${className ?? ""}`}
      {...rest}
    >
      {children}
      <ArrowUpRight
        width={16}
        height={16}
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
