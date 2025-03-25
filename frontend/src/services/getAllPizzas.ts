import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/init';
import { Pizza } from '@/Types';

export default async function getAllPizzas(): Promise<Pizza[]> {
  const querySnapshot = await getDocs(collection(db, 'pizzas'));
  const pizzas: Pizza[] = [];
  querySnapshot.forEach((doc) => {
    pizzas.push({
      id: doc.id,
      ...(doc.data() as Pizza),
    });
  });
  return pizzas;
}
