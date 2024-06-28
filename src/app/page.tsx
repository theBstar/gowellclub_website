import Link from "next/link";
import JoinButton from "./appComponents/JoinButton";

export default function Index() {
  return (
    <section className="bg-secondary min-h-screen flex flex-col gap-4 md:px-4 md:pt-4 lg:px-8 lg:pt-8 pt-4">
      <main className="rounded-tl-4xl rounded-br-4xl overflow-hidden flex-grow bg-white">
        <nav
          className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <Link href="/" className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" >
              <img
                className="me-2"
                src="/assets/logo.png"
                style={{ height: 60 }}
                alt="Gowell.club"
                loading="lazy" />
            </Link>
          </div>
        </nav>

        <div className="w-full py-8 px-16 flex flex-col gap-4">
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-700">
            Wellness for Everyone
          </h1>
          <div className="flex gap-4 justify-start">
            <div className="flex flex-col gap-8 w-6/12">
              <div className="flex flex-col gap-4">
                <p className="md:text-lg text-neutral-600 dark:text-neutral-300">
                  Have your own personalised AI wellness coach. Get daily workout routines, meal plans, and mental health tips.
                </p>
                <p className="md:text-lg text-neutral-600 dark:text-neutral-300">
                  Want to lose weight, gain muscle or just want to talk to someone about your carvings? We got you covered.
                </p>
              </div>
              <JoinButton />
            </div>
            <div>
              <img
                src="/assets/fit_girl.svg"
                alt="Hero"
                className="w-96 h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>


      </main>

      <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 max-w-fit rounded-tl-4xl sticky bottom-0 left-[100%]">
        <div className="py-1 px-8 flex items-center justify-end gap-1">
          <span className="text-gray-400 text-sm">
            &copy;{new Date().getFullYear()}&nbsp;
          </span>
          <a href="https://x.com/thebstar13" target="_blank" className="font-bold hover:underline text-secondary text-sm">Made with ❤️ by @thebstar13</a>
        </div>
      </footer>
    </section>
  );
}
