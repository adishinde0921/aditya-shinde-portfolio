import ExperienceCarousel from "../components/ExperienceCarousel";
function Experience(){
    const questionPaperImages = [
        "images/experiance/Automatic-question-paper/image copy 2.png",
        "images/experiance/Automatic-question-paper/image copy 3.png",
        "images/experiance/Automatic-question-paper/image copy 4.png",
        "images/experiance/Automatic-question-paper/image copy.png",
        "images/experiance/Automatic-question-paper/image.png"

    ]
    const SmartPendentImages = [
        "images/experiance/Iot-Ml_based-pendent/wearable-pendant-1.jpg",
        "images/experiance/Iot-Ml_based-pendent/wearable-pendant-2.jpg",
        "images/experiance/Iot-Ml_based-pendent/wearable-pendant-3.jpg",
        "images/experiance/Iot-Ml_based-pendent/wearable-pendant-4.jpg",
        "images/experiance/Iot-Ml_based-pendent/wearable-pendant-5.jpg"

    ]

    return(
        <section
          id="experience"
        className="relative min-h-screen bg-night px-6 py-24 text-ivory "
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <p className="text-bronze text-sm tracking-[0.3em] uppercase">
                        02 — EXPERIENCE
                </p>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4">
                        My Journey
                </h2>
                <div className="mt-8 border-b border-white/10 w-full"></div>
            </div>

            {/*Experiance Card 1 and Card 2 */}

            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/*Experiance Card 1  */}
                <div className="bg-white/10 p-8 rounded-2xl">

                   <span className="font-heading font-bold text-5xl md:text-6xl text-bronze/40">01</span>    
                   <p className="inline-block mt-5 px-4 py-1.5 rounded-full border border-bronze/40 text-bronze text-xs tracking-widest uppercase ">Internship</p>  
                   <h3 className="mt-6 text-2xl md:text-3xl font-heading font-semibold leading-tight">Automatic Question Paper Generation</h3>
                   <p className="text-sm text-muted mt-4 leading-relaxed md:text-base">Developed a system that helps teachers generate question papers efficiently And Fast using predefined questions and uploaded study materials.</p>

                   {/* Image Carousel */}
                   <div>
                    <ExperienceCarousel
                       images={questionPaperImages}
                       alt="Automatic Question Paper Generation project"
/>
                   </div>
                   {/* Technology Skills */}
                   <div className="flex flex-wrap gap-12 mt-6">
                   <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">Java</span>
                   <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">Java Swing</span>
                   <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">JDBC</span>
                    <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night"> MySQL</span>
                    <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">NetBeans</span>
                    
                    </div>



                </div>


                {/*Experiance Card 2  */}
                <div className="bg-white/10 rounded-2xl p-8">
                    <span className="text-5xl font-heading font-bold text-bronze/40 md:text-6xl">02</span>    
                   <p className="inline-block mt-5 px-4 py-1.5 rounded-full border border-bronze/40 text-bronze text-xs tracking-widest uppercase ">Academic Project</p>  
                   <h3 className="mt-6 text-2xl md:text-3xl font-heading font-semibold leading-tight">Iot And ML Based Smart Wearable Pendant</h3>
                   <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">Developed an IoT-based wearable system for real-time health monitoring, fall detection, and emergency SOS alerts using ESP32 and connected sensors.</p>

                   {/* Image Carousel */}
                   <div>
                    <ExperienceCarousel
                        images={SmartPendentImages}
                        alt="Smart Wearable Health Pendant project"
/>
                   </div>
                   {/* Technology Skills */}
                   <div className="flex flex-wrap gap-7 mt-6">
                   <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">ESP32</span>
                   <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">Python</span>
                   <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">Firebase</span>
                    <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night"> MPU6050</span>
                    <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">IoT</span>
                    <span className="py-3 px-2 rounded-full border border-bronze/30 bg-bronze/10 text-bronze text-xs font-medium tracking-wide transition-all duration-300  hover:bg-bronze hover:text-night">Pushbullet API</span>
                   </div>

                </div>

            </div>

        </section>
    )
}
export default Experience;