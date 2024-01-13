// firestore
import {db} from './config/firestore';
import {collection, getDocs, getDoc, doc, where, query} from 'firebase/firestore';

function getProducts(id, category) {
    const queryCollection = collection(db, 'products');
    if(id != 0)
        return getDoc(doc(db, 'products', id));
    else if(category)
        return getDocs(query(queryCollection, where('categoryUrl', '==', category)));
    else
        return getDocs(query(queryCollection));
}

export default getProducts;
