import {SearchIcon} from "lucide-react";
import {useState} from "react";
import clsx from "clsx";
import {AnimatePresence, motion} from "motion/react";

const Search = () => {
    const [q, setQ] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [isFocus, setIsFocus] = useState(false)

    const handleBlur = () => {
        setQ("")
        setIsFocus(false)
    }

    return (
        <div className="flex-1 hidden md:block">
            <div className="relative" onBlur={handleBlur}>

                <div className={clsx("flex items-center gap-3 py-2 px-3 border-2 rounded-xl border-gray-200 dark:border-gray-700 transition-colors", {
                    "!border-blue-500": isFocus,
                })}>
                    <SearchIcon />

                    <input
                        type="text"
                        placeholder="Search..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        onFocus={() => setIsFocus(true)}
                        className="outline-none block bg-transparent w-full h-full"
                    />
                </div>

                <AnimatePresence>
                    {q.trim().length >= 3 && (
                        <motion.div
                            animate={{
                                opacity: 1,
                                y: 12
                            }}
                            exit={{
                                opacity: 0,
                                y: -12
                            }}
                            className="absolute top-full left-0 w-full p-4 rounded-xl text-neutral-700 bg-white min-h-64">
                            <div className="flex items-center gap-3 text-sm">
                               <SearchIcon size={20} />
                               <div>Search result for "<span className="font-semibold">{q.trim()}</span>" </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Search;