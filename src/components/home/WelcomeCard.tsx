import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button, Card, Carousel, CarouselContent, CarouselItem } from "../ui";

const WelcomeCard = () => {
  return (
    <Card className="bg-blue-700 p-6  gap-3 w-full  md:w-[40%]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {[1, 2, 3, 4, 5]?.map((item: number) => {
            return (
              <CarouselItem key={item}>
                <Button
                  variant={"secondary"}
                  className="text-blue-700 font-semibold"
                >
                  Announcement
                </Button>
                <p className="text-2xl font-semibold text-white py-2">
                  Welcome to the Flood Monitoring Dashboard !!!
                </p>
                <p className="text-lg font-medium text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem, eius. Porro ducimus doloremque veritatis error
                  accusamus aliquid assumenda, temporibus consequuntur!
                </p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};

export default WelcomeCard;
