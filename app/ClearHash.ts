"use client";

import { useEffect } from "react";

export function ClearHash() {
    useEffect(() => {
        const clear = () => {
            if (window.location.hash) {
                history.replaceState(
                    null,
                    "",
                    window.location.pathname + window.location.search
                );
            }
        };

        const onLoad = () => setTimeout(clear, 0);
        const onPageShow = () => setTimeout(clear, 0);

        window.addEventListener("load", onLoad);
        window.addEventListener("pageshow", onPageShow);

        return () => {
            window.removeEventListener("load", onLoad);
            window.removeEventListener("pageshow", onPageShow);
        };
    }, []);

    return null;
}