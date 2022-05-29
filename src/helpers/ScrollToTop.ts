import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
    const { pathname } = useLocation();

    window.onunload = function () {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}