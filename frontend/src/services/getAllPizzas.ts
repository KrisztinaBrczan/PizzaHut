import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/init';
import { Pizzas } from '@/Types';

export default async function getAllPizzas(): Promise<Pizzas[]> {
  const querySnapshot = await getDocs(collection(db, 'pizzas'));
  const pizzas: Pizzas[] = [];
  querySnapshot.forEach((doc) => {
    pizzas.push({
      id: doc.id,
      ...(doc.data() as Pizzas),
    });
  });
  return pizzas;
}
