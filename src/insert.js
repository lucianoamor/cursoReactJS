// firestore
import {db} from './config/firestore';
import {collection, addDoc} from 'firebase/firestore';

function setOrder(order) {
    const queryCollection = collection(db, 'orders');
    return addDoc(queryCollection, order);
}

export default setOrder;
