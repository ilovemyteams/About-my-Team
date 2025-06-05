import { TextDocContent } from "@/types/TextDocTypes";

export interface DefinitionType {
    title: string;

    content: { title: string; text: string }[];
}

interface OfertaDocType {
    title: string;
    description: string;
    definitions: DefinitionType;
    data: TextDocContent[];
}

interface OfertaType {
    ua: OfertaDocType;
    en: OfertaDocType;
    pl: OfertaDocType;
}

export const ofertaData: OfertaType = {
    ua: {
        title: "Публічний договір <purple>(оферта)</purple> на замовлення послуг Проєкту <purple>“i love my team”</purple>",
        description:
            "Цей документ, положення якого викладені нижче по тексту, є публічним договором. Згідно з положеннями статей 633, 641 Цивільного кодексу України умови публічного договору (оферти) є однаковими для всіх Замовників послуг  Проєкту “i love my team”.",
        definitions: {
            title: "Визначення термінів",
            content: [
                {
                    title: "Оферта (Договір)",
                    text: "цей документ, адресований всім фізичним та юридичним особам, що бажають скористатися послугами Проєкту “i love my team”, розміщений на сайті *site* за посиланням: *oferta*.",
                },
                {
                    title: "Договір",
                    text: "договір про надання послуг, укладений між Виконавцем та Замовником в момент Акцепту Замовником даного Договору.",
                },
                {
                    title: "Сайт",
                    text: "вебсайт Виконавця *site*.",
                },
                {
                    title: "Виконавець",
                    text: "фізична особа підприємець Салата Іван Григорович, що здійснює свою діяльність під комерційним найменуванням Проєкт “i love my team”.",
                },
                {
                    title: "Замовник послуг",
                    text: "будь-яка дієздатна фізична особа, яка досягла 18 років, юридична особа або фізична особа-підприємець, що ознайомилася з умовами даного Договору та вчинила Акцепт.",
                },
                {
                    title: "Акцепт",
                    text: "повне та безумовне прийняття Замовником умов даного Договору, що свідчить про укладення Договору. Акцептом вважається вчинення однієї з таких дій: оплата Рахунку, виставленого Виконавцем; здійснення часткової або повної передоплати за Послуги;  письмове (в тому числі надіслане на електронну пошту - *email*) підтвердження Замовником згоди на отримання Послуг на умовах, викладених у комерційній пропозиції Виконавця;  заповнення онлайн-форми “Замовити” на Сайті Виконавця з проставленням відмітки про згоду з умовами даного Договору.",
                },
                {
                    title: "Послуги Проєкту “i love my team”",
                    text: "інформаційно-консультаційні послуги щодо розробки цифрових продуктів, а також окремі або комплексні послуги з аналізу бізнесу та конкурентів, дизайну, розробки, тестування та технічної підтримки цифрових продуктів, описані на сайті за посиланням: *services*.",
                },
                {
                    title: "Рахунок (інвойс)",
                    text: "розрахунковий документ, що надається Виконавцем Замовнику для оплати Послуг, який містить реквізити Виконавця та інформацію про замовника, перелік конкретних Послуг, їх вартість, терміни оплати та може містити строки надання Послуг.",
                },
                {
                    title: "Технічне Завдання (ТЗ)",
                    text: "документ, що може бути складений у формі Додатка до Договору, який детально описує вимоги, етапи, функціонал, терміни виконання та інші характеристики Послуг.",
                },
                {
                    title: "Бриф",
                    text: "це документ, що є обов’язковим додатком до Договору, в якому описуються особливості бізнесу Замовника, портрет аудиторії, очікування Замовника та технічні можливості сайту, вимоги до оформлення, бюджет та терміни виконання.",
                },
                {
                    title: "Політика конфіденційності та захисту даних",
                    text: " документ, що визначає умови пов'язані зі збиранням, обробкою, використанням та зберіганням  персональних даних замовників послуг, учасників Проєкту “i love my team” та відвідувачів сайту *site*. Політика конфіденційності та захисту даних Проєкту “i love my team” розміщена за посиланням:  *policy*, і є невід'ємною частиною Договору.",
                },
                {
                    title: "Сторони",
                    text: "спільне найменування Виконавця і Замовника.",
                },
            ],
        },
        data: [
            {
                title: "<purple>Предмет</purple> \nдоговору",
                content: [
                    {
                        type: "text",
                        text: "1.1. Виконавець зобов'язується надати Замовнику  інформаційно-консультаційні та/або послуги з розробки цифрових продуктів, а Замовник зобов'язується прийняти та оплатити такі Послуги на умовах даного Договору.",
                    },
                    {
                        type: "text",
                        text: "1.2.  Найменування Послуг, одиниці виміру, кількість, ціна за одиницю послуги, штрафні санкції, спосіб визначення ціни Договору та етапи виконання Послуг, що надаються на умовах цього Договору, узгоджуються Сторонами та фіксуються у Брифі або Технічному Завданні , що є невід'ємною частиною цього Договору.",
                    },
                    {
                        type: "text",
                        text: "1.3. Виконавець гарантує дотримання авторського права, суміжних прав чи інших прав третіх осіб під час виконання своїх зобов'язань за Договором.",
                    },
                ],
            },
            {
                title: "<purple>Ціна</purple> Договору та порядок <purple>розрахунків</purple>",
                content: [
                    {
                        type: "text",
                        text: "2.1. Ціна Договору  складається із сумарної вартості наданих Послуг Замовнику впродовж  строку дії Договору.",
                    },
                    {
                        type: "text",
                        text: "2.2. Ціна за Послуги вказується в інвойсі в національній валюті України та включає усі прямі витрати Виконавця, пов'язані з виконанням його зобов'язань за Договором, в тому числі витрати  на сплату податків та інших зборів і обов'язкових платежів, що сплачуються або мають бути сплачені Виконавцем.",
                    },

                    {
                        type: "text",
                        text: "2.2.1. Для Замовників, які не є резидентами України та не мають рахунків в українському банку і не мають можливості оплатити в національній валюті ціна за Послуги може бути встановлена в  іноземній валюті – євро (EUR) або доларі США (USD).",
                    },
                    {
                        type: "text",
                        text: "2.3. Усі банківські комісії та інші збори, що стягуються банком Замовника (як резидента, так і нерезидента), а також банками-кореспондентами (у випадку здійснення міжнародних платежів Замовником-нерезидентом), пов'язані з переказом коштів, сплачуються Замовником у повному обсязі.",
                    },
                    {
                        type: "text",
                        text: "2.4. Виконавець несе відповідальність лише за сплату комісій свого банку в Україні, пов'язаних із зарахуванням отриманих коштів. Сума, що має бути зарахована на рахунок Виконавця, повинна відповідати повній сумі, зазначеній у Рахунку (Інвойсі).",
                    },
                    {
                        type: "text",
                        text: "2.5. Спосіб визначення ціни Договору за моделями: фіксована ціна (Fixed Price), або погодинна ставка (Time & Materials), або за етапами робіт (Milestone) визначається та узгоджується Сторонами у Брифі та Технічному Завданні, або  у відповідному  Інвойсі, що є невід'ємними Додатками до Договору. ",
                    },
                    {
                        type: "text",
                        text: "2.6. Розрахунок за Послуги здійснюється  в безготівковій формі на умовах, визначених у пунктах 2.6.1-2.6.3 Договору шляхом перерахування грошових коштів на відповідні розрахункові рахунки Виконавця, вказані в Інвойсі.",
                    },
                    {
                        type: "text",
                        text: "2.6.1. Розрахунок за Послуги, що надаються Виконавцем за фіксованою ціною (Fixed Price) здійснюються Замовником за передоплатою у розмірі 50%  ціни Договору та 50% після повного надання послуг або в розмірі 100% післяоплати на підставі виставленого Виконавцем Інвойсу  впродовж 3  (трьох) робочих днів.",
                    },
                    {
                        type: "text",
                        text: "2.6.2. Розрахунок за Послуги, що надаються Виконавцем за погодинною ставкою (Time & Materials)  здійснюється Замовником двічі на місяць, виходячи з кількості фактично витрачених годин роботи спеціалістів Виконавця та погодинних ставок, узгоджених Сторонами у Технічному Завданні на підставі  відповідного Інвойсу, що надається Замовнику разом зі звітом про витрачений час із зазначенням виконаних завдань, впродовж 3  (трьох) робочих днів  від дати надсилання Інвойсу.",
                    },
                    {
                        type: "text",
                        text: "2.6.3. Розрахунок за Послуги, що надаються Виконавцем за етапами робіт (Milestone) здійснюється Замовником за 100% передоплатою за перший етап, та за кожний наступний етап після повного завершення та приймання робіт за попереднім етапом на підставі виставлених Виконавцем Інвойсів впродовж 3 (трьох) робочих днів від дати Інвойсу. ",
                    },
                    {
                        type: "text",
                        text: "2.7. Ціна Договору може бути збільшена у разі, якщо  в процесі надання Послуг за моделлю Fixed Price або Milestone виникає потреба у виконанні робіт, що виходять за межі початково узгодженого обсягу, визначеного у Брифі та Технічному Завданні.  Вартість, строки та порядок їх надання  узгоджуються Сторонами додатково. Такі зміни оформлюються у вигляді окремого Додатка до Договору та сплачуються Замовником на підставі окремого Інвойса.",
                    },
                    {
                        type: "text",
                        text: "2.8. Здійснена Замовником оплата Послуг за Інвойсом Виконавця підтверджує безумовне прийняття наданих Послуг  в повному обсязі.",
                    },
                    {
                        type: "text",
                        text: "2.9. Зобов'язання Замовника щодо оплати Послуг за цим Договором вважається виконаним у момент зарахування коштів на рахунок Виконавця.",
                    },
                ],
            },
            {
                title: "<purple>Строки</purple> та <purple>порядок</purple> \nнадання послуг",
                content: [
                    {
                        type: "text",
                        text: "3.1. Строк надання Послуг визначається за домовленістю Сторін у Брифі або Технічному Завданні, що є невід'ємним додатком до цього Договору. ",
                    },
                    {
                        type: "text",
                        text: "3.2. Послуги надаються Виконавцем дистанційно.",
                    },
                    {
                        type: "text",
                        text: "3.3. По завершенню надання Послуг Виконавець надсилає Замовнику електронною поштою або іншими офіційними засобами телекомунікаційного зв’язку, визначеними у пункті 9.6 Договору, Інвойс із вказаними термінами оплати  та документацію, обумовлену Сторонами у Брифі або Технічному Завданні. Замовник, зобов'язаний протягом 10 (десяти)  робочих днів здійснити оплату по фінальному Інвойсу, таким чином підтвердивши прийняття робіт у повному обсягу, або у цей же строк надати мотивовану відмову, вказавши причини такої відмови.",
                    },
                    {
                        type: "text",
                        text: "3.4. Обов'язок оформлення фінального Інвойсу та документації, обумовленої Сторонами у Брифі або Технічному завданні покладається на Виконавця.",
                    },
                    {
                        type: "text",
                        text: "3.5. Датою прийняття наданих Послуг в повному обсязі є дата надсилання оплати по Інвойсу з терміном оплати 10 (десять) днів.",
                    },
                    {
                        type: "text",
                        text: "3.6. У разі ненадходження до Виконавця мотивованої відмови у строк, встановлений пунктом 3.3 Договору, Послуги вважаються наданими у повному обсязі від дати оплати фінального Інвойсу.",
                    },
                    {
                        type: "text",
                        text: "3.7. Сторони погодили, що даний Договір, Додатки до нього та Додаткові угоди, а також документи, пов'язані з його виконанням  можуть укладатися Сторонами у вигляді електронного документа із застосуванням кваліфікованого електронного підпису. Такі документи, направлені один одному засобами телекомунікаційного зв’язку або на електронних носіях, вважаються оригіналами.",
                    },
                    {
                        type: "text",
                        text: "3.8. Електронний документ вважається укладеним Сторонами та підписаним з обох Сторін у дату, зазначену в тексті такого електронного документа. ",
                    },
                    {
                        type: "text",
                        text: '3.9. Використання Сторонами електронного документообігу та засобів телекомунікаційного зв’язку здійснюється відповідно до Законів України «Про електронні документи та електронний документообіг» та «Про електронну ідентифікацію та електронні довірчі послуги», а також "Про електронну комерцію".',
                    },
                ],
            },
            {
                title: "<purple>Права</purple> та \n<purple>обов'язки</purple> сторін",
                content: [
                    { type: "text", text: "4.1. Замовник зобов’язаний:" },
                    {
                        type: "text",
                        text: "4.1.1. Своєчасно та в повному обсязі сплачувати вартість Послуг згідно з виставленими Інвойсами;",
                    },

                    {
                        type: "text",
                        text: "4.1.2. Приймати надані Послуги згідно з умовами за цим Договором або відмовитись, надіславши мотивовану відмову у встановлений за цим Договором термін;",
                    },
                    {
                        type: "text",
                        text: "4.1.3. За запитом Виконавця надавати йому в оговорений термін інформацію, необхідну для надання послуг за цим Договором;",
                    },
                    {
                        type: "text",
                        text: "4.1.4. Взаємодіяти самому, або призначити особу відповідальну за взаємодію зі спеціалістами Виконавця для надання Виконавцем послуг за цим Договором;",
                    },
                    {
                        type: "text",
                        text: "4.1.5. На вимогу Виконавця письмово погоджувати та затверджувати запропоновані Замовником зміни до Технічного завдання.",
                    },
                    { type: "text", text: "4.2. Замовник має право:" },
                    {
                        type: "text",
                        text: "4.2.1. Вимагати від Виконавця надання послуг у строки, встановлені цим Договором, та в обсязі, погодженому Сторонами.",
                    },
                    {
                        type: "text",
                        text: "4.2.2. Збільшувати  або зменшувати обсяг замовлених послуг. У такому випадку, Замовник зобов’язаний письмово повідомити Виконавця про збільшення або зменшення обсягу послуг не менше ніж за 30 робочих днів до дати введення таких змін обсягу Договору.",
                    },
                    {
                        type: "text",
                        text: "4.2.3.  Відмовитися від послуг Виконавця до закінчення строку дії Договору, повідомивши про це Виконавця письмово через офіційні канали комунікації не пізніше, ніж за 30 (тридцять) робочих  днів, та здійснивши з ним розрахунки за фактично надані послуги + оплата за наступні 30 робочих днів в розрахунку, як за попередній аналогічний період (Time & Materials) або наступний етап робіт (Milestone) відповідно до умов даного Договору, зазначених у пунктах 2.6.2. та 2.6.3.",
                    },
                    { type: "text", text: "4.3. Виконавець зобов’язаний:" },
                    {
                        type: "text",
                        text: "4.3.1. Надати послуги якісно та у строки, встановлені цим Договором;",
                    },
                    {
                        type: "text",
                        text: "4.3.2. Не використовувати за межами виконання умов договору, не передавати  і не розголошувати отриману від Замовника інформацію, яка має конфіденційний характер та складає комерційну таємницю. Не передавати таку інформацію, яка стала відома внаслідок виконання Сторонами положень Договору, будь-яким третім особам і не використовувати створену документацію у своїй діяльності та у відносинах з третіми особами, не пов'язаними з виконанням цього Договору без письмового погодження із Замовником;",
                    },
                    { type: "text", text: "4.4. Виконавець має право:" },
                    {
                        type: "text",
                        text: "4.4.1. Своєчасно та в повному обсязі отримувати плату за надані послуги в порядку, визначеному цим Договором;",
                    },
                    {
                        type: "text",
                        text: "4.4.2. У разі невиконання Замовником зобов'язань щодо оплати наданих Послуг, достроково розірвати Договір, повідомивши про це Замовника за 30 (тридцять) робочих днів до дати розірвання Договору.",
                    },
                ],
            },
            {
                title: "<purple>Права</purple> інтелектуальної \nвласності",
                content: [
                    {
                        type: "text",
                        text: "5.1. Всі виключні майнові права інтелектуальної власності на об'єкти права інтелектуальної власності, створені Виконавцем під час надання Послуг за цим Договором  переходять до Замовника у тому числі право на використання, відтворення, розповсюдження, публічну демонстрацію, адаптацію та інші дії, передбачені ст. 427 ЦК України. ",
                    },
                    {
                        type: "text",
                        text: "5.2. Момент переходу майнових прав інтелектуальної власності від Виконавця до Замовника настає після  повної оплати Послуг за цим Договором.",
                    },
                    {
                        type: "text",
                        text: "5.3. Обсяг прав, що передаються відповідно до визначених об'єктів інтелектуальної власності,  узгоджується і фіксуються Сторонами в додатковій угоді до Договору.",
                    },
                    {
                        type: "text",
                        text: "5.4. Виконавець зберігає право використовувати, створені ним об'єкти інтелектуальної власності, в тому числі користуватися немайновими правами інтелектуальної власності, зокрема, у своєму Портфоліо, за умови дотримання законодавства у сфері інтелектуальної власності, та якщо це не порушує конфіденційність. ",
                    },
                ],
            },
            {
                title: "<purple>Відповідальність</purple> Сторін та порядок <purple>вирішення</purple> спорів",
                content: [
                    {
                        type: "text",
                        text: "6.1. У разі невиконання або неналежного виконання своїх зобов’язань за Договором, Сторони несуть відповідальність, передбачену чинним законодавством України та цим Договором.",
                    },
                    {
                        type: "text",
                        text: "6.2. У разі невиконання або несвоєчасного виконання своїх зобов'язань, Сторони  несуть відповідальність у вигляді штрафних санкцій (неустойка, штраф, пеня) у розмірі та на умовах, визначених у Брифі або Технічному завданні, що є невід'ємним додатком до Договору. Відсутність таких санкцій у додатках не знімає відповідальності згідно з ЦКУ. У разі їх відсутності застосовуються норми ст. 611 ЦК України.",
                    },

                    {
                        type: "text",
                        text: "6.3. Усі спори, що пов’язані із цим Договором, або такі, що виникають в процесі виконання умов цього Договору, вирішуються шляхом переговорів між представниками Сторін. Якщо спір неможливо вирішити шляхом переговорів, він вирішується у судовому порядку за рахунок позивача.",
                    },
                ],
            },
            {
                title: "<purple>Обставини</purple> \nнепереборної сили",
                content: [
                    {
                        type: "text",
                        text: "7.1. Сторони звільняються від відповідальності за невиконання або неналежне виконання зобов’язань за цим Договором у разі виникнення обставин непереборної сили, які не існували на момент прийняття Акцепту та виникли поза волею Сторін (аварія, катастрофа, стихійне лихо, епідемія, війна або її загострення на території країни Виконавця та пов'язані з цим ризики типу перебої з електропостачанням або зв’язком) і які Сторона об'єктивно не могла передбачити і запобігти, якщо ці обставини перешкоджають належному виконанню Стороною її зобов'язань за цим Договором.",
                    },
                    {
                        type: "text",
                        text: "7.2. Якщо на території за місцем розташування Замовника або Виконавця  розпочнеться ведення воєнних дій (активних бойових дій), які унеможливлюють виконання договірних зобов’язань Сторонами, такі обставини вважаються обставинами непереборної сили.",
                    },
                    {
                        type: "text",
                        text: "7.3. Сторона, що не може виконувати зобов’язання за цим Договором внаслідок дії обставин непереборної сили, повинна повідомити про це іншу Сторону у письмовій формі протягом 10 (десяти) календарних днів з дати їх виникнення.",
                    },
                    {
                        type: "text",
                        text: "7.4. Строки виконання зобов’язань Сторін за Договором можуть бути перенесені (продовжені) на строк, протягом якого діють обставини непереборної сили та їх наслідки.",
                    },
                    {
                        type: "text",
                        text: "7.5. У разі, коли строк дії обставин непереборної сили продовжується більше ніж 30 (тридцяти) календарних днів, а Сторони шляхом переговорів дійдуть висновку про неможливість подальшого виконання умов цього Договору, кожна зі Сторін має право розірвати цей Договір згідно з умовами , описаними у пункті 4.2.3.",
                    },
                    {
                        type: "text",
                        text: "7.6. Форс-мажор не звільняє від обов'язку оплатити вже надані послуги.",
                    },
                ],
            },
            {
                title: "<purple>Строк</purple> \nдії договору",
                content: [
                    {
                        type: "text",
                        text: "8.1. Договір вважається укладеним після виконання Замовником (Акцепту), однієї з таких дій:",
                    },

                    {
                        type: "text",
                        text: "здійснення часткової або повної передоплати за Послуги згідно з Інвойсом;",
                    },
                    {
                        type: "text",
                        text: "письмове (в тому числі надіслане на електронну пошту - *email*) підтвердження Замовником згоди на отримання Послуг на умовах, викладених у комерційній пропозиції Виконавця;",
                    },
                    {
                        type: "text",
                        text: "заповнення онлайн-форми “Замовити” на Сайті Виконавця з проставленням відмітки про згоду з умовами даного Договору, та діє до повного виконання Сторонами своїх обов’язків за цим Договором.",
                    },
                    {
                        type: "text",
                        text: "8.2. Договір може бути достроково розірваний за взаємною письмовою згодою Сторін за умови виконання пункту  4.2.4 цього Договору. ",
                    },
                    {
                        type: "text",
                        text: "8.3. Закінчення строку дії договору не звільняє Сторони від відповідальності за його порушення, яке мало місце під час дії Договору.",
                    },
                ],
            },
            {
                title: "<purple>Інші</purple> \nумови",
                content: [
                    {
                        type: "text",
                        text: "9.1.  Даний Договір укладений при повному розумінні Сторонами його умов та термінології, українською мовою. Переклад тексту даного договору англійською та польською мовами розміщений на сайті за відповідними посиланнями *ofertaEN*  та *ofertaPL*.  У випадку виникнення будь-яких протиріч між україномовною версією Договору та версією, перекладеною на іншу мову, переважним є текст в україномовному варіанті.",
                    },
                    {
                        type: "text",
                        text: "9.2.  Усі додатки і доповнення до цього Договору, вчинені Сторонами під час його виконання, є його невід'ємною частиною і мають юридичну силу в разі, якщо вони викладені в письмовій формі, підписані Сторонами та скріплені печатками (у разі їх наявності).",
                    },
                    {
                        type: "text",
                        text: "9.3. Електронний обмін документами та повідомленнями в рамках цього Договору за електронними адресами, вказаними у цьому Договорі, вважається вчиненим сторонами в письмовій формі.",
                    },
                    {
                        type: "text",
                        text: "9.4. Сторони домовилися, що матеріали, інформація та відомості щодо даного Договору є конфіденційними та не можуть передаватися третім особам без попередньої письмової згоди на це іншої Сторони, крім випадків, якщо така передача пов’язана з вимогою компетентних органів,  документів для виконання Договору або сплати податків, інших обов’язкових платежів, а також у випадках, передбачених чинним законодавством України, що регулює зобов’язання Сторін Договору.",
                    },
                    {
                        type: "text",
                        text: "9.5. Сторони погоджують, що офіційними каналами зв'язку щодо виконання умов цього Договору є електронна пошта *email* та *emailSusanna*, і додатковими можуть вважатись інші електронні адреси та месенджери для комунікації в соціальних мережах із представниками Виконавця.",
                    },
                    {
                        type: "text",
                        text: "9.6. З метою дотримання положень законодавства про захист персональних даних Сторони, домовились, що  Складовою та невід’ємною частиною цього Договору є Політика конфіденційності та захисту даних Проєкту “і love my team” розміщена за посиланням:  *policy*.",
                    },
                    {
                        type: "text",
                        text: "9.7. Виконавець залишає за собою право змінювати або доповнювати умови даного Договору, розмістивши на цій сторінці відповідне повідомлення і нову редакцію Договору із зазначенням дати внесення останніх змін.",
                    },
                ],
            },
        ],
    },
    en: {
        title: "Public <purple>Offer</purple> Agreement for Ordering Services of the <purple>“i love my team”</purple> Project",
        description:
            "This document, the provisions of which are set forth below, constitutes a public agreement. In accordance with Articles 633 and 641 of the Civil Code of Ukraine, the terms of this public agreement (offer) are identical for all customers of the services provided by the “i love my team” Project.",
        definitions: {
            title: "Definitions of Terms",
            content: [
                {
                    title: "Offer (Agreement)",
                    text: "this document, addressed to all individuals and legal entities wishing to use the services of the “i love my team” Project, and posted on the website *site* at the link: *oferta*.",
                },
                {
                    title: "Agreement",
                    text: "the service contract concluded between the Contractor and the Customer at the moment of the Customer’s acceptance of this Agreement.",
                },
                {
                    title: "Website",
                    text: "the Contractor’s website at *site*.",
                },
                {
                    title: "Contractor",
                    text: "individual entrepreneur Ivan Grygorovych Salata, operating under the trade name of the “i love my team” Project.",
                },
                {
                    title: "Customer of services",
                    text: "any legally competent individual who is at least 18 years old, or a legal entity or individual entrepreneur who has read the terms of this Agreement and accepted them.",
                },
                {
                    title: "Acceptance",
                    text: "full and unconditional acceptance by the Customer of the terms of this Agreement, indicating the conclusion of the Agreement. Acceptance is considered to have occurred when the Customer performs any of the following actions: payment of the Invoice issued by the Contractor; making a partial or full prepayment for the Services; written confirmation (including by email to *email*) of the Customer’s consent to receive Services under the terms outlined in the Contractor’s commercial proposal; completing the online “Order” form on the Contractor’s Website and checking the box indicating agreement with the terms of this Agreement.",
                },
                {
                    title: "Services of the “i love my team” Project",
                    text: "information and consulting services related to the development of digital products, as well as individual or comprehensive services including business and competitor analysis, design, development, testing, and technical support of digital products, as described on the website at: *services*.",
                },
                {
                    title: "Invoice",
                    text: "a billing document issued by the Contractor to the Customer for payment of Services, containing the Contractor’s details, information about the Customer, a list of specific Services, their cost, payment terms, and potentially the time frame for service delivery.",
                },
                {
                    title: "Technical Specification (TS)",
                    text: "a document that may be drafted as an Appendix to the Agreement, which describes in detail the requirements, stages, functionality, deadlines, and other characteristics of the Services.",
                },
                {
                    title: "Brief",
                    text: "a document that is a mandatory appendix to the Agreement, which outlines the Customer’s business features, target audience profile, expectations, technical website capabilities, design requirements, budget, and timelines.",
                },
                {
                    title: "Privacy and Data Protection Policy",
                    text: "a document that defines the terms related to the collection, processing, use, and storage of personal data of service customers, participants of the “i love my team” Project, and visitors to the website *site*. The Privacy and Data Protection Policy of the “i love my team” Project is available at: *policy*, and is an integral part of the Agreement.",
                },
                {
                    title: "Parties",
                    text: "a collective term referring to both the Contractor and the Customer.",
                },
            ],
        },
        data: [
            {
                title: "<purple>Subject</purple> of \nthe Agreement",
                content: [
                    {
                        type: "text",
                        text: "1.1. The Contractor undertakes to provide the Customer with information and consulting services and/or services for the development of digital products, and the Customer undertakes to accept and pay for such Services under the terms of this Agreement.",
                    },
                    {
                        type: "text",
                        text: "1.2. The names of the Services, units of measurement, quantity, price per unit of service, penalties, the method of determining the Agreement price, and the stages of service delivery provided under the terms of this Agreement shall be agreed upon by the Parties and specified in the Brief or Technical Specification, which form an integral part of this Agreement.",
                    },
                    {
                        type: "text",
                        text: "1.3. The Contractor guarantees compliance with copyright, related rights, or other third-party rights during the performance of its obligations under this Agreement.",
                    },
                ],
            },
            {
                title: "Agreement <purple>Price</purple> and <purple>Payment</purple> Procedure",
                content: [
                    {
                        type: "text",
                        text: "2.1. The Agreement price consists of the total cost of the Services provided to the Customer during the term of this Agreement.",
                    },
                    {
                        type: "text",
                        text: "2.2. The price for the Services is specified in the invoice in the national currency of Ukraine and includes all direct expenses of the Contractor related to the fulfillment of its obligations under the Agreement, including taxes, fees, and mandatory payments payable or to be paid by the Contractor.",
                    },

                    {
                        type: "text",
                        text: "2.2.1. For Customers who are not residents of Ukraine and do not have bank accounts in Ukraine and are unable to make payments in the national currency, the price for the Services may be specified in a foreign currency—Euro (EUR) or US Dollars (USD).",
                    },
                    {
                        type: "text",
                        text: "2.3. All bank fees and other charges levied by the Customer’s bank (whether resident or non-resident), as well as by correspondent banks (in case of international payments by non-resident Customers), related to the transfer of funds, shall be fully paid by the Customer.",
                    },
                    {
                        type: "text",
                        text: "2.4. The Contractor is only responsible for paying the fees charged by its bank in Ukraine related to the receipt of funds. The amount to be credited to the Contractor’s account must match the full amount specified in the Invoice.",
                    },
                    {
                        type: "text",
                        text: "2.5. The method of determining the Agreement price—Fixed Price, Time & Materials, or Milestone-based pricing—shall be determined and agreed upon by the Parties in the Brief and the Technical Specification, or in the relevant Invoice, which are integral parts of this Agreement.",
                    },
                    {
                        type: "text",
                        text: "2.6. Payments for the Services shall be made via bank transfer under the terms set out in clauses 2.6.1 to 2.6.3 of this Agreement by transferring funds to the Contractor’s bank accounts specified in the Invoice.",
                    },
                    {
                        type: "text",
                        text: "2.6.1. Payment for Services provided by the Contractor on a Fixed Price basis shall be made by the Customer either as a 50% prepayment of the Agreement price and 50% upon full completion of the Services, or as 100% post-payment based on the Contractor’s Invoice within three (3) business days.",
                    },
                    {
                        type: "text",
                        text: "2.6.2. Payment for Services provided by the Contractor on a Time & Materials basis shall be made by the Customer twice a month, based on the number of hours actually worked by the Contractor’s specialists and the hourly rates agreed upon in the Technical Specification, as indicated in the relevant Invoice issued together with a report on time spent specifying the completed tasks, within three (3) business days from the date of the Invoice.",
                    },
                    {
                        type: "text",
                        text: "2.6.3. Payment for Services provided by the Contractor on a Milestone basis shall be made by the Customer as a 100% prepayment for the first milestone, and for each subsequent milestone after the full completion and acceptance of work under the previous milestone, based on the Invoices issued by the Contractor within three (3) business days from the date of the Invoice.",
                    },
                    {
                        type: "text",
                        text: "2.7. The Agreement price may be increased if, during the provision of Services under the Fixed Price or Milestone model, additional work outside the initially agreed scope specified in the Brief and the Technical Specification becomes necessary. The cost, deadlines, and procedure for such work shall be agreed upon by the Parties separately. These changes shall be formalized as a separate Appendix to the Agreement and paid for by the Customer based on a separate Invoice.",
                    },
                    {
                        type: "text",
                        text: "2.8. Payment by the Customer for the Contractor’s Invoice confirms the unconditional acceptance of the Services provided in full.",
                    },
                    {
                        type: "text",
                        text: "2.9. The Customer’s obligation to pay for the Services under this Agreement shall be deemed fulfilled at the moment the funds are credited to the Contractor’s account.",
                    },
                ],
            },
            {
                title: "<purple>Terms</purple> and <purple>Procedure </purple> \nfor Service Delivery",
                content: [
                    {
                        type: "text",
                        text: "3.1. The timeframe for the provision of Services shall be determined by the Parties in the Brief or Technical Specification, which are integral appendices to this Agreement.",
                    },
                    {
                        type: "text",
                        text: "3.2. The Services shall be provided by the Contractor remotely.",
                    },
                    {
                        type: "text",
                        text: "3.3. Upon completion of the Services, the Contractor shall send the Customer an Invoice via email or other official telecommunications means specified in Clause 9.6 of this Agreement, indicating payment deadlines and the documentation agreed upon by the Parties in the Brief or Technical Specification. The Customer shall, within ten (10) business days, pay the final Invoice, thereby confirming the acceptance of the work in full, or within the same period provide a reasoned refusal specifying the reasons for such refusal.",
                    },
                    {
                        type: "text",
                        text: "3.4. The obligation to prepare the final Invoice and the documentation agreed upon by the Parties in the Brief or Technical Specification rests with the Contractor.",
                    },
                    {
                        type: "text",
                        text: "3.5. The date of acceptance of the Services in full shall be the date of payment of the Invoice with a payment term of ten (10) days.",
                    },
                    {
                        type: "text",
                        text: "3.6. If the Contractor does not receive a reasoned refusal within the period established in Clause 3.3 of this Agreement, the Services shall be deemed fully provided from the date of payment of the final Invoice.",
                    },
                    {
                        type: "text",
                        text: "3.7. The Parties agree that this Agreement, its Appendices, Additional Agreements, as well as documents related to its execution, may be concluded by the Parties in the form of an electronic document using a qualified electronic signature. Such documents, sent to each other via telecommunications means or on electronic media, shall be considered originals.",
                    },
                    {
                        type: "text",
                        text: "3.8. An electronic document shall be considered concluded and signed by both Parties on the date specified in the text of such electronic document.",
                    },
                    {
                        type: "text",
                        text: '3.9. The use of electronic document management and telecommunications by the Parties shall be carried out in accordance with the Laws of Ukraine "On Electronic Documents and Electronic Document Management," "On Electronic Identification and Electronic Trust Services," and "On Electronic Commerce".',
                    },
                ],
            },
            {
                title: "<purple>Rights</purple> and <purple>Obligations</purple> \nof the Parties",
                content: [
                    { type: "text", text: "4.1. The Customer shall:" },
                    {
                        type: "text",
                        text: "4.1.1. Make timely and full payment for the Services in accordance with the issued Invoices;",
                    },

                    {
                        type: "text",
                        text: "4.1.2. Accept the Services provided in accordance with the terms of this Agreement or submit a reasoned refusal within the period specified in this Agreement;",
                    },
                    {
                        type: "text",
                        text: "4.1.3. Upon the Contractor’s request, provide the Contractor with information necessary for the provision of the Services under this Agreement, within the agreed timeframe;",
                    },
                    {
                        type: "text",
                        text: "4.1.4. Either personally interact with the Contractor’s specialists or appoint a person responsible for such interaction to ensure the proper provision of the Services by the Contractor;",
                    },
                    {
                        type: "text",
                        text: "4.1.5. Upon the Contractor’s request, approve in writing any changes to the Technical Specification proposed by the Customer.",
                    },
                    {
                        type: "text",
                        text: "4.2. The Customer shall have the right to:",
                    },
                    {
                        type: "text",
                        text: "4.2.1. Require the Contractor to provide the Services within the timeframe specified in this Agreement and in the scope agreed by the Parties;",
                    },
                    {
                        type: "text",
                        text: "4.2.2. Increase or decrease the scope of the ordered Services, provided that the Customer notifies the Contractor in writing at least thirty (30) business days before the date of implementation of such changes to the scope of the Agreement;",
                    },
                    {
                        type: "text",
                        text: "4.2.3. Refuse the Services of the Contractor prior to the expiration of this Agreement by notifying the Contractor in writing through official communication channels no later than thirty (30) business days in advance and by making payments to the Contractor for the Services actually provided, plus payment for the subsequent thirty (30) business days, calculated based on the previous comparable period (Time & Materials) or the next work stage (Milestone), in accordance with the terms of this Agreement set forth in Clauses 2.6.2 and 2.6.3.",
                    },
                    { type: "text", text: "4.3. The Contractor shall:" },
                    {
                        type: "text",
                        text: "4.3.1. Provide the Services in a quality manner and within the timeframe specified in this Agreement;",
                    },
                    {
                        type: "text",
                        text: "4.3.2. Not use, transfer, or disclose any information received from the Customer that is confidential or constitutes a trade secret beyond what is necessary for the performance of this Agreement. The Contractor shall not disclose such information obtained in connection with the performance of this Agreement to any third parties or use any created documentation in its own activities or in relations with third parties not related to the performance of this Agreement, without the prior written consent of the Customer.",
                    },
                    {
                        type: "text",
                        text: "4.4. The Contractor shall have the right to:",
                    },
                    {
                        type: "text",
                        text: "4.4.1. Timely and fully receive payment for the Services provided in accordance with this Agreement;",
                    },
                    {
                        type: "text",
                        text: "4.4.2. In the event of non-fulfillment by the Customer of its obligations to pay for the Services provided, terminate this Agreement early by notifying the Customer in writing thirty (30) business days prior to the termination date.",
                    },
                ],
            },
            {
                title: "Intellectual Property \n<purple>Rights</purple>",
                content: [
                    {
                        type: "text",
                        text: "5.1. All exclusive proprietary intellectual property rights to the intellectual property objects created by the Contractor during the provision of Services under this Agreement shall transfer to the Customer, including the right to use, reproduce, distribute, publicly display, adapt, and perform other actions provided for in Article 427 of the Civil Code of Ukraine.",
                    },
                    {
                        type: "text",
                        text: "5.2. The moment of transfer of proprietary intellectual property rights from the Contractor to the Customer shall occur upon full payment for the Services under this Agreement.",
                    },
                    {
                        type: "text",
                        text: "5.3. The scope of rights transferred in respect of the defined intellectual property objects shall be agreed upon and documented by the Parties in a supplementary agreement to this Agreement.",
                    },
                    {
                        type: "text",
                        text: "5.4. The Contractor retains the right to use the created intellectual property objects, including the right to exercise non-proprietary intellectual property rights, in particular in its Portfolio, provided that such use complies with intellectual property legislation and does not violate confidentiality.",
                    },
                ],
            },
            {
                title: "<purple>Liability</purple>of the Parties and Dispute <purple>Resolution</purple> Procedure",
                content: [
                    {
                        type: "text",
                        text: "6.1. In the event of non-fulfillment or improper fulfillment of their obligations under this Agreement, the Parties shall bear liability as provided by the applicable legislation of Ukraine and this Agreement.",
                    },
                    {
                        type: "text",
                        text: "6.2. In the event of non-fulfillment or untimely fulfillment of their obligations, the Parties shall be liable in the form of penalties (liquidated damages, fines, or penalties) in the amount and on the terms specified in the Brief or Technical Specification, which are integral appendices to this Agreement. The absence of such penalties in the appendices shall not release the Parties from liability in accordance with the Civil Code of Ukraine. If such penalties are not specified, the provisions of Article 611 of the Civil Code of Ukraine shall apply.",
                    },

                    {
                        type: "text",
                        text: "6.3. All disputes arising out of or in connection with this Agreement, or those arising during the performance of the terms of this Agreement, shall be resolved through negotiations between the authorized representatives of the Parties. If the dispute cannot be resolved through negotiations, it shall be settled in court at the expense of the claimant.",
                    },
                ],
            },
            {
                title: "<purple>Force</purple> \nMajeure",
                content: [
                    {
                        type: "text",
                        text: "7.1. The Parties shall be released from liability for non-fulfillment or improper fulfillment of their obligations under this Agreement in the event of force majeure circumstances that did not exist at the time of acceptance of the Offer and that arise beyond the control of the Parties (accidents, disasters, natural calamities, epidemics, war or its escalation on the territory of the Contractor’s country and related risks such as interruptions in power supply or communication) which the Party could not have objectively foreseen or prevented, if these circumstances impede the proper fulfillment by the Party of its obligations under this Agreement.",
                    },
                    {
                        type: "text",
                        text: "7.2. If military actions (active hostilities) that make it impossible for the Parties to fulfill their contractual obligations commence on the territory of either the Client or the Contractor, such circumstances shall be considered force majeure.",
                    },
                    {
                        type: "text",
                        text: "7.3. A Party that is unable to fulfill its obligations under this Agreement due to force majeure shall notify the other Party in writing within ten (10) calendar days from the date of occurrence of such circumstances.",
                    },
                    {
                        type: "text",
                        text: "7.4. The deadlines for the Parties’ performance under this Agreement may be extended for the duration of the force majeure circumstances and their consequences.",
                    },
                    {
                        type: "text",
                        text: "7.5. If the force majeure circumstances continue for more than thirty (30) calendar days, and the Parties, through negotiations, conclude that it is impossible to continue performing the obligations under this Agreement, either Party shall have the right to terminate this Agreement in accordance with the terms described in Clause 4.2.3.",
                    },
                    {
                        type: "text",
                        text: "7.6. Force majeure does not release either Party from the obligation to pay for the services already rendered.",
                    },
                ],
            },
            {
                title: "<purple>Term</purple> \nof the Agreement",
                content: [
                    {
                        type: "text",
                        text: "8.1. This Agreement shall remain in effect until the Parties fully perform their obligations under this Agreement after the Client (Acceptance) performs any of the following actions:",
                    },

                    {
                        type: "text",
                        text: "making a partial or full prepayment for the Services in accordance with the Invoice;",
                    },
                    {
                        type: "text",
                        text: "providing written confirmation (including via email sent to *email*) f their consent to receive the Services under the terms set out in the Contractor’s commercial offer;",
                    },
                    {
                        type: "text",
                        text: 'completing the "Order" online form on the Contractor’s Website and indicating acceptance of the terms of this Agreement.',
                    },
                    {
                        type: "text",
                        text: "8.2. The Agreement may be terminated early by mutual written consent of the Parties, provided that Clause 4.2.4 of this Agreement has been fulfilled.",
                    },
                    {
                        type: "text",
                        text: "8.3. Expiration of the term of this Agreement shall not release the Parties from liability for any breaches that occurred during the term of the Agreement.",
                    },
                ],
            },
            {
                title: "<purple>Other</purple> Terms \nand Conditions",
                content: [
                    {
                        type: "text",
                        text: "9.1. This Agreement is concluded in Ukrainian, with the Parties fully understanding its terms and terminology. Ukrainian and Polish translations of this Agreement are available on the website at the following links: *ofertaUA*  та *ofertaPL*. In the event of any discrepancies between the Ukrainian version and the translated versions, the Ukrainian text shall prevail.",
                    },
                    {
                        type: "text",
                        text: "9.2. All annexes and amendments to this Agreement made by the Parties during its performance shall form an integral part of this Agreement and shall be legally binding if made in writing, signed by the Parties, and affixed with their seals (if available).",
                    },
                    {
                        type: "text",
                        text: "9.3. Electronic exchange of documents and notices under this Agreement via the email addresses specified in this Agreement shall be considered as performed in writing.",
                    },
                    {
                        type: "text",
                        text: "9.4. The Parties agree that the materials, information, and data regarding this Agreement are confidential and shall not be disclosed to third parties without the prior written consent of the other Party, except where such disclosure is required by competent authorities, documents required for the performance of the Agreement or the payment of taxes or other mandatory payments, as well as in cases provided for by the applicable laws of Ukraine governing the Parties’ obligations under this Agreement.",
                    },
                    {
                        type: "text",
                        text: "9.5. The Parties agree that the official channels of communication for fulfilling the terms of this Agreement are the email addresses *email* and *emailSusanna*. Additional email addresses and messengers for social media communication with the Contractor’s representatives may also be used.",
                    },
                    {
                        type: "text",
                        text: "9.6. For the purpose of complying with data protection legislation, the Parties agree that the Privacy and Data Protection Policy of the “i love my team” Project, published at the following link: *policy*, constitutes an integral and inseparable part of this Agreement.",
                    },
                    {
                        type: "text",
                        text: "9.7. The Contractor reserves the right to amend or supplement the terms of this Agreement by posting an appropriate notice and a new version of the Agreement on this page, specifying the date of the most recent changes.",
                    },
                ],
            },
        ],
    },
    pl: {
        title: "Zamówienie publiczne <purple>(oferta)</purple> na świadczenie usług w ramach Projektu <purple>“i love my team”</purple>",
        description:
            "Niniejszy dokument, którego postanowienia są określone poniżej, jest umową publiczną. Zgodnie z postanowieniami art. 633, 641 Kodeksu Cywilnego Ukrainy, warunki zamówienia publicznego (oferty) są takie same dla wszystkich Klientów usług Projektu „i love my team”.",
        definitions: {
            title: "Definicje pojęć",
            content: [
                {
                    title: "Oferta (Umowa)",
                    text: "niniejszy dokument skierowany do wszystkich osób fizycznych i prawnych zainteresowanych skorzystaniem z usług Projektu „i love my team”, zamieszczonych na stronie internetowej *site* od adresem: *oferta*.",
                },
                {
                    title: "Umowa",
                    text: "umowa o świadczenie usług zawarta pomiędzy Wykonawcą a Klientem w momencie akceptacji niniejszej Umowy przez Klienta.",
                },
                {
                    title: "Strona internetowa",
                    text: "witryna internetowa Wykonawcy dostępna pod adresem *site*.",
                },
                {
                    title: "Wykonawca",
                    text: "osoba fizyczna prowadząca działalność gospodarczą, Iwan Hryhorowycz Salata, działająca pod nazwą handlową Projekt „i love my team”.",
                },
                {
                    title: "Zamawiający",
                    text: "każda pełnoletnia osoba fizyczna posiadająca pełną zdolność do czynności prawnych, osoba prawna lub osoba fizyczna prowadząca działalność gospodarczą, która zapoznała się z treścią niniejszej Umowy i dokonała jej Akceptacji.",
                },
                {
                    title: "Akceptacja (Akcept)",
                    text: "pełna i bezwarunkowa zgoda Klienta na warunki niniejszej Umowy, która oznacza zawarcie Umowy. Za Akceptację uważa się wykonanie jednej z poniższych czynności: opłacenie faktury wystawionej przez Wykonawcę; dokonanie częściowej lub pełnej przedpłaty za Usługi; pisemne (w tym przesłane na adres e-mail: *email*) potwierdzenie przez Klienta zgody na skorzystanie z Usług na warunkach przedstawionych w ofercie handlowej Wykonawcy; wypełnienie formularza online „Zamów” na Stronie internetowej Wykonawcy wraz ze zaznaczeniem zgody na warunki niniejszej Umowy.",
                },
                {
                    title: "Usługi Projektu ”i love my team”",
                    text: "usługi informacyjno-konsultacyjne dotyczące tworzenia produktów cyfrowych oraz pojedyncze lub kompleksowe usługi w zakresie analizy biznesu i konkurencji, projektowania, programowania, testowania i wsparcia technicznego produktów cyfrowych, opisane na stronie internetowej pod adresem: *services*.",
                },
                {
                    title: "Faktura (rachunek, invoice)",
                    text: "dokument rozliczeniowy wystawiany przez Wykonawcę na rzecz Klienta w celu zapłaty za Usługi, zawierający dane Wykonawcy i Klienta, wykaz zamówionych Usług, ich cenę, terminy płatności oraz – w razie potrzeby – terminy realizacji Usług.",
                },
                {
                    title: "Specyfikacja techniczna (ST)",
                    text: "lub Specyfikacji Istotnych Warunków Zamówienia – dokument mogący stanowić załącznik do Umowy, szczegółowo opisujący wymagania, etapy, funkcjonalność, terminy wykonania oraz inne cechy Usług.",
                },
                {
                    title: "Brief ",
                    text: "dokument stanowiący obowiązkowy załącznik do Umowy, w którym opisane są cechy działalności biznesowej Klienta, profil odbiorcy, oczekiwania Klienta, możliwości techniczne strony internetowej, wymagania dotyczące wyglądu, budżet oraz harmonogram realizacji.",
                },
                {
                    title: "Polityka prywatności i ochrony danych osobowych",
                    text: "dokument określający zasady związane z gromadzeniem, przetwarzaniem, wykorzystywaniem i przechowywaniem danych osobowych Klientów, uczestników Projektu „i love my team” oraz użytkowników strony internetowej *site*. Polityka prywatności i ochrony danych osobowych Projektu „i love my team” dostępna jest pod adresem: *policy* i stanowi integralną część niniejszej Umowy.",
                },
                {
                    title: "Strony",
                    text: "łączne określenie Wykonawcy i Klienta.",
                },
            ],
        },
        data: [
            {
                title: "<purple>Przedmiot</purple> \nUmowy",
                content: [
                    {
                        type: "text",
                        text: "1.1. Wykonawca zobowiązuje się do świadczenia na rzecz Klienta usług informacyjnych i doradczych i/lub usług rozwoju produktów cyfrowych, a Klient zobowiązuje się do przyjęcia i zapłaty za takie Usługi na warunkach określonych w niniejszej Umowie.",
                    },
                    {
                        type: "text",
                        text: "1.2.  Nazwa Usług, jednostki miary, ilość, cena za jednostkę usługi, kary, sposób ustalania ceny Umowy oraz etapy realizacji Usług świadczonych na podstawie niniejszej Umowy zostaną uzgodnione przez Strony i zapisane w Briefie lub Specyfikacji Istotnych Warunków Zamówienia, które stanowią integralną część niniejszej Umowy.",
                    },
                    {
                        type: "text",
                        text: "1.3. Wykonawca gwarantuje przestrzeganie praw autorskich, praw pokrewnych lub innych praw osób trzecich w trakcie wypełniania swoich zobowiązań wynikających z Umowy.",
                    },
                ],
            },
            {
                title: "<purple>Cena</purple> Umowy i \nzasady <purple>rozliczeń</purple>",
                content: [
                    {
                        type: "text",
                        text: "2.1. Cena Umowy składa się z łącznej wartości Usług świadczonych Klientowi przez cały okres obowiązywania Umowy.",
                    },
                    {
                        type: "text",
                        text: "2.2. Cena za Usługi wskazana jest w fakturze (invoicie) w walucie narodowej Ukrainy i obejmuje wszystkie bezpośrednie koszty Wykonawcy związane z realizacją jego zobowiązań wynikających z Umowy, w tym koszty podatków, opłat oraz innych obowiązkowych należności, które są lub mogą być należne do zapłaty przez Wykonawcę.",
                    },

                    {
                        type: "text",
                        text: "2.2.1. W przypadku Klientów, którzy nie są rezydentami Ukrainy, nie posiadają konta w ukraińskim banku i nie mają możliwości dokonania płatności w walucie narodowej, cena za Usługi może zostać ustalona w walucie obcej – euro (EUR) lub dolarach amerykańskich (USD).",
                    },
                    {
                        type: "text",
                        text: "2.3. Wszelkie opłaty bankowe oraz inne prowizje pobierane przez bank Klienta (zarówno rezydenta, jak i nierezydenta), a także przez banki pośredniczące (w przypadku płatności międzynarodowych od Klienta-nierezydenta), pokrywa w całości Klient.",
                    },
                    {
                        type: "text",
                        text: "2.4. Wykonawca ponosi odpowiedzialność wyłącznie za opłaty swojego banku w Ukrainie związane z przyjęciem środków. Kwota, która ma zostać zaksięgowana na koncie Wykonawcy, powinna odpowiadać pełnej wartości wskazanej na fakturze (invoicie).",
                    },
                    {
                        type: "text",
                        text: "2.5. Sposób ustalenia ceny Umowy według modeli: cena stała (Fixed Price), stawka godzinowa (Time & Materials) lub według etapów prac (Milestone) określany i uzgadniany jest przez Strony w Briefie oraz Specyfikacji Technicznej lub odpowiedniej fakturze, stanowiących integralne załączniki do Umowy.",
                    },
                    {
                        type: "text",
                        text: "2.6. Rozliczenie za Usługi odbywa się w formie bezgotówkowej na warunkach określonych w punktach 2.6.1–2.6.3 Umowy poprzez przelew środków pieniężnych na wskazane rachunki rozliczeniowe Wykonawcy, podane w fakturze.",
                    },
                    {
                        type: "text",
                        text: "2.6.1. Rozliczenie za Usługi świadczone przez Wykonawcę według modelu cena stała (Fixed Price) odbywa się poprzez przedpłatę w wysokości 50% ceny Umowy oraz 50% po pełnym wykonaniu usług albo 100% w formie płatności po wykonaniu na podstawie wystawionej faktury, w ciągu 3 (trzech) dni roboczych.",
                    },
                    {
                        type: "text",
                        text: "2.6.2. Rozliczenie za Usługi świadczone według stawki godzinowej (modelu Time & Materials) odbywa się dwa razy w miesiącu, na podstawie rzeczywistego czasu pracy specjalistów Wykonawcy oraz uzgodnionych stawek godzinowych, określonych w Specyfikacji Technicznej, i zgodnie z odpowiednią fakturą, przesyłaną Klientowi wraz z raportem zawierającym czas pracy i wykonane zadania – w terminie 3 (trzech) dni roboczych od daty wysłania faktury.",
                    },
                    {
                        type: "text",
                        text: "2.6.3. Rozliczenie za Usługi świadczone według etapów prac (modelu Milestone) odbywa się poprzez 100% przedpłatę za pierwszy etap oraz za każdy kolejny etap po jego pełnym zakończeniu i akceptacji wyników poprzedniego etapu – na podstawie faktur wystawionych przez Wykonawcę w terminie 3 (trzech) dni roboczych od daty faktury.",
                    },
                    {
                        type: "text",
                        text: "2.7. Cena Umowy może ulec zwiększeniu, jeżeli w trakcie świadczenia Usług w modelu Fixed Price lub Milestone zaistnieje konieczność wykonania prac wykraczających poza pierwotnie uzgodniony zakres, określony w Briefie i Specyfikacji Technicznej. Koszty, terminy oraz sposób realizacji tych dodatkowych prac są ustalane przez Strony osobno. Takie zmiany są dokumentowane w formie oddzielnego Załącznika do Umowy i opłacane przez Klienta na podstawie odrębnej faktury.",
                    },
                    {
                        type: "text",
                        text: "2.8. Dokonanie przez Lkienta płatności za Usługi na podstawie faktury Wykonawcy jest równoznaczne z bezwarunkowym przyjęciem wykonanych Usług w pełnym zakresie.",
                    },
                    {
                        type: "text",
                        text: "2.9. Zobowiązanie Klienta do zapłaty za Usługi na podstawie niniejszej Umowy uznaje się za wykonane w momencie zaksięgowania środków na rachunku Wykonawcy.",
                    },
                ],
            },
            {
                title: "<purple>Warunki</purple> i <purple>procedura</purple> \nświadczenia usług",
                content: [
                    {
                        type: "text",
                        text: "3.1. Okres świadczenia Usług zostanie określony w drodze porozumienia Stron w Briefie lub Specyfikacji Istotnych Warunków Zamówienia, które stanowią integralną część niniejszej Umowy.",
                    },
                    {
                        type: "text",
                        text: "3.2. Usługi będą świadczone przez Wykonawcę zdalnie.",
                    },
                    {
                        type: "text",
                        text: "3.3. Po zakończeniu świadczenia Usług Wykonawca prześle Klientowi za pośrednictwem poczty elektronicznej lub innych oficjalnych środków telekomunikacji określonych w punkcie 9.6 Umowy fakturę wraz z określonymi warunkami płatności i dokumentacją uzgodnioną przez Strony w Briefie lub Specyfikacji Istotnych Warunków Zamówienia. Zamawiający będzie zobowiązany do dokonania płatności na podstawie faktury końcowej w ciągu 10 (dziesięciu) dni roboczych, potwierdzając w ten sposób przyjęcie dzieła w całości, lub w tym samym terminie do przedstawienia uzasadnionej odmowy, wskazując powody takiej odmowy.",
                    },
                    {
                        type: "text",
                        text: "3.4 Obowiązek wystawienia faktury końcowej oraz dokumentacji określonej przez Strony w Briefie lub Specyfikacji Istotnych Warunków Zamówienia obciąża Wykonawcę.",
                    },
                    {
                        type: "text",
                        text: "3.5. Datą odbioru całości wykonanych Usług jest data wysłania płatności wynikającej z Faktury z terminem płatności wynoszącym 10 (dziesięć) dni. ",
                    },
                    {
                        type: "text",
                        text: "3.6. Jeżeli Wykonawca nie otrzyma uzasadnionej odmowy w terminie określonym w punkcie 3.3 Umowy, Usługi uznaje się za wykonane w całości od daty płatności faktury końcowej.",
                    },
                    {
                        type: "text",
                        text: "3.7. Strony postanawiają, że niniejsza Umowa, jej Załączniki i Umowy Dodatkowe, a także dokumenty związane z jej wykonaniem, mogą być zawierane przez Strony w formie dokumentu elektronicznego opatrzonego kwalifikowanym podpisem elektronicznym. Takie dokumenty przesłane sobie wzajemnie za pomocą środków telekomunikacyjnych lub na nośnikach elektronicznych będą uważane za oryginały.",
                    },
                    {
                        type: "text",
                        text: "3.8. Dokument elektroniczny uważa się za zawarty przez Strony i podpisany przez obie Strony w dniu określonym w treści takiego dokumentu elektronicznego.",
                    },
                    {
                        type: "text",
                        text: "3.9. Strony będą korzystać ze środków elektronicznego zarządzania dokumentami i środków telekomunikacyjnych zgodnie z Ustawami Ukrainy „O dokumentach elektronicznych i elektronicznym zarządzaniu dokumentami” oraz „O identyfikacji elektronicznej i elektronicznych usługach zaufania”, a także „O handlu elektronicznym”.",
                    },
                ],
            },
            {
                title: "<purple>Prawa</purple> i \n<purple>obowiązki</purple> stron",
                content: [
                    { type: "text", text: "4.1. Klient jest obowiązany do:" },
                    {
                        type: "text",
                        text: "4.1.1. Terminowego i pełnego opłacenia kosztów Usług zgodnie z wystawionymi Fakturami;",
                    },

                    {
                        type: "text",
                        text: "4.1.2. Zaakceptowania Usług świadczonych zgodnie z warunkami niniejszych Warunków lub odmowy poprzez przesłanie uzasadnionej odmowy w terminie określonym w niniejszych Warunkach;",
                    },
                    {
                        type: "text",
                        text: "4.1.3. Na żądanie Kontrahenta udzielenia mu informacji niezbędnych do świadczenia usług na podstawie niniejszej Umowy w uzgodnionym terminie;",
                    },
                    {
                        type: "text",
                        text: "4.1.4. Współdziałania z samym Wykonawcą lub wyznaczenia osoby odpowiedzialnej za współdziałanie ze specjalistami Wykonawcy w zakresie świadczenia usług przez Wykonawcę na podstawie niniejszej Umowy;",
                    },
                    {
                        type: "text",
                        text: "4.1.5. Na wniosek Wykonawcy uzgodnić i zatwierdzić na piśmie zmiany w Specyfikacji Istotnych Warunków Zamówienia zaproponowane przez Klienta.",
                    },
                    { type: "text", text: "4.2. Klient ma prawo:" },
                    {
                        type: "text",
                        text: "4.2.1. Wymagać od Wykonawcy świadczenia usług na warunkach określonych w niniejszej Umowie i w zakresie uzgodnionym przez Strony.",
                    },
                    {
                        type: "text",
                        text: "4.2.2. Zwiększyć lub zmniejszyć zakres zamówionych usług. W takim przypadku Klient powiadomi Wykonawcę na piśmie o zwiększeniu lub zmniejszeniu zakresu usług co najmniej 30 dni roboczych przed datą wprowadzenia takich zmian w zakresie Umowy.",
                    },
                    {
                        type: "text",
                        text: "4.2.3.  Odmowy świadczenia usług przez Wykonawcę przed wygaśnięciem Umowy poprzez powiadomienie Wykonawcy na piśmie za pośrednictwem oficjalnych kanałów komunikacji nie później niż 30 (trzydzieści) dni roboczych wcześniej i dokonanie płatności za faktycznie wykonane usługi + płatność za kolejne 30 dni roboczych jak za poprzedni podobny okres (Czas i Materiały) lub kolejny etap prac (Kamień Milowy) zgodnie z warunkami niniejszej Umowy określonymi w klauzulach 2.6.2. i 2.6.3.",
                    },
                    { type: "text", text: "4.3. Wykonawca zobowiązany jest:" },
                    {
                        type: "text",
                        text: "4.3.1. Świadczyć usługi w sposób wysokiej jakości i w terminach określonych w niniejszej Umowie;",
                    },
                    {
                        type: "text",
                        text: "4.3.2. Nie wykorzystywać poza wypełnieniem warunków Umowy, nie przekazywać ani nie ujawniać informacji otrzymanych od Klienta, które są poufne i stanowią tajemnicę handlową. Nie przekazywać takich informacji, które stały się znane w wyniku realizacji przez Strony postanowień Umowy, osobom trzecim oraz nie wykorzystywać stworzonej dokumentacji w swojej działalności oraz w relacjach z osobami trzecimi niezwiązanymi z realizacją niniejszej Umowy bez pisemnej zgody Klienta;",
                    },
                    { type: "text", text: "4.4. Wykonawca ma prawo do:" },
                    {
                        type: "text",
                        text: "4.4.1. Terminowego i pełnego otrzymania zapłaty za wykonane usługi zgodnie z procedurą określoną w niniejszym dokumencie;",
                    },
                    {
                        type: "text",
                        text: "4.4.2. W przypadku niewypełnienia zobowiązań Klienta do zapłaty za świadczone Usługi, rozwiązać Umowę przed terminem, powiadamiając Klienta na 30 (trzydzieści) dni roboczych przed datą rozwiązania Umowy.",
                    },
                ],
            },
            {
                title: "<purple>Prawa</purple> własności \nintelektualnej",
                content: [
                    {
                        type: "text",
                        text: "5.1. Wszelkie wyłączne prawa własności intelektualnej do przedmiotów własności intelektualnej stworzonych przez Wykonawcę podczas świadczenia Usług na podstawie niniejszej Umowy zostaną przeniesione na Klienta, w tym prawo do korzystania, powielania, rozpowszechniania, publicznego wyświetlania, adaptacji i innych działań przewidzianych w art. 427 Kodeksu cywilnego Ukrainy.",
                    },
                    {
                        type: "text",
                        text: "5.2. Moment przeniesienia praw własności intelektualnej z Wykonawcy na Klienta nastąpi po dokonaniu pełnej płatności za Usługi w ramach niniejszej Umowy.",
                    },
                    {
                        type: "text",
                        text: "5.3. Zakres przenoszonych praw zgodnie z określonymi przedmiotami własności intelektualnej zostanie uzgodniony i zapisany przez Strony w dodatkowym porozumieniu do Umowy.",
                    },
                    {
                        type: "text",
                        text: "5.4. Wykonawca zachowuje prawo do korzystania z wytworzonych przez siebie przedmiotów własności intelektualnej, w tym do korzystania z niemajątkowych praw własności intelektualnej, w szczególności w swoim Portfolio, z zastrzeżeniem zgodności z przepisami prawa w dziedzinie własności intelektualnej i jeżeli nie narusza to poufności.",
                    },
                ],
            },
            {
                title: "<purple>Odpowiedzialność</purple> Stron i procedura <purple>rozstrzygania</purple> sporów",
                content: [
                    {
                        type: "text",
                        text: "6.1. W przypadku niewykonania lub nienależytego wykonania swoich zobowiązań wynikających z Umowy, Strony ponoszą odpowiedzialność zgodnie z obowiązującym ustawodawstwem Ukrainy i niniejszą Umową.",
                    },
                    {
                        type: "text",
                        text: "6.2. W przypadku niewykonania lub nieterminowego wykonania swoich zobowiązań Strony ponoszą odpowiedzialność w postaci kar (przepadek, grzywna, kara) w wysokości i na warunkach określonych w Briefie lub Specyfikacji Istotnych Warunków Zamówienia, która stanowi integralną część Umowy. Brak takich sankcji w załącznikach nie zwalnia z odpowiedzialności wynikającej z Kodeksu Cywilnego Ukrainy. W przypadku ich braku zastosowanie mają przepisy art. 611 Kodeksu Cywilnego Ukrainy.",
                    },

                    {
                        type: "text",
                        text: "6.3. Wszelkie spory związane z niniejszą Umową lub powstałe w trakcie wypełniania warunków niniejszej Umowy będą rozstrzygane w drodze negocjacji między przedstawicielami Stron. Jeżeli spór nie może być rozstrzygnięty w drodze negocjacji, zostanie on rozstrzygnięty w sądzie na koszt powoda.",
                    },
                ],
            },
            {
                title: "<purple>Okoliczności</purple> \nsiły wyższej",
                content: [
                    {
                        type: "text",
                        text: "7.1. Strony będą zwolnione z odpowiedzialności za niewykonanie lub nienależyte wykonanie zobowiązań wynikających z niniejszej Umowy w przypadku wystąpienia okoliczności siły wyższej, które nie istniały w chwili odbioru i powstały poza wolą Stron (wypadek, katastrofa, klęska żywiołowa, epidemia, wojna lub jej zaostrzenie na terytorium kraju Wykonawcy i związane z tym ryzyka, takie jak przerwy w dostawie prądu lub łączności), których Strona nie mogła obiektywnie przewidzieć i którym nie mogła zapobiec, jeżeli okoliczności te uniemożliwiają Stronie należyte wykonanie zobowiązań wynikających z niniejszej Umowy.",
                    },
                    {
                        type: "text",
                        text: "7.2. W przypadku rozpoczęcia działań wojennych (aktywnych działań wojennych) na terytorium w lokalizacji Klienta lub Wykonawcy, które uniemożliwiają Stronom wypełnienie ich zobowiązań umownych, takie okoliczności zostaną uznane za siłę wyższą.",
                    },
                    {
                        type: "text",
                        text: "7.3. Strona, która nie może wypełnić swoich zobowiązań wynikających z niniejszej Umowy z powodu siły wyższej, powiadomi drugą Stronę na piśmie w ciągu dziesięciu (10) dni kalendarzowych od daty ich wystąpienia.",
                    },
                    {
                        type: "text",
                        text: "7.4. Terminy realizacji zobowiązań Stron wynikających z Umowy mogą zostać odroczone (przedłużone) na okres, w którym obowiązują okoliczności siły wyższej i ich konsekwencje.",
                    },
                    {
                        type: "text",
                        text: "7.5. Jeżeli okres działania siły wyższej trwa dłużej niż 30 (trzydzieści) dni kalendarzowych, a Strony w drodze negocjacji dojdą do wniosku, że dalsze wypełnianie warunków niniejszej Umowy jest niemożliwe, każda ze Stron będzie miała prawo rozwiązać niniejszą Umowę zgodnie z warunkami opisanymi w punkcie 4.2.3.",
                    },
                    {
                        type: "text",
                        text: "7.6. Siła wyższa nie zwalnia z obowiązku zapłaty za już wykonane usługi.",
                    },
                ],
            },
            {
                title: "<purple>Okres</purple> obowiązywania \nUmowy",
                content: [
                    {
                        type: "text",
                        text: "8.1. Umowę uznaje się za zawartą po wykonaniu przez Klienta jednej z następujących czynności (Akceptacja):",
                    },

                    {
                        type: "text",
                        text: "częściowej lub pełnej przedpłaty za Usługi zgodnie z Fakturą;",
                    },
                    {
                        type: "text",
                        text: "pisemne (w tym wysłane na adres e-mail - *email*)  potwierdzenie przez Klienta zgody na otrzymywanie Usług na warunkach określonych w ofercie handlowej Wykonawcy;",
                    },
                    {
                        type: "text",
                        text: "wypełnienie formularza online „Zamówienie” na Stronie internetowej Wykonawcy z zaznaczeniem zgody na warunki niniejszej Umowy i jest ważne do czasu pełnego wypełnienia przez Strony zobowiązań wynikających z niniejszej Umowy.",
                    },
                    {
                        type: "text",
                        text: "8.2. Umowa może zostać rozwiązana przedterminowo za obopólną pisemną zgodą Stron, z zastrzeżeniem punktu 4.2.4 niniejszej Umowy.",
                    },
                    {
                        type: "text",
                        text: "8.3. Wygaśnięcie Umowy nie zwalnia Stron z odpowiedzialności za jej naruszenie, które miało miejsce w okresie obowiązywania Umowy.",
                    },
                ],
            },
            {
                title: "<purple>Pozostałe</purple> warunki",
                content: [
                    {
                        type: "text",
                        text: "9.1.  Niniejsza Umowa została zawarta z pełnym zrozumieniem przez Strony jej warunków i terminologii w języku ukraińskim. Ukraińskie i angielskie tłumaczenia niniejszej Umowy są dostępne na stronie internetowej pod odpowiednimi linkami *ofertaUA* i *ofertaEN*. W przypadku jakichkolwiek rozbieżności między ukraińską wersją Umowy a wersją przetłumaczoną na inny język, pierwszeństwo ma wersja ukraińska.",
                    },
                    {
                        type: "text",
                        text: "9.2.  Wszelkie załączniki i aneksy do niniejszej Umowy sporządzone przez Strony w trakcie jej wykonywania stanowią jej integralną część i są prawnie wiążące, jeżeli zostały sporządzone w formie pisemnej, podpisane przez Strony i opatrzone pieczęcią (jeżeli dotyczy).",
                    },
                    {
                        type: "text",
                        text: "9.3. Elektroniczna wymiana dokumentów i powiadomień w ramach niniejszej Umowy na adresy e-mail wskazane w niniejszej Umowie będzie uważana za dokonaną przez Strony w formie pisemnej.",
                    },
                    {
                        type: "text",
                        text: "9.4. Strony uzgodniły, że materiały, informacje i dane dotyczące niniejszej Umowy są poufne i nie mogą być przekazywane osobom trzecim bez uprzedniej pisemnej zgody drugiej Strony, z wyjątkiem przypadków, w których takie przekazanie jest związane z wymogami właściwych organów, dokumentami dotyczącymi wykonania Umowy lub zapłaty podatków i innych obowiązkowych płatności, a także w przypadkach przewidzianych przez obowiązujące ustawodawstwo Ukrainy regulujące zobowiązania Stron Umowy.",
                    },
                    {
                        type: "text",
                        text: "9.5. Strony uzgadniają, że oficjalnymi kanałami komunikacji w zakresie realizacji warunków niniejszej Umowy są e-maile *email* i *emailSusanna*, a inne adresy e-mail i komunikatory do komunikacji w sieciach społecznościowych z przedstawicielami Wykonawcy mogą być traktowane jako dodatkowe.",
                    },
                    {
                        type: "text",
                        text: "9.6. W celu przestrzegania przepisów dotyczących ochrony danych osobowych, Strony zgadzają się, że Polityka Prywatności i Ochrony Danych Projektu „i love my team” stanowi integralną część niniejszej Umowy, która jest dostępna pod następującym linkiem: *policy*.",
                    },
                    {
                        type: "text",
                        text: "9.7. Wykonawca zastrzega sobie prawo do zmiany lub uzupełnienia warunków niniejszej Umowy poprzez zamieszczenie stosownego zawiadomienia i nowej wersji Umowy na tej stronie, ze wskazaniem daty ostatnich zmian.",
                    },
                ],
            },
        ],
    },
};
