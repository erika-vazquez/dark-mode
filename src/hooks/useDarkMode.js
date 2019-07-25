import useLocalStorage from './useLocalStorage'

export default function useDarkMode() {

    const [dark, setDark] = useLocalStorage("false");

    useEffect(() => {
        if(dark === 'true') {
            document.querySelector('body').classList.add('dark-mode')
        } else (
            document.querySelector('body').classList.remove('dark-mode')
        )
    }, [dark]);

    return [dark, setDark];   
}