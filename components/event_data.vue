<template>
  <div class="event-details">
    <div class="details-header">
      <form name = "event_data">
        <div class="details-header-title">
          <span class="details-text-span">ДЕТАЛИ</span>
          <span class="details-step-span">Шаг № 1</span>
        </div>
        <div class="details-progress-mini">
          <div class="details-half-filled"></div>
        </div>
        <div class="details-body">
          <div class="details-body-left">
            <div class="details-body-field">
              <div class="details-body-field-w">
                <date-picker
                placeholder="Дата мероприятия"
                :editable="editable"
                v-model="value1"
                type="date"
                format="DD-MM-YYYY"
                :clearable="false"
                :disabled-date="(date) => date < tomorrow"
                ></date-picker>
                <div class="field-datepicker" @click="calendarClick"></div>
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>
            <div class="details-body-field">
              <div class="details-body-field-w">
                <div class="details-input-block">
                  <input
                  type="text"
                  class="details-input"
                  placeholder="Количество гостей"
                  v-model = "guestsNumber"
                  />
                </div>
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>
            <div class="details-body-field">
              <div class="details-input-block">
                <input
                type="text"
                class="details-input details-format"
                placeholder="Формат мероприятия"
                @click="showAllValues"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>
            <div class="details-body-field">
              <div class="details-input-block">
                <input
                type="text"
                class="details-input"
                placeholder="Бюджет"
                v-model = "budget"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>
            <div class="details-body-field details-body-field-status">
              <span class="details-save-status">Сохранено</span>
            </div>
          </div>
          <div class="details-body-right">
            <div class="details-body-field">
              <div class="details-body-checkboxes">
                <input type="checkbox" id="cb1" v-model = "dateAdvance" />
                <label for="cb1" class="label-cb1">Дата предварительная</label>
              </div>
            </div>
            <div class="details-body-field details-body-two-items">
              <div class="details-half-width">
                <div class="details-input-block">
                  <input
                  type="text"
                  class="details-input details-men"
                  placeholder="Мужчин"
                  />
                </div>
                <div class="spy-left-input"></div>
                <div class="spy-bottom-input"></div>
                <div class="spy-right-input"></div>
                <div class="spy-top-input"></div>
              </div>
              <div class="details-half-width">
                <div class="details-input-block">
                  <input
                  type="text"
                  class="details-input details-women"
                  placeholder="Женщин"
                  />
                </div>

                <div class="spy-left-input"></div>
                <div class="spy-bottom-input"></div>
                <div class="spy-right-input"></div>
                <div class="spy-top-input"></div>
              </div>
            </div>
            <div class="details-body-field">
              <div class="details-input-block">
                <input
                type="text"
                class="details-input details-location"
                placeholder="Место проведения"
                />
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>


            <div class="details-body-field">
              <div class="details-body-field-w">
                <div class="details-input-block">
                  <input
                  type="text"
                  class="details-input"
                  placeholder="Сайт компании/ссылка на соц. сети"
                  v-model = "link"
                  />
                </div>
              </div>
              <div class="spy-left-input"></div>
              <div class="spy-bottom-input"></div>
              <div class="spy-right-input"></div>
              <div class="spy-top-input"></div>
            </div>

            <div class="to-next-step" @click = "changeEventComponent">
              <span>К следующему шагу</span>
              <div class="spy-left-btn"></div>
              <div class="spy-bottom-btn"></div>
              <div class="spy-right-btn"></div>
              <div class="spy-top-btn"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import "vue2-datepicker/locale/ru";

export default {
  data() {
    return {
      siblingComponent: 'eventForm',
      value1: null,
      tomorrow: new Date() - 1000 * 60 * 60 * 24,
      editable: false,
      dateAdvance: '',
      guestsNumber: '',
      budget: '',
      link: '',
      data: this.$store.state.eventForm
    }
  },
  components: {
    DatePicker
  },
  methods: {

    changeEventComponent(e){

      this.data.date = this.value1
      this.data.dateAdvance = this.dateAdvance
      this.data.guestsNumber = this.guestsNumber
      this.data.men = document.querySelector('.details-men').value
      this.data.women = document.querySelector('.details-women').value
      this.data.format = document.querySelector('.details-format').value
      this.data.location = document.querySelector('.details-location').value
      this.data.budget = this.budget
      this.data.link = this.link

      this.$store.dispatch({
        type: 'changeEventData',
        data: this.data
      })

        //return false

        this.$emit('updateStatus', this.siblingComponent)
      },

      calendarClick(e) {
        let ev = new Event("focus");
        e.target.parentElement.querySelector("input").dispatchEvent(ev);
      },

      arrowClick(e) {
        let ev = new Event("click");
        e.target.parentElement.querySelector("input").dispatchEvent(ev);
      },

      showAllValues(e) {
        if (e.target.parentElement.classList.contains("details-multiple-values")) {
          e.target.parentElement.classList.contains("details-multiple-values-opened")
          ? e.target.parentElement.classList.remove("details-multiple-values-opened")
          : e.target.parentElement.classList.add("details-multiple-values-opened");
        }
      },

      getThisValue(e) {
        this.getParent(e.target, "details-multiple-values").querySelector(
          ".details-input"
          ).value = e.target.value;
        this.getParent(e.target, "details-input-block").classList.remove(
          "details-multiple-values-opened"
          )
      },
      targetClicks: function(e){

        if (!e.target.classList.contains('details-input') &&
          !e.target.classList.contains('details-inputs-hidden')) {

          for (let i = 0; i < document.querySelectorAll('.details-multiple-values').length; i++) {
            document.querySelectorAll('.details-multiple-values')[i].classList.remove('details-multiple-values-opened')
          }
        }
      },
      getParent: function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el
      },
    },
    mounted() {

    // Если пользователь уже заполнил эту форму и возвращается со следующей то заполнить поля готовыми данными

    let readyValues = this.$store.state.eventForm

    readyValues.date ? this.value1 = readyValues.date : ''
    readyValues.dateAdvance ? this.dateAdvance = readyValues.dateAdvance : ''
    readyValues.guestsNumber ? this.guestsNumber = readyValues.guestsNumber : ''
    readyValues.budget ? this.budget = readyValues.budget : ''
    readyValues.link ? this.link = readyValues.link : ''

    if (readyValues.format) {
      this.format = readyValues.format
      document.querySelector('.details-format').value = readyValues.format
    }
    if (readyValues.men) {
      this.men = readyValues.men
      document.querySelector('.details-men').value = readyValues.men
    }
    if (readyValues.women) {
      this.women = readyValues.women
      document.querySelector('.details-women').value = readyValues.women
    }
    if (readyValues.location) {
      this.location = readyValues.location
      document.querySelector('.details-location').value = readyValues.location
    }
    
    // Закрытие ненужных пунктов по клику вне

    document.body.addEventListener('click', this.targetClicks)

  },
  beforeDestroy(){
    document.body.removeEventListener('click', this.targetClicks)
  }
}
</script>
