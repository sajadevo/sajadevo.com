export default function BitsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={
        {
          "--color-white": "#fff",
          "--color-black": "#000",
        } as React.CSSProperties
      }
      className="size-full"
    >
      {children}
    </div>
  );
}
