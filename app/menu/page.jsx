"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menuData, setMenuData] = useState([
    {
      name: "Restaurant",
      type: "Restaurant",
      description: "Nice Restaurant",
      location:
        "Монгол Улс, Улаанбаатар хот-14200, Сүхбаатар дүүрэг, 3-р хороо, Сүхбаатарын талбай, Сентрал Тауэр, 3-р давхар, М харилцагчийн төв ",
      contact: {
        email: "themuln.official@gmail.com",
        phone: "88650115",
        website: "https://themuuln.vercel.app",
      },
      menus: [
        {
          name: "Уух зүйлс",
          path: "drink",
          icon: "https://www.svgrepo.com/show/505208/juice.svg",
          items: [
            {
              name: "Гүзээлзгэнэтэй Коктэйл",
              description:
                "Оригинал бүтээгдэхүүнтэй коктэйл, тропик нөмөрлөн сэтгэл хол бүрийг өргөтгөн орчноороо бэхлэнэ.",
              price: "$10",
            },
            {
              name: "Бир 2",
              description:
                "Байгалийн гайхамшигтай локаль сармис талтай бирийн төрөл.",
              price: "$5",
            },
            {
              name: "Софт Дарсан 3",
              description: "Сод, Кола, эсвэл бусад биеийн алкогол бус зүйлс.",
              price: "$3",
            },
          ],
        },
        {
          name: "1-р хоол",
          // icon: "food.svg",
          icon: "https://www.svgrepo.com/show/429379/bowl-food-noodle.svg",
          path: "food",
          items: [
            {
              name: "Хамбургер 1",
              description:
                "Хамбургер биш, үхрийн хамбургер, сүүтэй болон овощтой.",
              price: "$12",
            },
            {
              name: "Паста 2",
              description:
                "Сонгосон томс, сонгосон соосгийг хавсралттай пастатай хол бүрийг өртсөн.",
              price: "$15",
            },
            {
              name: "Нахос 3",
              description: "Цэцэг хийж, томсонд дүрэлж хамгаалсан нахос.",
              price: "$8",
            },
          ],
        },
        {
          name: "2-р хоол",
          icon: "https://www.svgrepo.com/show/429380/cooking-food-fried.svg",
          // icon: "https://icons8.com/icon/By3PJyT0V992/noodles",
          path: "food",
          items: [
            {
              name: "Хамбургер 1",
              description:
                "Хамбургер биш, үхрийн хамбургер, сүүтэй болон овощтой.",
              price: "$12",
            },
            {
              name: "Паста 2",
              description:
                "Сонгосон томс, сонгосон соосгийг хавсралттай пастатай хол бүрийг өртсөн.",
              price: "$15",
            },
            {
              name: "Нахос 3",
              description: "Цэцэг хийж, томсонд дүрэлж хамгаалсан нахос.",
              price: "$8",
            },
          ],
        },
      ],
    },
  ]);
  useEffect(() => {
    console.log("menudata", menuData);
  }, []);
  return (
    <>
      <section className="flex flex-col items-center h-screen space-y-2">
        {menuData.map((item, index) => (
          <>
            {item.menus.map((menu, index) => (
              <Card
                className={"w-[90%]"}
                key={index}
              >
                <CardHeader className="space-y-2">
                  <Image
                    src={menu?.icon}
                    className="w-[200px] self-center h-[200px]"
                    width={100}
                    height={100}
                    alt="Menu Icon"
                  />
                  <CardTitle className="self-center">{menu?.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </>
        ))}
      </section>
    </>
  );
};

export default Menu;
