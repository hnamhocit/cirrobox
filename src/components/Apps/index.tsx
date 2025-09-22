import {useState} from "react";

import Section from "../Section";
import App from "./App";
import {IApp} from "@/interfaces";
import EmptyWithUpload from "@/components/EmptyWithUpload";
import Loading from "@/components/Loading";

const Apps = () => {
    const [apps, setApps] = useState<IApp[]>([1]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true)
    //
    //     const unsubscriber = onSnapshot(collection(db, 'apps'), snapshot => {
    //         const data = snapshot.docs.map(doc => doc.data()) as IApp[]
    //         setApps(data)
    //         setIsLoading(false)
    //     })
    //
    //     return () => unsubscriber()
    // }, [])

    return (
        <Section title={`Applications`}>
            {isLoading ? <Loading/> : apps.length > 0 ?
                (
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-7">
                        {Array.from({length: 12}).map((_, index) => (
                            <App key={index}/>
                        ))}
                    </div>
                )

                : <EmptyWithUpload name="apps"/>
            }
        </Section>
    );
};

export default Apps;
