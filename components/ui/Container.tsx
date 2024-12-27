export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`lg:max-w-[1360px] max-w-[95vw] mx-auto ${className || ""}`}
    >
      {children}
    </div>
  );
}
