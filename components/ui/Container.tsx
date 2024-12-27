export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`xl:max-w-[1360px] max-w-[85vw] mx-auto ${className || ""}`}
    >
      {children}
    </div>
  );
}
