import { auth, firestore } from '../lib/firebase';
import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


export const useUserData = () => {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        let unsubscribe;
        
        if (user) {
            //const ref = firestore.doc(`users/${user.uid}`);
            const ref = doc(getFirestore(), 'users', user.uid)
            unsubscribe = onSnapshot(ref, ( doc ) => setUsername(doc.data()?.username));
        } else {
            setUsername(null);
        }
        return unsubscribe;
    }, [user]);

    return { user, username };
}
