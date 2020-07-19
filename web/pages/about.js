import Layout from "../components/Layout";
import CircleLink from "../components/CircleLink";

import { getAllBrands } from "../lib/api";
import declension from "../lib/declension";

const About = ({ quantity }) => {
  return (
    <Layout>
      <h2>Что это</h2>
      <p>Ничего</p>
      <p>
        В каталоге сейчас {quantity}{" "}
        {declension("бренд", "брендов", "бренда", quantity)}.
      </p>

      <h2>Добавить</h2>
      <p>Шмобавить</p>

      <h2>Автор</h2>
      <p>Шмавтор</p>

      <h2>Поддержать</h2>
      <p>Шмавтор</p>

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
