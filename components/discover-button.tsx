"use client"

import { RefObject, useRef } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { useHover } from "@/hooks/use-hover"

const DiscoverButton = () => {
  const hoverRef = useRef<HTMLDivElement>(null)
  const isHover = useHover(hoverRef as RefObject<HTMLElement>)

  return (
    <div className="flex items-center p-4">
      <div className="flex items-center p-4">
        <div ref={hoverRef} className="flex">
          <div
            className={cn(
              "flex h-[48px] items-center font-semibold justify-center rounded-l-[8px] bg-[#173DC9] px-4 text-white",
              isHover && "bg-[#CEF79E] text-black"
            )}
          >
            Tìm hiểu thêm
          </div>
          {!isHover ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="48" fill="none" viewBox="0 0 18 48">
              <path
                fill="#173DC9"
                d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
                data-original="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
              ></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="48" fill="none" viewBox="0 0 18 48">
              <path
                fill="#CEF79E"
                d="M0 0c5.29 0 9.9 3.6 11.183 8.731l6.09 24.359C19.165 40.663 13.437 48 5.63 48H0V0Z"
                data-original="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
              ></path>
            </svg>
          )}
        </div>

        <div className="relative flex">
          {!isHover ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="none" viewBox="0 0 51 48">
              <path
                fill="#FFFFFF"
                d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
                data-original="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
              ></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="#222E30" viewBox="0 0 51 48">
              <path
                fill="#222E30"
                d="M.728 14.91C-1.166 7.338 4.562 0 12.369 0H39c 6.628 0 12 5.373 12 12v24c0 6.627-5.372 12-12 12H18.37a12 12 0 0 1-11.631-9.09l-6-24Z"
                data-original="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
              ></path>
            </svg>
          )}

          <ArrowRight
            className={cn(
              "absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-black",
              isHover && "text-white"
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default DiscoverButton
