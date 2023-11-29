import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { auth, deleteDoc, doc, projectFirestore } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    const [user] = useAuthState(auth);
    const docsCopy = [...docs];

    const deleteImgHandler = async (id) => {
        setSelectedImg(null);
        const userDocRef = doc(projectFirestore, 'users', user.uid, 'images', id);
        try {
            await deleteDoc(userDocRef);
            console.log('Document successfully deleted!');
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    return (
        <div className="image-grid">
            {docsCopy && docsCopy.map(doc => (
                <motion.div className="image-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                >
                    <motion.img src={doc.url} alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        onClick={() => setSelectedImg(doc.url)}
                    />
                    <IconButton aria-label="delete" className='delete-img-btn' onClick={() => {
                        setSelectedImg(null)
                        deleteImgHandler(doc.id)
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;