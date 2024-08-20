import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function StartCall() {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <div className="fixed inset-0 p-4 flex items-center justify-center">
          <button
            onClick={() => {
              connect()
                .then(() => {})
                .catch(() => {})
                .finally(() => {});
            }}
            className={`w-24 h-24 rounded-full bg-gradient-to-r from-[#2FA5F6] to-[#4318FF] flex justify-center items-center relative transition-all duration-1000 ease-in-out animate-grow`}
          >
            <Phone className="text-white" />
          </button>
        </div>
      ) : // <motion.div
      //   className={
      //     "fixed inset-0 p-4 flex items-center justify-center bg-background"
      //   }
      //   initial="initial"
      //   animate="enter"
      //   exit="exit"
      //   variants={{
      //     initial: { opacity: 0 },
      //     enter: { opacity: 1 },
      //     exit: { opacity: 0 },
      //   }}
      // >
      //   <AnimatePresence>
      //     <motion.div
      //       variants={{
      //         initial: { scale: 0.5 },
      //         enter: { scale: 1 },
      //         exit: { scale: 0.5 },
      //       }}
      //     >
      //       <Button
      //         className={"z-50 flex items-center gap-1.5"}
      //         onClick={() => {
      //           connect()
      //             .then(() => {})
      //             .catch(() => {})
      //             .finally(() => {});
      //         }}
      //       >
      //         <span>
      //           <Phone
      //             className={"size-4 opacity-50"}
      //             strokeWidth={2}
      //             stroke={"currentColor"}
      //           />
      //         </span>
      //         <span>Start Call</span>
      //       </Button>
      //     </motion.div>
      //   </AnimatePresence>
      // </motion.div>
      null}
    </AnimatePresence>
  );
}
