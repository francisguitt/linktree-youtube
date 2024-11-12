import Avatar from "./Avatar";

export default function Header() {
    return (
        <header className=" flex justify-center items-center max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center p-8">
              <Avatar/>
            </div>
        </header>
    )
}