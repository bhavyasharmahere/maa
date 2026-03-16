import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";
export default function EmergencyTab() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);

  const phone = "+916114356769";

  return (
    <div ref={ref} className="fixed left-0 bottom-6 z-50 md:hidden">
      <motion.div
        animate={{ width: open ? 220 : 56 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center bg-red-600 text-white rounded-r-full shadow-lg overflow-hidden"
        style={{ height: 56 }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-14 h-full"
        >
          <AlertTriangle className="w-6 h-6" />
        </button>

        {open && (
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 px-4 font-semibold"
          >
            <Phone className="w-5 h-5" />
            Emergency Call
          </a>
        )}
      </motion.div>
    </div>
  );
}