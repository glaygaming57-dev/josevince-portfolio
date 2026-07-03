export default function Footer() {
  return (
    <footer className="bg-[#081328] py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12">
        <span className="text-xl font-semibold tracking-[0.15em] text-white">
          JOSE VINCE CAMAGAY
        </span>

        <span className="text-sm text-slate-400 px-0 sm:px-12">
          © {new Date().getFullYear()} Licensed Civil Engineer · Construction VA · Estimator · QS Support
        </span>
      </div>
    </footer>
  );
}