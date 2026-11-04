import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Navbar(){
    return(
        <motion.header 
        initial={{y: -40, opacity: 0}}
        animate={{y:0, opacity:1 }}
        transition={{ duration: 0.8, ease: "easeOut"}}
        className = "relative z-50 border-b border-white/10 bg-night/90">

            <nav className = "mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
                {/*LOGO */}
                <a href="#home" className = "font-heading text-2xl font-bleck tracking-tighter text-ivory">AS <span className = "text-bronze">.</span></a>

                {/*Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#home" className="nav-link uppercase">Home</a>
                    <a href="#about" className="nav-link uppercase">About</a>
                    <a href="#experiance" className="nav-link uppercase">Experience</a>
                    <a href="#contact" className="nav-link uppercase">Contact</a>
                </div>

                {/*HIRE ME */}
                <a href="#contact" className="group flex-center gap-2 rounded-full bg-bronze px-6 py-3 text-xs font-bold uppercase tracking-wider text-night transition-all duration-300 hover:bg-ivory">hire me<ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"/></a>

            </nav>
        </motion.header>
    )
}
export default Navbar;