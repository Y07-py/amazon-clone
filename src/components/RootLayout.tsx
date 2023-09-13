import { ReactElement } from "react";
import Footer from "./footer/Footer";
import BottomHeader from "./header/BottomHeader";
import Header from "./header/Header";

interface RootLayoutProps {
    children: ReactElement;
}

const RootLayout = ({children}: RootLayoutProps) => {
    return (
        <>
            <Header />
            <BottomHeader />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout;