import { Slug } from "./portfolioData";

export type FeedbackDataItemTranslation = {
    siteName: string;
    siteView: string;
    reviewer: string;
    reviewerRole: string;
    feedbackText: string;
};
export type DataType = {
    id: string;
    image?: string;
    video?: string;
    siteLink: string;
    slug: Slug;
    feedbackLink?: string;
};
export type FeedbackDataItemType = {
    data: DataType;
    ua: FeedbackDataItemTranslation;
    en: FeedbackDataItemTranslation;
    pl: FeedbackDataItemTranslation;
};

export const feedbackData: FeedbackDataItemType[] = [
    {
        data: {
            id: "01",
            image: "https://drive.google.com/uc?export=view&id=1Ozbj5l_AhRyDsS3AQjDrACN7N8D-c_Zr",
            siteLink: "batatfarm.com",
            slug: "batatfarm-com",
            feedbackLink: "https://www.facebook.com/share/p/SK1k7ViB8P5mCS4B",
        },
        ua: {
            siteName: "Смачно! на селі",
            siteView: "інтернет магазин",
            reviewer: "Сергій Марченко",
            reviewerRole: "Підприємець та власник ферми",
            feedbackText:
                "Сайт створений завдяки невтомній Сусанні Салаті, яка не просто зробила з командою сайт, а й заставила мене ворушитися в цьому напрямку. Тепер для мене значно спростився процес відправки замовлень по всій Україні поштою. Більше не треба щоразу заповнювати свої дані в гугл-формі – один раз зареєструвався на сайті і все!",
        },
        en: {
            siteName: "Smachno! na seli",
            siteView: "online store",
            reviewer: "Sergii Marchenko",
            reviewerRole: "Entrepreneur and the farm owner",
            feedbackText:
                "The website was created thanks to the tireless Susanna Salata, who not only made the website with her team but, also, she made me move in this direction. Now, the process of sending orders by mail all over Ukraine has been greatly simplified for me. No more need to fill in the data in a Google form every time — just register on the site once and that's it!",
        },
        pl: {
            siteName: "Smachno! na seli",
            siteView: "sklep internetowy",
            reviewer: "Sergii Marchenko",
            reviewerRole: "Przedsiębiorca i właściciel gospodarstwa",
            feedbackText:
                "Strona powstała dzięki dzielnej Susannie Salata, która nie tylko wraz z zespołem stworzyła stronę, ale także nakłoniła mnie do działania w tym kierunku. Teraz proces wysyłania zamówień pocztą na całą Ukrainę został dla mnie znacznie uproszczony. Koniec wypełniania danych w formularzu Google za każdym razem — wystarczy jednorazowej rejestracji na stronie, i to wszystko!",
        },
    },
    {
        data: {
            id: "02",
            image: "https://drive.google.com/uc?export=view&id=1IicVPgXv_GMMdq4WVlqCijG3PT6HHfJF",
            siteLink: "protection.in.ua",
            slug: "protection-in-ua",
        },
        ua: {
            siteName: "Міграційний Адвокат",
            siteView: "вебсайт",
            reviewer: "Антоній Курц",
            reviewerRole: "Власник юридичної компанії",
            feedbackText:
                "Дякую команді за допомогу в систематизації та втіленні моїх ідей, незважаючи на нові побажання та зміни текстів, робота виконувалась вчасно, а спілкування було приємним та професійним, з результатом, що повністю задовольняє мої потреби. Щиро рекомендую цю команду!",
        },
        en: {
            siteName: "Migration Lawyer",
            siteView: "website",
            reviewer: "Antonii Kurts",
            reviewerRole: "Owner of a law office",
            feedbackText:
                "Thanks to the team for helping me to systematize and implement my ideas, despite new requests and changes to the texts, the work was done on time, and the communication was pleasant and professional, and the result fully satisfied my needs. I sincerely recommend this team!",
        },
        pl: {
            siteName: "Prawnik imigracyjny",
            siteView: "website",
            reviewer: "Antonii Kurts",
            reviewerRole: "Właściciel kancelarii prawnej",
            feedbackText:
                "Dziękuję zespołowi za pomoc w organizacji i realizacji moich pomysłów, pomimo nowych życzeń i zmian w tekstach, praca została wykonana na czas, a komunikacja była przyjemna i profesjonalna, z wynikiem, który w pełni spełnia moje wymagania. Szczerze polecam ten zespół!",
        },
    },
    {
        data: {
            id: "03",
            image: "https://drive.google.com/uc?export=view&id=1sNkFBnVPZzAenkxUzKwnecwNoOkMJDYl",
            siteLink: "theatermag.com.ua",
            slug: "theatermag-com-ua",
            feedbackLink: "https://www.youtube.com/watch?v=ccMpW9b2c2s",
        },
        ua: {
            siteName: "Український театр",
            siteView: "вебсайт",
            reviewer: "Ганна Шерман",
            reviewerRole: "Редакторка-засновниця журналу",
            feedbackText:
                "За весь мій досвід – ви найпотужніша команда з усіх, з ким я в житті співпрацювала. Я вражена тим, що у вас є фахівці з усіх потрібних напрямків і все є продуманим до дрібниць – це викликає захоплення! Візуально і функціонально цей сайт повністю відповідає нашому розумінню яким має бути сайт сучасного періодичного видання.",
        },
        en: {
            siteName: "Ukrainian theater",
            siteView: "website",
            reviewer: "Hanna Sherman",
            reviewerRole: "Founding editor of the magazine",
            feedbackText:
                "Throughout all my experience, you are the most capable team I have ever worked with. I am impressed that you have specialists in all the necessary areas, and everything is thought out down to the smallest details – it’s truly admirable! Both visually and functionally, this website fully meets our vision of what a modern periodical website should be.",
        },
        pl: {
            siteName: "Ukrainian theater",
            siteView: "website",
            reviewer: "Hanna Sherman",
            reviewerRole: "Redaktorka i założycielka czasopisma",
            feedbackText:
                "Z całego mojego doświadczenia – jesteście najpotężniejszym zespołem, z jakim kiedykolwiek współpracowałam. Jestem pod wrażeniem, że macie specjalistów we wszystkich właściwych dziedzinach i wszystko jest dopracowane w najdrobniejszych szczegółach – to naprawdę budzi podziw! Zarówno pod względem wizualnym, jak i funkcjonalnym, ta strona w pełni odpowiada naszej wizji, jak powinna wyglądać strona nowoczesnego czasopisma.",
        },
    },
    {
        data: {
            id: "04",
            image: "https://drive.google.com/uc?export=view&id=110udK8SC-Gx_QJy7avipGKnGEKZIu_xT",
            siteLink: "viktoriia-recruiting.com.ua",
            slug: "viktoriia-zabara",
        },
        ua: {
            siteName: "Вікторія Забара",
            siteView: "лендінг",
            reviewer: "Вікторія Забара",
            reviewerRole: "IT-рекрутер",
            feedbackText:
                "Щиро дякую вам за сайт, він виглядає професійно, ретельно продуманим і навіть відображає мій характер та моє світосприйняття. (Легко, конкретно, нічого зайвого). Дякую вам за роботу.",
        },
        en: {
            siteName: "Victoriia Zabara",
            siteView: "landing",
            reviewer: "Viktoriia Zabara",
            reviewerRole: "IT-recruiter",
            feedbackText:
                "Thank you very much for the website, it looks professional, well thought out and even reflects my character and my worldview. (Easy, concrete, nothing excessive). I truly appreciate your work.",
        },
        pl: {
            siteName: "Victoriia Zabara",
            siteView: "strona docelowa",
            reviewer: "Viktoriia Zabara",
            reviewerRole: "Rekruter w branży IT",
            feedbackText:
                "Bardzo dziękuję za stronę, wygląda profesjonalnie, starannie przemyślana, a nawet odzwierciedla mój charakter i światopogląd. (Prosto, konkretnie, nic zbędnego). Dziękuję za wykonaną pracę.",
        },
    },
    {
        data: {
            id: "05",
            image: "https://drive.google.com/uc?export=view&id=1fVyAALJvtIfRVi4_BbdOBdzPjXig19HZ",
            siteLink: "www.choodov.com",
            slug: "alex-chudov",
            feedbackLink:
                "https://www.linkedin.com/posts/chudov_choodov-wonderintheuniverse-activity-7312176808714518529-EcwB/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABeq2koBgxsJlDrPNdqlrtKYrDg7EYdDKTU",
        },
        ua: {
            siteName: "Алекс Чудов",
            siteView: "лендінг",
            reviewer: "Алекс Чудов",
            reviewerRole: "письменник",
            feedbackText:
                "Усе почалося з перемоги у новорічному конкурсі, але я й уявити не міг, який ідеальний сайт отримаю. Було приємно працювати з такою організованою командою. Їхні ідеї були неймовірні. Кілька дійсно продуктивних зустрічей допомогли уточнити всі вимоги та мої побажання. Команда глибоко занурилась у тему моєї книги та створила «живий і інтерактивний» сайт, що передає її дух і ідею. Я щиро рекомендую 'i love my team', якщо ви хочете яскраво представити себе або свій бізнес на чудовому сайті! Перший контакт, який вам потрібен — це Сусанна Салата. Висококласна менеджерка, яка втілить ваші ідеї в робочий проєкт.",
        },
        en: {
            siteName: "Alex Chudov",
            siteView: "landing",
            reviewer: "Alex Chudov",
            reviewerRole: "writer",
            feedbackText:
                "Everything starts as a New Year Contest win, but I even cannot imagine what perfect website will I get. It was a pleasure to work with such a well-organized team. Their concepts were amazing. Several truly productive meetings helped to clarify all requirements and my wishes. The team dug deeply into the theme of my book and created the 'live and interactive' website that reflects the spirit and idea of it. I highly recommend the 'i love my team', if you would like to express your business or yourself on a wonderful website! The first contact that you need - is Susanna Salata. The high-quality manager who brings your ideas to the working project.",
        },
        pl: {
            siteName: "Alex Chudov",
            siteView: "strona docelowa",
            reviewer: "Alex Chudov",
            reviewerRole: "pisarz",
            feedbackText:
                "Wszystko zaczęło się od wygranej w konkursie noworocznym, ale nawet nie mogłem sobie wyobrazić, jak idealną stronę internetową otrzymam. Praca z tak dobrze zorganizowanym zespołem była prawdziwą przyjemnością. Ich pomysły były niesamowite. Kilka naprawdę owocnych spotkań pomogło doprecyzować wszystkie wymagania i moje oczekiwania. Zespół głęboko zanurzył się w temat mojej książki i stworzył „żywą i interaktywną” stronę, która odzwierciedla jej ducha i ideę. Gorąco polecam 'i love my team', jeśli chcesz wyrazić siebie lub swój biznes poprzez wyjątkową stronę internetową! Osobą kontaktową, której potrzebujesz, jest Susanna Salata — wysokiej klasy menedżerka, która wciela Twoje pomysły w działający projekt.",
        },
    },
    {
        data: {
            id: "06",
            image: "https://drive.google.com/uc?export=view&id=1GsEahMO4FdWVzmg3yszwqFIZJ78zq_52",
            siteLink: "career-coach.com.ua",
            slug: "hoida-liudmyla",
            feedbackLink:
                "https://www.linkedin.com/posts/career-coach-liudmyla-hoida_%D1%80%D1%96%D0%BA-%D0%BF%D1%80%D0%B8%D0%B1%D0%BB%D0%B8%D0%B7%D0%BD%D0%BE-%D1%81%D1%82%D1%96%D0%BB%D1%8C%D0%BA%D0%B8-%D1%87%D0%B0%D1%81%D1%83-%D1%8F-%D0%BD%D0%B0%D0%BC%D0%B0%D0%B3%D0%B0%D0%BB%D0%B0%D1%81%D1%8F-activity-7351175632237604864-yM7H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkfVTsBkmOpxPEM4MnW9E2pily_Cdy9Btw",
        },
        ua: {
            siteName: "Людмила Гойда",
            siteView: "лендінг",
            reviewer: "Людмила Гойда",
            reviewerRole: "коуч",
            feedbackText:
                "На першу зустріч із командою я прийшла без чіткого розуміння, що саме хочу. Але Сусанна Салата поставила дуже влучні запитання і створила простір, у якому мені стало зрозуміліше, що я хочу сказати про себе і для кого я це роблю. І коли після тієї розмови я побачила перші варіанти дизайну — я була щиро вражена. Дівчата допомогли мені побачити й оформити себе у форматі, з яким мені комфортно виходити в світ. Якщо ви, як і я колись, відкладаєте створення сайту, бо не знаєте з чого почати – щиро рекомендую вам команду 'i love my team', яка зможе відчути і зрозуміти вас.",
        },
        en: {
            siteName: "Liudmyla Hoida",
            siteView: "landing",
            reviewer: "Liudmyla Hoida",
            reviewerRole: "сoach",
            feedbackText:
                "I came to the first meeting with the team without a clear idea of what exactly I wanted. But Susanna Salata asked incredibly thoughtful questions and created a space that helped me understand what I wanted to say about myself — and who I was saying it for. When I saw the first design concepts after that conversation, I was genuinely impressed. The girls helped me see and present myself in a way that feels authentic and comfortable to share with the world. If you're like I once was — putting off creating a website because you don't know where to start — I wholeheartedly recommend the 'i love my team'. They’ll truly take the time to understand and feel you.",
        },
        pl: {
            siteName: "Liudmyla Hoida",
            siteView: "strona docelowa",
            reviewer: "Liudmyla Hoida",
            reviewerRole: "coach",
            feedbackText:
                "Na pierwsze spotkanie z zespołem przyszłam bez jasnego zrozumienia, czego dokładnie chcę. Ale Susanna Salata zadawała bardzo trafne pytania i stworzyła przestrzeń, w której stało się dla mnie jaśniejsze, co chcę powiedzieć o sobie i dla kogo to robię. A kiedy po tej rozmowie zobaczyłam pierwsze warianty designu — byłam szczerze zachwycona. Dziewczyny pomogły mi zobaczyć i przedstawić siebie w formacie, z którym czuję się komfortowo. Jeśli Ty, tak jak ja kiedyś, odkładasz tworzenie strony internetowej, bo nie wiesz, od czego zacząć – szczerze polecam Ci zespół 'i love my team', który potrafi Was wyczuć i zrozumieć.",
        },
    },
    {
        data: {
            id: "07",
            image: "https://drive.google.com/uc?export=view&id=17gfz70WBX_uoL0Sp_xz8PbwxvbyPlImx",
            siteLink: "https://balabushko.com",
            slug: "hanna-balabushko",
            feedbackLink:
                "https://www.linkedin.com/posts/anna-balabushko_qa-менторство-та-підтримка-лідерів-activity-7356931958112739329-gkkh?utm_source=share&utm_medium=member_android&rcm=ACoAABeq2koBgxsJlDrPNdqlrtKYrDg7EYdDKTU",
        },
        ua: {
            siteName: "Анна Балабушко",
            siteView: "лендінг",
            reviewer: "Анна Балабушко",
            reviewerRole: "QA ментор",
            feedbackText:
                "Дякую команді i love my team за створення лендінгу, який справді відображає моє бачення. Особлива подяка дизайнерці — разом ми пройшли шлях від ідей до чіткої й привабливої візуалізації. Були моменти, де хотілося більше залучення під час розробки, але в підсумку я отримала сайт, який мені не просто “ок”, а справді мій. На сайті можна легко замовити менторську консультацію — я працюю з людьми, які: • починають свій шлях у QA та хочуть впевнено стартувати, а також почати автоматизовувати; • переходять у лідерські ролі (вперше або з певними сумнівами); • вже керують командами і прагнуть більше системності та впевненості; • або потребують підтримки під час кар’єрних змін.",
        },
        en: {
            siteName: "Hanna Balabushko",
            siteView: "landing",
            reviewer: "Hanna Balabushko",
            reviewerRole: "QA mentor",
            feedbackText:
                "Big thanks to the i love my team crew for creating a landing page that truly reflects my vision. Special appreciation goes to the designer — together, we went from rough ideas to a clear and attractive visual. There were moments where I wished for more engagement during development, but in the end, I received a website that isn’t just “okay” — it genuinely feels like me. On the site, it’s easy to book a mentoring session — I work with people who: are just starting their journey in QA and want a confident launch, including diving into automation; are transitioning into leadership roles (for the first time or with some doubts); are already leading teams but want more structure and confidence; or need support during career transitions.",
        },
        pl: {
            siteName: "Hanna Balabushko",
            siteView: "strona docelowa",
            reviewer: "Hanna Balabushko",
            reviewerRole: "QA mentor",
            feedbackText:
                "Dziękuję zespołowi i love my team za stworzenie strony docelowej, która naprawdę odzwierciedla moją wizję. Szczególne podziękowania dla projektantki — razem przeszliśmy drogę od pomysłów do jasnej i atrakcyjnej wizualizacji. Były momenty, kiedy chciałam większego zaangażowania w trakcie tworzenia, ale ostatecznie otrzymałam stronę, która nie jest po prostu „ok”, tylko naprawdę moja. Na stronie można łatwo zamówić konsultację mentorską — pracuję z osobami, które: • rozpoczynają swoją przygodę z QA i chcą pewnie wystartować, a także zacząć automatyzować; • przechodzą do ról przywódczych (po raz pierwszy lub z pewnymi wątpliwościami); • już zarządzają zespołami i dążą do większej systematyczności i pewności siebie; • lub potrzebują wsparcia podczas zmian w karierze.",
        },
    },
    {
        data: {
            id: "08",
            video: "Bi_4N-Qewv4",
            siteLink: "https://willow-motion.space/",
            slug: "willow-motion",
            feedbackLink: "https://youtube.com/shorts/Bi_4N-Qewv4",
        },
        ua: {
            siteName: "Willow Motion",
            siteView: "лендінг",
            reviewer: "Ольга Сердюк",
            reviewerRole: "спеціалістка з відео монтажу",
            feedbackText:
                "Привіт! Мене звати Оля і мені нещодавно команда ilovemyteam зробиа лендінг і я просто в захваті. До цього в мене не було єдиного зручного місця, де клієнти могли б озайомитися з моїми робоотами та цінами. Все було в соцмережах і знайти потрібне було складно. Тепер в мене є стильний та зручний лендінг, де все зібрано. Мої роботи, контакти та послуги. Клієнти вже пишуть напряму через сайт. Це дуже зручно. Дякую команді ilovemyteam за крутий результат. Якщо ви досі вагаєтесь чи потрібен вам сайт, однозначно - так!",
        },
        en: {
            siteName: "Willow Motion",
            siteView: "landing",
            reviewer: "Olga Serdiuk",
            reviewerRole: "video editing specialist",
            feedbackText:
                "Hi! My name is Olya, and recently the ilovemyteam crew created a landing page for me - and I’m absolutely thrilled! Before this, I didn’t have a single convenient place where clients could easily explore my work and pricing. Everything was scattered across social media, and it was difficult to find the right info. Now I have a stylish and user-friendly landing page where everything is gathered in one place - my projects, contacts, and services. Clients are already reaching out directly through the site, and it’s incredibly convenient. Huge thanks to the ilovemyteam team for such an amazing result! If you’re still wondering whether you need a website - the answer is definitely yes!",
        },
        pl: {
            siteName: "Willow Motion",
            siteView: "strona docelowa",
            reviewer: "Olga Serdiuk",
            reviewerRole: "montażysta wideo",
            feedbackText:
                "Cześć! Mam na imię Ola i niedawno zespół ilovemyteam zrobił dla mnie landing page – i jestem po prostu zachwycona. Do tej pory nie miałam jednego, wygodnego miejsca, gdzie klienci mogliby dowiedzieć się o mojej pracy i cenach. Wszystko było porozrzucane po mediach społecznościowych i trudno było coś znaleźć. Teraz mam stylową i wygodną stronę docelową, gdzie wszystko jest w jednym miejscu: moje prace, kontakty i usługi. Klienci już piszą bezpośrednio przez stronę – to bardzo wygodne. Dziękuję zespołowi ilovemyteam za świetny efekt! Jeśli wciąż się zastanawiacie, czy potrzebujecie strony internetowej – odpowiedź brzmi: zdecydowanie tak!",
        },
    },
];
