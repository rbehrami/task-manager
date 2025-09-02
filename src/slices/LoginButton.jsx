import { useAuth0} from '@auth0/auth0-react'

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return <button
  onClick={() => loginWithRedirect()}
  className="
    relative px-15 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
    active:scale-95 text-white font-lato font-semibold text-lg rounded-full shadow-lg shadow-purple-300/50
    transition-all duration-300 ease-out overflow-hidden group cursor-pointer"
>
  <span className="relative z-10">Log In</span>
  {/* subtle glowing ring effect */}
  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></span>
</button>

}
export default LoginButton;