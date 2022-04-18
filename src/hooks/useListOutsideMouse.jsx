import React, { useEffect } from "react";

export function useListOutsideMouse(ref, open, setInputTxt) {
    useEffect(() => {
        if(open.isOpen) {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    open.setIsOpen(false);
                    setInputTxt("");
                }
            }

            // Bind the event listener
            document.addEventListener("click", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("click", handleClickOutside);
            };
        }
    }, [ref, open]);
}