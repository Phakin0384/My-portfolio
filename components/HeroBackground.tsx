export function HeroBackground() {
  return (
    <div className="hero-aurora" aria-hidden>
      <span
        style={{
          width: "46vw",
          height: "46vw",
          left: "52%",
          top: "-18%",
          background: "radial-gradient(circle, #2a4bce, transparent 65%)",
          animation: "drift-a 16s ease-in-out infinite",
        }}
      />
      <span
        style={{
          width: "40vw",
          height: "40vw",
          left: "-12%",
          top: "0%",
          background: "radial-gradient(circle, #0f7d78, transparent 65%)",
          animation: "drift-b 20s ease-in-out infinite",
        }}
      />
      <span
        style={{
          width: "34vw",
          height: "34vw",
          left: "22%",
          top: "28%",
          background: "radial-gradient(circle, #3a2f8f, transparent 65%)",
          animation: "drift-c 24s ease-in-out infinite",
        }}
      />
    </div>
  );
}
