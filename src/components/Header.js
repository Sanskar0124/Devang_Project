import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>GRIS Games</h1>
      <div className="search">
        <input typeName="text" placeholder="Search..." />
      </div>
    </header>
  );
}
