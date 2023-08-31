<template>
  <div class="event-details">
    <div class="details-header">
      <div class="details-header-title">
        <span class="details-text-span">Контакты</span>
        <span class="details-step-span">Финал</span>
      </div>
      <div class="details-progress-mini">
        <div class="details-full-filled"></div>
      </div>
      <form name="event_data" @submit.prevent = "checkForm">
        <div class="details-body">
          <div class="events-form">
            <div class="events-form-div">
              <div class="events-form-item-w">
                <input
                type="text"
                placeholder="Контактное лицо"
                class="events-form-item events-form-name"
                v-model="name"
                id="events-form-name"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>

            <div class="events-form-div">
              <div class="events-form-item-w">
                <input
                type="text"
                placeholder="Название компании"
                class="events-form-item events-form-company"
                v-model="company"
                id="events-form-company"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>

            <div class="events-form-div">
              <div class="events-form-item-w">
                <input
                type="text"
                placeholder="Телефон *"
                class="events-form-item events-form-phone"
                v-model="phone"
                id="events-form-phone"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>

            <div class="events-form-div">
              <div class="events-form-item-w">
                <input
                type="text"
                placeholder="Email"
                v-model="email"
                class="events-form-item events-form-company"
                id="events-form-email"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>

            <div class="events-textarea-w">
              <label for="events-textarea" class="details-date-label">Комментарий</label>
              <div class="events-textarea-border-w">
                <textarea
                placeholder="Напишите Ваши пожелания, идеи и дополнительную информацию по мероприятию, чтобы наш менеджер смог подготовить самое выгодное предложение!"
                name=""
                cols="30"
                rows="10"
                class="events-textarea"
                v-model="comment"
                id="events-textarea"
                ></textarea>
                <div class="spy-left-textarea"></div>
                <div class="spy-bottom-textarea"></div>
                <div class="spy-right-textarea"></div>
                <div class="spy-top-textarea"></div>
              </div>
            </div>

            <div class="events-file-block">
              <div class="events-add-brief">
                <input
                type="file"
                name="file"
                id="field__file"
                class="field__file-input"
                multiple
                />
                <label class="field__file-wrapper" for="field__file">
                  <a class="add-brief">Прикрепить бриф</a>
                </label>
              </div>
              <div class="go-back-to-prev">
                <a class="go-back-span" @click="changeEventComponent">Назад</a>
              </div>
              <div class="to-next-step-final">
                <input class="send-button" type="submit" value="Отправить">
                <div class="spy-left-btn"></div>
                <div class="spy-bottom-btn"></div>
                <div class="spy-right-btn"></div>
                <div class="spy-top-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Inputmask from "inputmask"
import axios from 'axios'

