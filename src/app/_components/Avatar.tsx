import Image from "next/image";

export default function Avatar() {
    return (
        <div>
            <Image
                src={"/guitt.png"}
                width={150}
                height={100}
                alt="avatr" className="rounded-full" />

            <div className="text-center mt-4">
                <h2 className="text-zinc-100 font-mono text-md text-center">Guitt Web Code </h2>
            </div>
        </div>
    )
}