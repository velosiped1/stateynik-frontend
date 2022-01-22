const PLACEHOLDER_HEADER = 'Lorem ipsum dolor sit amet';
const PLACEHOLDER_RATE = 9.0;
const PLACEHOLDER_CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio. Pharetra pharetra massa massa ultricies. Posuere ac ut consequat semper viverra nam libero. Maecenas accumsan lacus vel facilisis volutpat. Eros in cursus turpis massa tincidunt. Ac orci phasellus egestas tellus. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Maecenas sed enim ut sem. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Augue eget arcu dictum varius duis at consectetur. Sagittis purus sit amet volutpat consequat mauris nunc. Tincidunt id aliquet risus feugiat in ante. Neque aliquam vestibulum morbi blandit. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.

Quisque sagittis purus sit amet volutpat consequat mauris. Elit eget gravida cum sociis natoque penatibus. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Cras ornare arcu dui vivamus arcu felis. Neque vitae tempus quam pellentesque nec nam aliquam sem. Ac felis donec et odio pellentesque. In iaculis nunc sed augue lacus. Tortor consequat id porta nibh venenatis cras. Et egestas quis ipsum suspendisse. Convallis aenean et tortor at risus. Sit amet tellus cras adipiscing enim eu. Nec dui nunc mattis enim. Nibh sit amet commodo nulla facilisi nullam. Ut eu sem integer vitae justo eget magna fermentum iaculis. Facilisis volutpat est velit egestas dui. Enim ut sem viverra aliquet. Est sit amet facilisis magna etiam tempor orci. Mattis rhoncus urna neque viverra. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.`;

const PLACEHOLDER_ADVERTISMENT = `Воронежский мясокомбинат дарит вам уникальную возможность купить говяжью вырезку по сниженной цене! Торопитесь прямо сейчас и получите тамбовский трикотаж в подарок при покупке от 13.1431646126 тысяч рублей, только следующие 10 дней вы сможете увидеть, как легко работает простая реклама и сможете зарабатывать с нами прямо сейчас, привлекая дополнительных клиентов с помощью нашего маркетплейса. Для контактов по вопросам рекламы используйте адрес govyajyiholmy@voronezh.gorod.ru`;

function constructContentBox(header, rate, content) {
    return `<div class="contentbox">
    <span class="contentheader">
        <b>` + header + `</b>
        <p class="contentrating-good"> `+ rate +` </p>
    </span>
    <p class="contenttext">` + content + `</p>
</div>`;
}


function constructAdvBox(content) {
    return `<div class="advbox">
        <span class="advtext"> <p> ` + content + ` </p> </span>
    </div>`;
}


function insertContent(container, content) {
    container.innerHTML += content;
}

let contentContainer = document.querySelector('#content-container');

insertContent(contentContainer, constructContentBox(PLACEHOLDER_HEADER, PLACEHOLDER_RATE, PLACEHOLDER_CONTENT));
insertContent(contentContainer, constructAdvBox(PLACEHOLDER_ADVERTISMENT));
insertContent(contentContainer, constructContentBox(PLACEHOLDER_HEADER, PLACEHOLDER_RATE, PLACEHOLDER_CONTENT));
insertContent(contentContainer, constructAdvBox(PLACEHOLDER_ADVERTISMENT));
insertContent(contentContainer, constructContentBox(PLACEHOLDER_HEADER, PLACEHOLDER_RATE, PLACEHOLDER_CONTENT));
insertContent(contentContainer, constructAdvBox(PLACEHOLDER_ADVERTISMENT));
