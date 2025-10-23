"use client";
export default function Carousel() {
  return (
    <>
      <main className="carousel w-full rounded-box overflow-hidden">
        <div id="item1" className="carousel-item w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full" />
        </div>
      </main>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
      </div>
    </>
  );
}
