import { firestore } from '../../../lib/firebase.js';

export default (req, res) => {
    firestore
    .collection('folders')
    .doc(req.query.name)
    .collection('files')
    .get()
    .then((querySnapshot) => {
        const images = []
        querySnapshot.forEach((doc) =>
            images.push(doc.data())
        )
        res.json(images)
    })
    .catch((error) => {
        res.json({ error })
    })
}