import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, collection, onSnapshot, orderBy, projectFirestore, query } from '../firebase/config';

const useFirestore = () => {
    const [docs, setDocs] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const q = query(
                    collection(projectFirestore, 'users', user.uid, 'images'),
                    orderBy('createdAt', 'desc')
                );

                const unsub = onSnapshot(q, (snap) => {
                    let documents = [];
                    snap.forEach((doc) => {
                        documents.push({ ...doc.data(), id: doc.id });
                    });
                    setDocs(documents);
                });

                // Cleanup
                return () => unsub();
            }
        };

        fetchData();
    }, [user]);

    return { docs };
};

export default useFirestore;
