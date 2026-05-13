import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f5f2] px-6 py-16 text-slate-900">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/40">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          404 — Страница не найдена
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
          Кажется, вы забрели не туда.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Запрошенный ресурс отсутствует. Вернитесь на главную страницу и продолжите работу.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
