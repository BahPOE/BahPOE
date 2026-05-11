function MainContainer({ children }) {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        padding: "40px",
        borderRadius: "16px",
        border: "1px solid rgba(77,166,255,0.3)",
        backdropFilter: "blur(6px)",
        maxWidth: "900px",
        width: "90%",
      }}
    >
      {children}
    </div>
  );
}

export default MainContainer;