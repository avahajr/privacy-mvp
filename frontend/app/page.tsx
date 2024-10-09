import {Link} from "@nextui-org/link";
import {Code} from "@nextui-org/code";
import {button as buttonStyles} from "@nextui-org/theme";
import {Select, SelectItem} from "@nextui-org/select";
import PolicyDropdown from "@/components/dropdown";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import config from "tailwindcss/defaultConfig";

const policies =
    [
        {key: 1, label: "apple"},
        {key: 2, label: 'google'},
        {key: 3, label: 'reddit'},
        {key: 4, label: 'proton'},
        {key: 5, label: 'openai'}
    ]
export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title()}>Understand Privacy Policies with&nbsp;</span>
                <span className={title({color: "violet"})}>ease</span>
                <span className={title()}>.&nbsp;</span>

                <br/>
                <div className={subtitle({class: "mt-4"})}>
                    Beautiful, fast and modern React UI library.
                </div>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                    href={siteConfig.links.docs}
                >
                    Documentation
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({variant: "bordered", radius: "full"})}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20}/>
                    GitHub
                </Link>
            </div>
            <PolicyDropdown/>

        </section>
    );
}
