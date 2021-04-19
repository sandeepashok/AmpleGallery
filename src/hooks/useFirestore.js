import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (Collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(Collection)
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
    }, [Collection])

    return { docs };
}

export default useFirestore;