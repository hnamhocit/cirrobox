import {useState} from "react";

import Section from "../Section";
import Library from "./Library";
import {ILib} from "@/interfaces";
import EmptyWithUpload from "@/components/EmptyWithUpload";
import Loading from "@/components/Loading";

const Libraries = () => {
    const [libs, setLibs] = useState<ILib[]>([1])
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     setIsLoading(true)
    //
    //     const unsubscriber = onSnapshot(collection(db, 'apps'), snapshot => {
    //         const data = snapshot.docs.map(doc => doc.data()) as ILib[]
    //         setLibs(data)
    //         setIsLoading(false)
    //     })
    //
    //     return () => unsubscriber()
    // }, [])

    return (
        <Section title="Libraries">
            {isLoading ? <Loading/> : libs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({length: 6}).map((_, index) => (
                        <Library key={index}/>
                    ))}
                </div>
            ) : <EmptyWithUpload name="libs"/>}
        </Section>
    );
};

export default Libraries;
