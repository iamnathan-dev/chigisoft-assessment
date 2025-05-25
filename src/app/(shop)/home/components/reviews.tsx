"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MOCK_REVEIWS } from "../../constant";
import Autoplay from "embla-carousel-autoplay";
import { User } from "lucide-react";

export function ReviewCarousel() {
  return (
    <div className="bg-white px-5 py-5 pt-10">
      <h3 className="text-center text-lg font-medium text-gray-900">
        Customer Reviews
      </h3>

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="lg:max-w-4xl md:max-w-2xl max-w-[310px] mx-auto pb-[2rem] mt-10 group"
      >
        <CarouselContent>
          {MOCK_REVEIWS.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <Card className="bg-transparent shadow-none border-0 !p-0 rounded-none h-full">
                  <CardContent className="flex flex-col gap-2 px-0 h-full">
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <small key={i} className="text-yellow-400">
                          ★
                        </small>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs">{review.comment}</p>
                  </CardContent>

                  <div className="mt-5">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-200 grid place-items-center">
                        <User className="text-gray-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-800">
                          {review.name}
                        </h4>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 group-hover:opacity-100 lg:opacity-0" />
        <CarouselNext className="right-0 group-hover:opacity-100 lg:opacity-0" />
      </Carousel>
    </div>
  );
}
