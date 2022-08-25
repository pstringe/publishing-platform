import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useCallback, useContext, useEffect, useState } from 'react'
import { signInWithPopup, signInAnonymously, signOut } from 'firebase/auth';
import { UserContext } from '../lib/context'
import debounce from 'lodash.debounce';
import { getFirestore, doc, getDoc, writeBatch } from 'firebase/firestore';  

const SignInButton = ({ }) => {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider);
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
    const [formValue, setFormValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, username } = useContext(UserContext);

    const checkUsername = useCallback(debounce(async (username) => {
        if (username.length >= 3) {
            const ref = doc(getFirestore(), '/usernames', formValue);
            const snap = await getDoc(ref);
            console.log('Firestore read executed!', snap.exists());
            setIsValid(!snap.exists());
            setLoading(false);
        }
    }, 500),[]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userDoc = doc(getFirestore(), 'users', user.uid);
        const usernameDoc = doc(getFirestore(), 'usernames', formValue);

        const batch = writeBatch(getFirestore());
        batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName });
        batch.set(usernameDoc, { uid: user.uid });

        await batch.commit();
    }

    const handleChange = (e) => {
        const val = e.target.value.toLowerCase();
        const regex = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        if (val.length < 3) {
            setFormValue(val);
            setLoading(false);
            setIsValid(false);
        }
      
        if (regex.test(val)) {
            setFormValue(val);
            setLoading(true);
            setIsValid(false);
        }
    }

    useEffect(() => {
        checkUsername(formValue);
    }, [formValue]);

    return (!username && (
        <form className="form-username" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your username" value={formValue} onChange={handleChange} />
            <button type="submit" disabled={!isValid || loading}>{loading ? 'Loading...' : 'Submit'}</button>
        </form>
    ));
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