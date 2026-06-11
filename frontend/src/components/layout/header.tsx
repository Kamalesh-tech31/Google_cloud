export default function Header() {
  return (
    <header className="h-20 border-b border-white/5 bg-[#050816] px-8 flex items-center justify-between">
      <div>
        <h2 className="text-white text-lg font-semibold">
          Welcome Back
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
          Gemini Active
        </div>

        <div className="h-10 w-10 rounded-full bg-[#FACC15]" />
      </div>
    </header>
  );
}