export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div>
            <nav>Navegación de las categorías</nav>
            {children}
        </div>
    )
}