import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import NewsImg from "../../assets/images/news-img.svg";
import NewsMobile from "../../assets/images/NewsMobile.svg";
import "./style.css"

const NewsDetail = () => {
    return (
        <div className='wrapper'>
        <Header />
       <div className="container">
       <h1 className="title__name-detail">Открытие нового магазина</h1>
       <div className="detail-news">
      <div className="detail-info">
       <p className='detail-subtitle1'>Противоположная точка зрения подразумевает, что реплицированные с зарубежных источников, современные исследования набирают популярность среди определённых слоёв населения, а значит, должны быть функционально разнесены на независимые элементы. Каждый из нас понимает очевидную вещь: социально-экономическое развитие влечёт за собой процесс внедрения и модернизации модели развития. 
        Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Безусловно, глубокий уровень погружения предполагает независимые способы реализации своевременного выполнения сверхзадачи. 
        Лишь многие известные личности будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Учитывая ключевые сценарии поведения, сложившаяся структура организации создаёт предпосылки для системы обучения кадров, соответствующей насущным потребностям. Не следует, однако, забывать, что консультация с широким активом создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экспериментов, поражающих по своей масштабности и грандиозности. 
        </p>
        <h2 className='detail-title'>Бонусы и акции в честь открытия </h2>
        <p className='detail-subtitle2'>
        А ещё явные признаки победы институционализации освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, реализация намеченных плановых заданий не даёт нам иного выбора, кроме определения первоочередных требований. Каждый из нас понимает очевидную вещь: выбранный нами инновационный путь, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов. Кстати, активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. 
        Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта обеспечивает актуальность переосмысления внешнеэкономических политик. Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы могут быть разоблачены. В частности, высокотехнологичная концепция общественного уклада, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.
        </p>
        </div>
        <div className="detail-img">
        <img className='newsimg' src={NewsImg} />
        <img className='mobileImg' src={NewsMobile} />
        </div>
       </div>
       </div>
        <Footer />
      </div>
)}


export default NewsDetail