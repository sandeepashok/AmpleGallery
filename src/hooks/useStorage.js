import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, collection, projectFirestore, projectStorage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'users', user.uid, 'images');

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const downloadURL = await getDownloadURL(storageRef);
                const createdAt = serverTimestamp();

                const imageDocRef = doc(collectionRef);
                await setDoc(imageDocRef, { url: downloadURL, createdAt });

                setUrl(downloadURL);
            }
        );
    }, [file, user.uid]);

    return { progress, error, url };
};

export default useStorage;
