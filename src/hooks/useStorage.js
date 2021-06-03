import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null)
    const [user] = useAuthState(auth)

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('users').doc(user.uid).collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })
    }, [file, user.uid]);

    return { progress, error, url }

}

export default useStorage;
