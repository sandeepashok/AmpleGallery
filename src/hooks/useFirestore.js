import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config'

const useFirestore = (Collection) => {
    const [docs, setDocs] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        const unsub = projectFirestore.collection('users').doc(user.uid).collection('images')
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
            });
        //cleanup
        return () => unsub();
    }, [Collection, user.uid])

    return { docs };
}

export default useFirestore;