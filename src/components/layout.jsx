import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import Container from "./container";

function Layout({ children }) {
    return (
        <>
            <Container>
                <Header/>
                <Menu/>
                <main>{children}</main>
                <Footer/>
            </Container>
        </>
    )
}

export default Layout