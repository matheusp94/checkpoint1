import Link from "next/link";

export default function Header(){
    return(

        <header>
            <h1>Challenge Porto</h1>
            <img src="logo.png" alt="Logo" id="logo"></img>
            < nav>
                <ul>
                    <li><Link href="/index">Página inicial</Link></li>
                    <li><Link href="/ideia">Nossa Ideia</Link></li>
                    <li><Link href="/organograma">Organograma</Link></li>
                    <li><Link href="/equipe">Equipe</Link></li>
                    <li><Link href="/exemplo">Exemplo do projeto</Link></li>
                </ul>
            </nav>
        </header>

    )
}