function Overlay({ theme = "arcano" }) {

  const colors = {
    arcano: "rgba(10, 20, 40, 0.7)",
    templo: "rgba(60, 45, 10, 0.6)",
    selva: "rgba(10, 40, 20, 0.6)",
    infernal: "rgba(45, 10, 10, 0.55)",
  };

  return (

    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: colors[theme],
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

  );
}

export default Overlay;