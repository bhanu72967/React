import { useState } from "react";

const Conditional = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back!</h1>
            ) : (
                <h1>Please sign in.</h1>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default Conditional;