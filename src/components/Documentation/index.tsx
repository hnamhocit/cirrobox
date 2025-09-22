import React, {useState} from 'react';
import Section from "@/components/Section";
import Document from "@/components/Documentation/Document";
import {IDocument} from "@/interfaces";
import EmptyWithUpload from "@/components/EmptyWithUpload";
import Loading from "@/components/Loading";

const Documentation = () => {
    const [docs, setDocs] = useState<IDocument[]>([1]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true)
    //
    //     const unsubscriber = onSnapshot(collection(db, 'apps'), snapshot => {
    //         const data = snapshot.docs.map(doc => doc.data()) as IDocument[]
    //         setDocs(data)
    //         setIsLoading(false)
    //     })
    //
    //     return () => unsubscriber()
    // }, [])

    return (
        <Section title="Documentation">
            {isLoading ? <Loading/> : docs.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {Array.from({length: 3}).map((_, i) => (
                        <Document key={i}/>
                    ))}
                </div>
            ) : (
                <EmptyWithUpload name="documents"/>
            )}
        </Section>
    );
};

export default Documentation;