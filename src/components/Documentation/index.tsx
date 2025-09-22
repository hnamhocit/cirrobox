import {useEffect, useState} from 'react';
import {collection, onSnapshot} from "@firebase/firestore";

import Section from "@/components/Section";
import Document from "@/components/Documentation/Document";
import {IDocument} from "@/interfaces";
import EmptyWithUpload from "@/components/EmptyWithUpload";
import Loading from "@/components/Loading";
import {db} from "@/config/firebase";

const Documentation = () => {
    const [docs, setDocs] = useState<IDocument[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)

        const unsubscriber = onSnapshot(collection(db, 'apps'), snapshot => {
            const data = snapshot.docs.map(doc => doc.data()) as IDocument[]
            setDocs(data)
            setIsLoading(false)
        })

        return () => unsubscriber()
    }, [])

    return (
        <Section title="Documentation">
            {isLoading ? <Loading/> : docs.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {docs.map((doc) => (
                        <Document {...doc} key={doc.id}/>
                    ))}
                </div>
            ) : (
                <EmptyWithUpload name="documents"/>
            )}
        </Section>
    );
};

export default Documentation;