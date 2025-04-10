import { Slug } from "./portfolioData";

type FeedbackDataItemTranslation = {
    siteName: string;
    siteView: string;
    reviewer: string;
    reviewerRole: string;
    feedbackText: string;
};
type DataType = {
    id: string;
    image?: string;
    video?: string;
    siteLink: string;
    slug: Slug;
    feedbackLink?: string;
    imageForProjectPage?: string;
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
            image: "https://drive.google.com/uc?export=view&id=1IovSPMGOqMgbzKSP8SvMMq6oLycARfk0",
            siteLink: "batatfarm.com",
            slug: "batatfarm-com",
            feedbackLink: "https://www.facebook.com/share/p/SK1k7ViB8P5mCS4B",
            imageForProjectPage:
                "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666870/feedback_dc3r3m.jpg",
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
            image: "https://drive.google.com/uc?export=view&id=1IaX7awVp5tY0eAxnFv17XdUvyE5qGSxj",
            siteLink: "viktoriia-zabara.netlify.app",
            slug: "viktoriia-zabara",
        },
        ua: {
            siteName: "Вікторія Забара рекрутер",
            siteView: "лендінг",
            reviewer: "Вікторія Забара",
            reviewerRole: "IT-рекрутер",
            feedbackText:
                "Щиро дякую вам за сайт, він виглядає професійно, ретельно продуманим і навіть відображає мій характер та моє світосприйняття. (Легко, конкретно, нічого зайвого). Дякую вам за роботу.",
        },
        en: {
            siteName: "Victoriia Zabara recruiter",
            siteView: "landing",
            reviewer: "Viktoriia Zabara",
            reviewerRole: "IT-recruiter",
            feedbackText:
                "Thank you very much for the website, it looks professional, well thought out and even reflects my character and my worldview. (Easy, concrete, nothing excessive). I truly appreciate your work.",
        },
        pl: {
            siteName: "Victoriia Zabara rekruter",
            siteView: "strona docelowa",
            reviewer: "Viktoriia Zabara",
            reviewerRole: "Rekruter w branży IT",
            feedbackText:
                "Bardzo dziękuję za stronę, wygląda profesjonalnie, starannie przemyślana, a nawet odzwierciedla mój charakter i światopogląd.(Prosto, konkretnie, nic zbędnego). Dziękuję za wykonaną pracę.",
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
                "Усе почалося з перемоги у новорічному конкурсі, але я й уявити не міг, який ідеальний сайт отримаю. Було приємно працювати з такою організованою командою. Їхні ідеї були неймовірні. Кілька дійсно продуктивних зустрічей допомогли уточнити всі вимоги та мої побажання. Команда глибоко занурилась у тему моєї книги та створила «живий і інтерактивний» сайт, що передає її дух і ідею. Я щиро рекомендую 'i love my team', якщо ви хочете яскраво представити себе або свій бізнес на чудовому сайті! Перший контакт, який вам потрібен — це Сусанна Салата 🇺🇦. Висококласна менеджерка, яка втілить ваші ідеї в робочий проєкт.",
        },
        en: {
            siteName: "Alex Chudov",
            siteView: "landing",
            reviewer: "Alex Chudov",
            reviewerRole: "writer",
            feedbackText:
                "Everything starts as a New Year Contest win, but I even cannot imagine what perfect website will I get. It was a pleasure to work with such a well-organized team. Their concepts were amazing. Several truly productive meetings helped to clarify all requirements and my wishes. The team dug deeply into the theme of my book and created the 'live and interactive' website that reflects the spirit and idea of it. I highly recommend the 'i love my team', if you would like to express your business or yourself on a wonderful website! The first contact that you need - is Susanna Salata 🇺🇦. The high-quality manager who brings your ideas to the working project.",
        },
        pl: {
            siteName: "Alex Chudov",
            siteView: "strona docelowa",
            reviewer: "Alex Chudov",
            reviewerRole: "pisarz",
            feedbackText:
                "Wszystko zaczęło się od wygranej w konkursie noworocznym, ale nawet nie mogłem sobie wyobrazić, jak idealną stronę internetową otrzymam. Praca z tak dobrze zorganizowanym zespołem była prawdziwą przyjemnością. Ich pomysły były niesamowite. Kilka naprawdę owocnych spotkań pomogło doprecyzować wszystkie wymagania i moje oczekiwania. Zespół głęboko zanurzył się w temat mojej książki i stworzył „żywą i interaktywną” stronę, która odzwierciedla jej ducha i ideę. Gorąco polecam 'i love my team', jeśli chcesz wyrazić siebie lub swój biznes poprzez wyjątkową stronę internetową! Osobą kontaktową, której potrzebujesz, jest Susanna Salata 🇺🇦 — wysokiej klasy menedżerka, która wciela Twoje pomysły w działający projekt.",
        },
    },
];
