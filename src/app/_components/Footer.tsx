export default function Footer() {
    return (
        <footer>
            <div className="flex justify-center items-center p-3 max-w-80 mx-auto rounded-2xl ">
                <span className="text-zinc-100 text-md text-center font-mono">
                    guitt web code &copy; {new Date().getFullYear()} todos os direitos reservados.
                </span>
            </div>
        </footer>
    )
}