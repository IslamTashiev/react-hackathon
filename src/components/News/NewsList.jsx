import React from 'react'
import NewsItem from './NewsItem'
import "./style.css"
import news1 from "../../assets/images/news-1.svg";
import news2 from "../../assets/images/news-2.svg";
import news3 from "../../assets/images/news-3.svg";
import news4 from "../../assets/images/news-4.svg";

const items = [
  {
      id: 1,
      title: "Открытие нового магазина",
      subtitle: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
      image: news1,
      data: "05 июня 2021"
  },
  {
    id: 2,
    title: "Работа в праздничные дни",
    subtitle: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
    image: news2,
    data: "05 июня 2021"
},
  {
      id: 3,
      title: "Идейные соображения",
      subtitle: "Идейные соображения высшего порядка, а также семантический разбор внешних противодействий позволяет выполнить важные задания по разработке прогресса профессионального сообщества ",
      image: news3,
      data: "05 июня 2021"
  },
  {
      id: 4,
      title: "Показатели успешности социально-экономического развития",
      subtitle: "Принимая во внимание показатели успешности, социально-экономическое развитие играет",
      image: news4,
      data: "05 июня 2021"
  },

]

const NewsList = () => {
    return (
      <>
        <div class="news-mt">
      <div class="news__container">
      <div class="news__items">
      <NewsItem items={items}/>
      <NewsItem items={items}/>
      </div>
    </div>
  </div>
</>
)}


export default NewsList