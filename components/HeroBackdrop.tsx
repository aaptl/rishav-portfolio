/** Layered atmosphere for dark hero sections: 40px grid, soft halo, vignette, bottom shadow. */
export default function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="absolute inset-0 depth-halo" />
      <div className="absolute inset-0 depth-vignette" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 depth-bottom-shadow" />
    </div>
  );
}
