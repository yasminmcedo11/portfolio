import { useRef } from "react";


export default function useScroll<T extends HTMLElement>()  {
    const ref = useRef<T | null>(null)

    function scrollTo() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return { ref, scrollTo }
}