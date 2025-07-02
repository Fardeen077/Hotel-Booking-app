import room1 from "../assets/images/BadRoom1.png.jpg";
import room2 from "../assets/images/BadRoom2.png.jpg";
import room3 from "../assets/images/BadRoom3.png.jpg";
import room4 from "../assets/images/BadRoom4.png.jpg";
import room5 from "../assets/images/BadRoom5.png.jpg";
import room6 from "../assets/images/BadRoom6.png.jpg";
import { Button } from "@/components/ui/button";

const roomsImages = [
  { id: 1, title: "Luxury Suite", image: room1, price: 150 },
  { id: 2, title: "Premium Room", image: room2, price: 120 },
  { id: 3, title: "Executive Room", image: room3, price: 100 },
  { id: 4, title: "Deluxe Room", image: room4, price: 90 },
  { id: 5, title: "Comfort Room", image: room5, price: 80 },
  { id: 6, title: "Standard Room", image: room6, price: 70 },
];

export default function Booking() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:px-20 mt-10 gap-7  lg:grid-cols-3 md:grid-cols-2">
        {roomsImages.map((room) => (
          <div
            key={room.id}
            className="min-h-[350px] flex flex-col justify-between hover:shadow-xl transition p-4 cursor-pointer"
          >
            {/* Image with hover text overlay */}
            <div className="relative group">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-[250px] object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 rounded">
                <h2 className="text-white text-2xl font-bold drop-shadow-lg">
                  {room.title}
                </h2>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 ps-10">
              <p className="font-bold text-lg">{`$${room.price}`}</p>
              <Button>Book now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
