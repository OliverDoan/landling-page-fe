"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"

const sections = [
  {
    title: "Human-Centric Personalization",
    description:
      "NewEra Inc. builds flexible digital platforms, leveraging AI to personalize experiences based on behavior and context, bringing technology closer to more than 100 million Vietnamese.",
    image: "/why-01.png",
    contentColor: "text-blue-600",
    gradient: "linear-gradient(180deg, #FDFDFD 0%, #E8F4FF 100%)",
  },
  {
    title: "Powerful Technology, Reliable Operations",
    description:
      "Integrating payment, artificial intelligence, IoT, and big data, NewEra Inc. enhances security and optimizes performance, bringing smooth, safe, and reliable experiences based on than 100 million Vietnamese users.",
    image: "/why-02.png",
    contentColor: "text-white",
    gradient: "linear-gradient(180deg, #E8F4FF 0%, #4A7DC9 100%)",
  },
  {
    title: "Global Scalability, Seamless Connectivity",
    description:
      "With multi-channel, multilingual, and multi-method support, NewEra Inc. helps partners accelerate growth while optimizing experiences tailored to align with local cultures and needs.",
    image: "/why-03.png",
    contentColor: "text-white",
    gradient: "linear-gradient(180deg, #4A7DC9 0%, #2861B8 100%)",
  },
  {
    title: "Distinctive Digital Experiences with Real Value",
    description:
      "NewEra Inc. creates unique, trend-aware digital experiences that focus on real impact—ensuring technology not only impresses, but inspires and elevates human potential.",
    image: "/why-04.png",
    contentColor: "text-white",
    gradient: "linear-gradient(180deg, #2861B8 0%, #173DC9 100%)",
  },
]

const ScrollingSections = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [currentGradient, setCurrentGradient] = useState(sections[0].gradient)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap()
      setCurrent(selectedIndex)
      setCurrentGradient(sections[selectedIndex].gradient)
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Handle wheel scroll
  useEffect(() => {
    if (!api) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (e.deltaY > 0) {
        // Scroll down
        api.scrollNext()
      } else {
        // Scroll up
        api.scrollPrev()
      }
    }

    const container = api.containerNode()
    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [api])

  return (
    <div
      className="relative w-full h-screen transition-all duration-700 ease-in-out"
      style={{
        background: currentGradient,
      }}
    >
      <Carousel
        setApi={setApi}
        orientation="vertical"
        opts={{
          align: "start",
          loop: false,
        }}
        className="h-screen"
      >
        <CarouselContent className="h-screen">
          {sections.map((section, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex w-full max-w-6xl gap-12 px-8">
                  {/* Image Section */}
                  <div className="relative flex flex-1 items-center justify-center">
                    <div className="relative w-full h-[70vh]">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>

                  </div>

                  {/* Text Section */}
                  <div className="flex flex-1 flex-col justify-center gap-6 pr-12">
                    <h2 className={`text-4xl font-bold leading-tight ${section.contentColor}`}>
                      {section.title}
                    </h2>
                    <p className={`text-lg leading-relaxed ${section.contentColor === 'text-blue-600' ? 'text-blue-600/80' : 'text-white/90'}`}>
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? "bg-white scale-125" : "bg-white/30"
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollingSections
