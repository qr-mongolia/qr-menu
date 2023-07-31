const Menu = () => {
  const data = [
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
          items: [
            {
              name: "Гүзээлзгэнэтэй Коктэйл",
              description: "A refreshing cocktail with tropical flavors.",
              price: "$10",
            },
            {
              name: "Beer 2",
              description: "A local craft beer with a hint of citrus.",
              price: "$5",
            },
            {
              name: "Soft Drink 3",
              description: "Soda, Cola, or other non-alcoholic beverages.",
              price: "$3",
            },
          ],
        },
        {
          name: "Хоолны Зоос",
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
          name: "Караоке Дууны Жагсаалт",
          items: [
            {
              name: "Дууны Гарчиг 1",
              artist: "Дуучин Нэр 1",
            },
            {
              name: "Дууны Гарчиг 2",
              artist: "Дуучин Нэр 2",
            },
            {
              name: "Дууны Гарчиг 3",
              artist: "Дуучин Нэр 3",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <section className="h-screen">
        <h1>
          {data.map((i) => {
            return <h1 key={i.name}>{i.name}</h1>;
          })}
        </h1>
      </section>
    </>
  );
};

export default Menu;
