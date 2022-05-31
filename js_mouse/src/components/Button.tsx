interface ButtonProps {
  selected?: boolean;
  name: string;
  onClick: () => void;
}

function Button({ selected, name, onClick }: ButtonProps) {
  return (
    <div
      style={{
        //cursor: "pointer",
        width: "100px",
        height: "100px",
        boxShadow: `0 0 0 ${selected ? 6 : 1}px black inset`,
        padding: "16px",
        boxSizing: "border-box",
        border: `black solid ${selected ? 6 : 1}px`,
      }}
      onClick={onClick}
    >
      <img src={`/images/${name}.png`} width="100%" height="100%" alt="" />
    </div>
  );
}

export default Button;
