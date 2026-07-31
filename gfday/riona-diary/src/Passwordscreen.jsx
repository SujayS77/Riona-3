import { motion } from "framer-motion";

import PageWrapper from "./ui/PageWrapper";
import Button from "./ui/Button";
import PinInput from "./ui/PinInput";

export default function PasswordScreen({ unlock }) {

    return (

        <PageWrapper>

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-violet-300/20 blur-[180px] rounded-full"/>

                <div className="absolute bottom-[-180px] right-[-100px] w-[500px] h-[500px] bg-purple-200/20 blur-[170px] rounded-full"/>

            </div>

            {/* HP */}

            <div className="absolute left-8 bottom-0">

                <div className="w-72 h-96 rounded-3xl bg-purple-100 opacity-40"/>

            </div>

            {/* HIMYM */}

            <div className="absolute right-10 bottom-0">

                <div className="w-60 h-72 rounded-3xl bg-purple-100 opacity-40"/>

            </div>

            <div className="relative h-full flex flex-col justify-center items-center">

                <motion.h1

                    initial={{opacity:0,y:-20}}
                    animate={{opacity:1,y:0}}

                    className="
                    text-6xl
                    font-bold
                    text-[#4B2E83]
                    text-center
                    "

                >

                    Happy Girlfriend's Day

                </motion.h1>

                <h2

                    className="
                    mt-3
                    text-5xl
                    font-[Caveat]
                    text-[#6C4AB6]
                    "

                >

                    Riona

                </h2>

                <p

                    className="
                    mt-8
                    italic
                    max-w-xl
                    text-center
                    text-gray-600
                    "

                >

                    10 saal ke baad issi station pe wapas aayenge...

                </p>

                <p

                    className="
                    mt-4
                    text-gray-400
                    text-sm
                    "

                >

                    Hint : 10 saal ke baad...

                </p>

                <PinInput

                    onComplete={unlock}

                />

                <div className="mt-8">

                    <Button>

                        Open Diary

                    </Button>

                </div>

            </div>

        </PageWrapper>

    );

}