export default {
  data() {
    return {
      siblingComponent: "eventData",
      name: "",
      phone: "",
      email: "",
      company: "",
      comment: "",
      formData: this.$store.state.eventForm,
      sendingForm: 0,
      im: new Inputmask("+7 (999) 999-99-99"),
    };
  },
  components: {},
  methods: {
    checkForm(e) {

      let phoneField = document.querySelector(".events-form-phone")

      if (!phoneField.inputmask.isComplete()) {
        phoneField.classList.add("input-box-wrong")
        return false
      }
      this.sendForm(e.target)
    },

    sendForm(form) {
      if (this.sendingForm != 0) return false;

      this.sendingForm = 1

      axios.interceptors.request.use((req) => {
        form.querySelector(".send-button").value = "Отправка...";
        return req;
      });

      let bodyFormData = new FormData(),
          data = this.$store.state.eventForm

        let dateKnight = ''
          if (data.date) {
              dateKnight = this.getKnightDate(data.date)
          }

      let dopinfo = 'С формы: Собрать собственное мероприятие (systemice.ru/event-progress)'


      data.budget ? dopinfo += '; Бюджет: ' + data.budget : ''
      data.location ? dopinfo += '; место проведения: ' + data.location : ''
      dateKnight ? dopinfo += '; на дату: ' + dateKnight : ''
      data.guestsNumber ? dopinfo += '; гостей: ' + data.guestsNumber : ''
      data.men ? dopinfo += '; мужчин: ' + data.men : ''
      data.women ? dopinfo += '; женщин: ' + data.women : ''
      this.company ? dopinfo += '; компания: ' + this.company : ''
      data.link ? dopinfo += '; ссылка: ' + data.link : ''
      document.getElementById('#cb1') ? dopinfo += '; дата предварительная? ' + [data.dateAdvance === true ? 'Да' : 'Нет'] : ''
      data.format ? dopinfo += '; формат мероприятия: ' + data.format : ''
      this.comment ? dopinfo += "; комментарий: " + this.comment : ''

      document.querySelector('#field__file').files[0] ? dopinfo += '; Файл: ' + document.querySelector('#field__file').files[0].name : ''

      bodyFormData.append("name", this.name)
      bodyFormData.append("phone", this.phone)
      bodyFormData.append("email", this.email)
      bodyFormData.append("date", dateKnight)
      bodyFormData.append("company", this.company)
      bodyFormData.append("comment", this.comment)
      bodyFormData.append("guestsNumber", data.guestsNumber)
      bodyFormData.append("men", data.men)
      bodyFormData.append("women", data.women)
      bodyFormData.append("format", data.format)
      bodyFormData.append("budget", data.budget)
      bodyFormData.append("location", data.location)
      bodyFormData.append("link", data.link)
      bodyFormData.append("dateAdvance", [data.dateAdvance === true ? 'Да' : 'Нет'])
      bodyFormData.append("form_name", form.getAttribute("name"))
      bodyFormData.append('hotel', 13632)
      bodyFormData.append('dopinfo', dopinfo)
      bodyFormData.append('form_name_text', 'Собрать собственное мероприятие (systemice.ru/event-progress)')
      bodyFormData.append('file', document.querySelector('#field__file').files[0])

      axios
      .post("https://systemice.ru/knight_bron.php", bodyFormData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        if (!response.data || response.data == "") {
          form.querySelector(".send-button").value = "Ошибка!"
          return false;
        }
        form.querySelector(".send-button").value = "Успешно!"

        this.$metrika.reachGoal('create_event_order')
      })
    },

    changeEventComponent(e) {
      this.formData.name = this.name;
      this.formData.phone = this.phone;
      this.formData.email = this.email;
      this.formData.company = this.company;
      this.formData.comment = this.comment;

      this.$store.dispatch({
        type: "changeEventData",
        data: this.formData,
      });

      this.$emit("updateStatus", this.siblingComponent);
    },
    getKnightDate: function(date) {

    	var dd = date.getDate();
    	if (dd < 10) dd = '0' + dd;

    	var mm = date.getMonth() + 1;
    	if (mm < 10) mm = '0' + mm;

    	var yy = date.getFullYear();
    	if (yy < 10) yy = '0' + yy;

    	return yy + '-' + mm + '-' + dd;
    },
    getParent: function (el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
    },
  },
  mounted() {
    // Если пользователь уже заполнил эту форму и возвращается со следующей то заполнить поля готовыми данными

    let readyValues = this.$store.state.eventForm;

    readyValues.name ? (this.name = readyValues.name) : "";
    readyValues.company ? (this.company = readyValues.company) : "";
    readyValues.phone ? (this.phone = readyValues.phone) : "";
    readyValues.email ? (this.email = readyValues.email) : "";
    readyValues.comment ? (this.comment = readyValues.comment) : "";

    // Обнуление стилей неверно заполненных полей

    let phoneField = document.querySelector(".events-form-phone"),
    nameField = document.querySelector(".events-form-name");

    phoneField.addEventListener("keyup", function () {
      this.classList.remove("input-box-wrong");
    });

    phoneField.addEventListener("focus", function () {
      this.classList.remove("input-box-wrong");
    });

    nameField.addEventListener("keyup", function () {
      this.classList.remove("input-box-wrong");
    });

    nameField.addEventListener("focus", function () {
      this.classList.remove("input-box-wrong");
    });

    // Маска телефона

    this.im.mask(phoneField)

  }
};
</script>
