import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/init';
import { Drink, DrinkDocument } from '@/Types';

export default async function getAllDrinks(): Promise<DrinkDocument[]> {
  const querySnapshot = await getDocs(collection(db, 'drinks'));
  const drinks: DrinkDocument[] = [];
  querySnapshot.forEach((doc) => {
    drinks.push({
      id: doc.id,
      ...(doc.data() as Drink),
    });
  });
  return drinks;
}
