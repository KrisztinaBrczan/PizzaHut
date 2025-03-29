import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/init';
import { Pizza, PizzaDocument } from '@/Types';

export default async function getAllPizzas(): Promise<PizzaDocument[]> {
  const querySnapshot = await getDocs(collection(db, 'pizzas'));
  const pizzas: PizzaDocument[] = [];
  querySnapshot.forEach((doc) => {
    pizzas.push({
      id: doc.id,
      ...(doc.data() as Pizza),
    });
  });
  return pizzas;
}
