import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-10 px-8 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/naifaico.svg"
          alt="NaiFa logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Nothing Here=)
          </h1>
        </div>
      </main>
    </div>
  );
}
