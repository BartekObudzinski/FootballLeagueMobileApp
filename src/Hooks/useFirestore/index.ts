import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  QueryConstraint,
  where,
  WithFieldValue,
} from 'firebase/firestore';
import { useState } from 'react';
import { db } from 'Setup/config';

export const useFirestore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const insertDocument = async (
    collectionName: string,
    data: WithFieldValue<DocumentData>,
  ) => {
    try {
      setIsLoading(true);
      const document = await addDoc(collection(db, collectionName), data);
      return { id: document.id, ...data };
    } catch (error) {
      throw new Error(
        `Document has been not insert into '${collectionName}' collection`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDocument = async (collectionName: string, id: string) => {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, collectionName, id));
    } catch (error) {
      throw new Error(
        `Document has been not deleted from '${collectionName}' collection`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCollection = async (
    collectionName: string,
    ...queryConstraints: QueryConstraint[]
  ) => {
    try {
      setIsLoading(true);
      const collectionRef = collection(db, collectionName);
      const documents = await getDocs(
        query(collectionRef, ...queryConstraints),
      );
      const data: DocumentData[] = [];
      documents.forEach((document) =>
        data.push({ id: document.id, ...document.data() }),
      );
      return data;
    } catch (error) {
      throw new Error(
        `Documents for '${collectionName}' collection have been not fetched`,
      );
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    insertDocument,
    deleteDocument,
    fetchCollection,
  };
};
