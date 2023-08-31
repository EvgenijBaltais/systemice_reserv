<template>
  <div class="wrapper service">
    <div class="bl-l fl-column">
      <div class="main-logo-left">
        <mainLogo />
      </div>
      <div class="bl-menu-title">
        <span class="company-name">УСЛУГИ</span>
      </div>
      <div class="bl-pagination">
        <span class="active-page">02 </span>
        <span class="bl-page"> / 08</span>
      </div>
    </div>
    <div class="main">
      <pageHeader />
      <div class="content-box">
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/online.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">ОНЛАЙН-МЕРОПРИЯТИЯ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="https://systemice-stream.ru/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Онлайн-мероприятия всех форматов. Более 500 проведенных мероприятий
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{ backgroundImage: `url(${require('../assets/images/kt.jpg')})` }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">КЕЙТЕРИНГ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="https://systemice-catering.ru/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Мероприятия любого масштаба со вкусом, стилем и атмосферой. Лучшие event
              события Москвы и других городов.
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{ backgroundImage: `url(${require('../assets/images/akk.jpg')})` }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">АККАУНТ-МЕНЕДЖЕР</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="/services/platforms/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              работает с клиентами компании и обеспечивает их лояльность, выполнение всех
              необходимых клиенту задач, находит к каждому заказчику индивидуальный подход
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/business-travel.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">Business Travel</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="https://systemice-business.ru/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Подразделение Systemice Group, предоставляющее комплексное обслуживание
              корпоративным клиентам и госучреждениям.
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/guids.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">ВЕДУЩИЕ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="/services/guids/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">Мы подобрали для Вас лучших!</p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/cases.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">КОРПОРАТИВНЫЕ КЕЙСЫ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a
                href="https://systemice.ru/services/corporate_cases/"
                target="_blank"
                class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">Здесь каждый найдет выгодное предложение для себя.</p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/places.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">ПОДБОР МЕСТ ПРОВЕДЕНИЯ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="/services/platforms/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Мы гарантируем, что все площадки прошли через строгие критерии отбора.
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/market.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">ПОЗАБОТЬТЕСЬ О КЛИЕНТАХ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="https://system-market.ru/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Это очень просто – нужно о них позаботиться прямо сейчас! Мы предлагаем
              сделать это с помощью наших подарочных наборов.
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/teambuilding.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">ТИМБИЛДИНГ</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a href="http://www.sysevent.ru/" target="_blank" class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              #тимбилдинг #командообразование #квест #корпоративныйквест
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/postkovid.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">Пост-ковидные мероприятия</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a
                href="https://systemice-stream.ru/post-covidnie-meropriyatiya"
                target="_blank"
                class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Рекомендации по проведению мероприятий в пост-ковидный период
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/games-pic.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">Бизнес-игры</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a
                href="/services/games/"
                target="_blank"
                class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Бизнес-игры ― отличная современная альтернатива тимбилдингу
            </p>
          </div>
        </div>
        <div class="service-block">
          <div class="img-wrapper">
            <div
            class="service-img"
            :style="{
              backgroundImage: `url(${require('../assets/images/event-expert-pic.jpg')})`,
            }"
            ></div>
          </div>
          <div class = "service-desc-w">
            <div class="service-desc">
              <h1 class="h1">Аудит сметы</h1>
              <div class="line"></div>
              <div class="spy-left"></div>
              <div class="spy-top"></div>
              <div class="spy-right"></div>
              <div class="spy-bottom"></div>
              <div class="service-hover">
                <a
                href="/services/event_expert/"
                target="_blank"
                class="open-btn"
                >Открыть</a
                >
              </div>
            </div>
            <p class="bl-desc">
              Предлагаем Вам профессиональный аудит сметы
            </p>
          </div>
        </div>
      </div>
      <div class="footer-mob">
        <div class="bl-pagination">
          <span class="active-page">02 </span>
          <span class="bl-page"> / 08</span>
        </div>
        <copyright />
      </div>
    </div>
    <blRight />
  </div>
</template>

<script>
import blRight from "@/components/bl_right";
import mainLogo from "@/components/main_logo";
import copyright from "@/components/copyright";
import pageHeader from "@/components/page_header";

export default {
  head() {
    return {
      title: "Услуги - Systemice Hotel Group Системайс Хотел Групп",
      meta: [
      {
        hid: 'name',
        name: 'name',
        content: 'Systemice Hotel Group'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам'
      },
      {
          hid: 'og:title',
          name: 'og:title',
          content: 'Systemice Hotel Group Системайс Хотел Групп',
      },
      {
          hid: 'og:image',
          property: 'og:image',
          content: ``,
      },
      {
          hid: 'og:description',
          property: 'og:description',
          content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам',
      },
      {
          hid: 'og:url',
          property: 'og:url',
          content: ``,
      }
      ],
    };
  },
  data() {
    return {
    }
  },
  components: {
    blRight,
    pageHeader,
    mainLogo,
    copyright,
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>
