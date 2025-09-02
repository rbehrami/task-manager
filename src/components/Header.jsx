import {useAuth0} from '@auth0/auth0-react'

const Header = () => {
    const {user} = useAuth0();

    return (

        <>
            <header className="fixed top-0 left-64 right-0 h-18 bg-white shadow-lg rounded-t-lg flex items-center justify-between px-6 z-10">
                <div>
                <input 
                    type="text" 
                    placeholder="type to search" 
                    className="border border-gray-300 px-5 py-2 text-black rounded-sm w-64 hover:border-0 transition-all duration-200" 
                    aria-label="Search"
                />
                </div>
                <div>
                {user?.picture && (
                    <img 
                    src={user.picture} 
                    alt="User profile" 
                    className="w-14 h-14 rounded-full border-2 border-gray-300"
                    referrerPolicy="no-referrer"
                    />
                )}
                </div>
            </header>
        </>
    )
}
export default Header;