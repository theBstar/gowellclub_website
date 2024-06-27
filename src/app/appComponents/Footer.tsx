export default function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
            <div className="py-2 px-8 flex items-center justify-end gap-1">
                <span className="text-gray-400">
                    &copy; {new Date().getFullYear()} gowell.club,
                </span>
                <a href="https://x.com/thebstar13" className="font-bold hover:underline">Made with ❤️ by Bikram</a>
            </div>
        </footer>
    )
}