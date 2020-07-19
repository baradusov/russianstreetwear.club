import Layout from "../components/Layout";
import CircleLink from "../components/CircleLink";

import { getAllBrands } from "../lib/api";

const About = ({ quantity }) => {
  return (
    <Layout>
      <p>
        Российский стритвир давно уже не просто принты на футболках и не только
        «Волчок» и «Меч». Каталог был создан с целью показать разнообразие
        отечественной уличной одежды.
      </p>

      <h2>Помочь</h2>
      <p>
        Одна из целей каталога стать максимально полной базой российских
        стритвир брендов. Сейчас в каталоге их {quantity}, но невозможно знать и
        уследить за всеми появляющимися брендами, поэтому вы можете{" "}
        <a className="link" href="https://airtable.com/shroyJ2ZpuX4WVEIk">
          предложить добавить бренд
        </a>
        , которого ещё нет в каталоге,{" "}
        <a className="link" href="https://t.me/baradusov">
          сообщить об ошибке
        </a>{" "}
        или{" "}
        <a className="link" href="https://t.me/baradusov">
          прислать
        </a>{" "}
        дополнительную информацию.
      </p>

      <h2>Автор</h2>
      <p>
        <a className="link" href="https://baradusov.ru">
          Нуриль Барадусов
        </a>
        , верстальщик из Самары.
      </p>

      <h2>Поддержать</h2>
      <iframe
        src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%D0%B0%20%C2%AB%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D1%85%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2%20%D1%83%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B%C2%BB&targets-hint=&default-sum=100&button-text=14&hint=&successURL=https%3A%2F%2Frussianstreetwear.now.sh%2F&quickpay=shop&account=41001432509428"
        width="100%"
        height="250"
        frameBorder="0"
        allowtransparency="true"
        scrolling="no"
      ></iframe>

      <CircleLink link="/" icon="&#x21b5;" />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const allBrands = await getAllBrands();

  return {
    props: {
      quantity: allBrands.length,
    },
  };
}

export default About;
