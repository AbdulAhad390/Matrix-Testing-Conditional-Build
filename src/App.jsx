export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Multi-Branch Deploy to GitHub Pages</h1>
      <p>
        This site was deployed from <b>{import.meta.env.VITE_BRANCH}</b> branch.
      </p>
    </div>
  );
}
