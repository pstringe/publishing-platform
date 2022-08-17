import { auth, googleAuthProvider } from '../lib/firebase'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

const SignInButton = ({ }) => {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return <button className="btn-google" onClick={signInWithGoogle}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" />
            Sign In With Google
        </button>
}

const SignOutButton = ({ }) => {
    return <button className="btn-signout" onClick={auth.signOut}>Sign Out</button>
}

const UsernameForm = ({ }) => {
  return <> </>
}

const AuthSwith = ({ user, username }) => {
    if (user && !username) {
        return <UsernameForm />
    } else if (user && username){
        return <SignOutButton />
    }
    return <SignInButton />
}

const AuthenticationForm = ({ }) => {
    const { user, username } = useContext(UserContext);

    return (
        <main>
            <AuthSwith user={user} username={username} />
        </main>
    )
}

export default AuthenticationForm;