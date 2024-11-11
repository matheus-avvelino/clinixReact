/* eslint-disable react/prop-types */
import Header from "./header";
import Footer from "./footer";
import Container from "./container";

function Layout({ children }) {
    return (
        <>
            <Container className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow mx-auto w-full max-w-screen-xl p-4">{children}</main>
                <Footer className="mt-auto"/>
            </Container>
        </>
    )
}

export default Layout