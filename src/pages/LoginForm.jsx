import Header from "../components/login/Header"
import Login from "../components/login/Login"

export default function LoginPage() {
    return (
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />
        </>
    )
}