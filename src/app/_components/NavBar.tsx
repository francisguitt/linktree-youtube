import CustomLink from "./CustomLink";
import {
    IconBrandYoutube,
    IconBrandX,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandTiktok
} from "@tabler/icons-react";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex justify-center items-center">
                <div className=" flex p-5 gap-5">
                    <CustomLink href="https://youtube.com" icon={<IconBrandYoutube size={42} color="#ffffff" />} />
                    <CustomLink href="https://x.com" icon={<IconBrandX size={42} color="#ffffff" />} />
                    <CustomLink href="https://github.com" icon={<IconBrandGithub size={42} color="#ffffff" />} />
                    <CustomLink href="https://instagram.com" icon={<IconBrandInstagram size={42} color="#ffffff" />} />
                    <CustomLink href="https://ticktock.com" icon={<IconBrandTiktok size={42} color="#ffffff" />} />
                </div>
            </ul>

            <ul>
                <div className="flex justify-center flex-col gap-5 mx-auto items-center p-5">
                    <CustomLink href="https://youtube.com">Meus Cusros</CustomLink>
                    <CustomLink href="">Meu Canal do YouTube</CustomLink>
                    <CustomLink href="">Meus Hobs</CustomLink>
                    <CustomLink href="">Link de Produtos</CustomLink>
                    <CustomLink href="">Meu Site</CustomLink>
                </div>
            </ul>
        </nav>
    )
}