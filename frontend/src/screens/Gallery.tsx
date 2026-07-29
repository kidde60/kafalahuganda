import { galleryItems } from "../data";

export default function Gallery() {
  return (
    <div>
      <div className="bg-[#1a3a2a] py-14 px-8 text-center">
        <h1 className="font-serif text-white text-[2.2rem] mb-2">
          Media Gallery
        </h1>
        <p className="text-white/60 text-[.95rem]">
          Images and videos from our campaigns in the field.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 p-8 max-w-[1100px] mx-auto">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden border border-[#e5e0d8] bg-white cursor-pointer transition-all hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)]"
          >
            <div
              className="h-[200px] flex items-center justify-center text-[3.5rem]"
              style={{ background: item.gradient }}
            >
              {item.icon}
            </div>
            <div className="py-[14px] px-4">
              <div className="text-[13.5px] font-medium mb-1 text-[#1a3a2a]">
                {item.title}
              </div>
              <div className="text-[12px] text-[#6b7280]">
                {item.campaign} · {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-[#1a3a2a] text-white/55 text-center py-8 text-[13px] mt-8">
        © 2025 Ummah Cares Charity Platform
      </footer>
    </div>
  );
}
