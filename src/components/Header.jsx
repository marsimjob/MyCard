import imgpath from '../assets/card-logo.png';
export default function Header({ inputState, setInputState }) {

    const myHeader = inputState ? "Preparing Card..." : "Here's my Card!"
    function ChangeHeader() {
        setInputState(!inputState);
    }
    return (
        <section id="header">
            <img src = {imgpath} alt = "AppLogo" />
            <h1>{myHeader}</h1>
        </section>
)
}