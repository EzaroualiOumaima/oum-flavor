"use client";

import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "@/store/reviews/reviewThunk";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "15s" : speed === "normal" ? "20s" : "30s"
      );
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const { reviews } = useSelector((state: RootState) => state.reviews) as {
    reviews: { message: string; name: string; isShown: boolean }[];
  };

  useEffect(() => {
    const getAllReviews = async () => {
      await dispatch(getReviews());
    };
    getAllReviews();
  }, [dispatch]);

  const shownReviews = reviews.filter((review) => review.isShown);

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {shownReviews.map(
          (item: { message: string; name: string }, idx: number) => (
            <li
              className="w-[350px] max-w-full relative rounded-xl border bg-slate-500/25  flex-shrink-0 border-[#C9AB81] px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[1.6] text-white font-[Poppins] font-normal">
                  {item.message}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center justify-center">
                  <span className="flex flex-col ">
                    <span className=" text-xl text-center font-bold leading-[1.6] text-[#C9AB81] font-[JosefinSans]">
                      &quot; {item.name} &quot;
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
