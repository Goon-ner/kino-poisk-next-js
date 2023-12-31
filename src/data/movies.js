const movies = [
  {
    id: 1,
    title: 'Зеленая миля',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/acb932eb-c7d0-42de-92df-f5f306c4c48e/3840x',
    director: 'Фрэнк Дарабонт',
    actors: 'Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Кларк Дункан',
    year: 1999,
    genre: 'драма',
    description:
      'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
  },
  {
    id: 2,
    title: 'Побег из Шоушенка',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/e26044e5-2d5a-4b38-a133-a776ad93366f/3840x',
    director: 'Фрэнк Дарабонт',
    actors: 'Тим Роббинс, Морган Фриман, Боб Гантон, Уильям Сэдлер',
    year: 1994,
    genre: 'драма',
    description:
      'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
  },
  {
    id: 3,
    title: 'Форрест Гамп',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/da241cd4-0828-4aed-bfd2-27332dc4c94c/3840x',
    director: 'Роберт Земекис',
    actors: 'Том Хэнкс, Робин Райт, Салли Филд, Гэри Синиз',
    year: 1994,
    genre: 'драма',
    description:
      'Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни. С самого малолетства парень страдал от заболевания ног, соседские мальчишки дразнили его, но в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись.',
  },
  {
    id: 4,
    title: '1+1',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/bd3c56b3-3681-4137-9335-b849c42ed6ea/3840x',
    director: 'Оливье Накаш, Эрик Толедано',
    actors: 'Франсуа Клюзе, Омар Си, Анн Ле Ни, Одри Флёро',
    year: 2011,
    genre: 'комедия',
    description:
      'Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.',
  },
  {
    id: 5,
    title: 'Список Шиндлера',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ad682589-603d-40c1-b63a-fe01af9f3012/3840x',
    director: 'Стивен Спилберг',
    actors: 'Лиам Нисон, Бен Кингсли, Рэйф Файнс, Кэролайн Гудолл',
    year: 1993,
    genre: 'драма',
    description:
      'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
  },
  {
    id: 6,
    title: 'Интерстеллар',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/78c36c0f-aefd-4102-bc3b-bac0dd4314d8/3840x',
    director: 'Кристофер Нолан',
    actors: 'Мэттью МакКонахи, Энн Хэтэуэй, Джессика Честейн, Маккензи Фой',
    year: 2014,
    genre: 'фантастика',
    description:
      'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
  },
  {
    id: 7,
    title: 'Властелин колец: Возвращение короля',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7dfa6dbd-15ea-41e9-b869-63dd33ffdb0d/3840x',
    director: 'Питер Джексон',
    actors: 'Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн Маккеллен',
    year: 2003,
    genre: 'фэнтези',
    description:
      'Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.',
  },
  {
    id: 8,
    title: 'Бойцовский клуб',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/0839a766-ad02-4821-b4d8-491a69a99dc5/3840x',
    director: 'Дэвид Финчер',
    actors: 'Джон Траволта, Сэмюэл Л. Джексон, Брюс Уиллис, Ума Турман',
    year: 1999,
    genre: 'триллер',
    description:
      'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение. Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.',
  },
  {
    id: 9,
    title: 'Унесённые призраками',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ab0f4933-dceb-4791-a723-25bd6c681a58/3840x',
    director: 'Хаяо Миядзаки',
    actors: 'Руми Хиираги, Мию Ирино, Мари Нацуки, Такаси Наито',
    year: 2001,
    genre: 'фэнтези',
    description:
      'Тихиро с мамой и папой переезжает в новый дом. Заблудившись по дороге, они оказываются в странном пустынном городе, где их ждет великолепный пир. Родители с жадностью набрасываются на еду и к ужасу девочки превращаются в свиней, став пленниками злой колдуньи Юбабы. Теперь, оказавшись одна среди волшебных существ и загадочных видений, Тихиро должна придумать, как избавить своих родителей от чар коварной старухи.',
  },
  {
    id: 10,
    title: 'Тайна Коко',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/a389ccb4-40db-4a29-8ff4-5b3f2e3166e0/3840x',
    director: 'Ли Анкрич, Эдриан Молина',
    actors:
      'Энтони Гонсалес, Гаэль Гарсиа Берналь, Бенджамин Брэтт, Аланна Юбак',
    year: 2017,
    genre: 'комедия',
    description:
      '12-летний Мигель живёт в мексиканской деревушке в семье сапожников и тайно мечтает стать музыкантом. Тайно, потому что в его семье музыка считается проклятием. Когда-то его прапрадед оставил жену, прапрабабку Мигеля, ради мечты, которая теперь не даёт спокойно жить и его праправнуку. С тех пор музыкальная тема в семье стала табу. Мигель обнаруживает, что между ним и его любимым певцом Эрнесто де ла Крусом, ныне покойным, существует некая связь. Паренёк отправляется к своему кумиру в Страну Мёртвых, где встречает души предков. Мигель знакомится там с духом-скелетом по имени Гектор, который становится его проводником. Вдвоём они отправляются на поиски де ла Круса',
  },

  {
    id: 11,
    title: 'Криминальное чтиво',
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/97ed7256-db80-4532-ab6b-6688d2eab4b2/3840x',
    director: 'Квентин Тарантино',
    actors: 'Джон Траволта, Сэмюэл Л. Джексон, Брюс Уиллис, Ума Турман',
    year: 1994,
    genre: 'криминал',
    description:
      'Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса. В первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй рассказывается о боксёре Бутче Кулидже, купленном Уоллесом, чтобы сдать бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.',
  },
]
export default movies
