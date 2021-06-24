import News from "./News/News";
import NewsTabs from "./NewsTabs/NewsTabs";
import YandexService from "./YandexService/YandexService";
import SearchBar from "./SearchBar/SearchBar";
import Widget from "./Widget/Widget";


const Yandex = (props) => {
    let {news, newsImg, newsTabsText, service, menuItems, popular, play} = props.data
    return (
        <div>
            <div className="container">
                <div className="d-flex">
                    <div>
                        <NewsTabs tabs={newsTabsText}/>
                        <News news={news} newsImg={newsImg}></News>
                    </div>
                    <YandexService className="ml-5" service={service}/>
                </div>
            </div>
            <div className="container-sm">
                <SearchBar menuItems={menuItems}/>
            </div>
            <div className="container">
                <div className="row">
                    <Widget items={popular} title={'Популярное'} className=" d-flex flex-column">
                        {items => items.map(el => <a style={{color: 'grey'}} href="#">{el}</a>)}
                    </Widget>

                    <Widget items={play} title={'Эфир'} className=" d-flex flex-column">
                        {items => items.map(el =>
                            <div>
                                <img style={{width: '15px'}}
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABWVlbu7u76+vp+fn7V1dX8/Pzg4ODZ2dm2traurq7z8/NhYWE1NTWxsbHp6elPT08pKSmZmZnMzMyKiopJSUm/v7+jo6Nvb28dHR1BQUE8PDwxMTEVFRWVlZVnZ2d3d3fGxsYMDAwaGhqNjY2oWGuzAAAEmUlEQVR4nO3di1LiQBCFYQ4QV0FQUEBuShZ8/1fcuFvWinLJJH05SfX/BPmqqGHohEmnE0VRFEVRFEVRFEVRFEVRFMnVv/e+AsXuXkYrfDTOHnreFyPf4/s/3WeTQd/7kkTrZfjRdOh9VYINf/o+Wt95X5hQ/dFpYFHWio9qb30WCBwG3pdXv/vtBWBR99H7Cuu2uQwsevK+xHrlV4HA9tn7Kmu0KAEsyhq70+mvruv+9vrgfakVeyoJLJo0c8UpDyx6++V9uekNkoRNXHEmaUJg2bA9Ti8VWNSsFee5ghCTJm3HX6oIgZn3dZdvWU2IVWNWnPO/mq61a8iUo1tZCDRjAFBHiHkTVpxawmI7zr/HqSnEauEtuFZdITAiX3HqC4EXb8TFJIQY33gzLiQiLPY4vAMAISFWtCNHKSHvyFFOCDxRfjlKCjlXHFEhkPMNAISFAN2KIy5E99bbdJy8EHjzRh2lIcSUaQCgIgSWPNtxJSHRyFFNiAnJiqMnZBk5agqx+u3N6ygLKUaOykKCkaO6EBvnkaO+sFhxXLfjFkJMPUeOJkLXkaOR0HHkaCbExmkAYCf0uslhKQQ8VhxbIUb223FjocNTjuZC85GjvRDITW9yeAixtxw5ughNR45OQsORo5vQbOToJwSWJiuOpxB7i5GjqxCY6684zsJixdEeALgLsVUeOfoLgZ3qisMg1B05cgg1n3IkEQIzrQEAjRBQ+uIgEirNOJiEOrfjqIQYtV6oQSQTKnxQ2YTyyw2dENJbOD5h3nohhJ/EJRRmrRe+yv4mJhRC9icxo1D2Y8oonLdeCNHHGiiFot8XlELRkQalUPSOBqVQ9C4xpVB0YkMpbP1KMxX9AcUolB1lMAplH7lhFMpO+AmFa1Ego1D4YRtCoSyQUCg9TqQT7oSBdMKD+CPvbEL5RzPJhArPZXAJNR48YRJuVe5zEwmFZ910wrXW498sQr0/DXEIR4onvzAID6rP7hEI1Z6GIhGqnxTqLdT/I7Sv0OLEXk+hzanLjkKjg7PchGannzsJDQ+w8xFavoXAQ2j7H0sHofE/882F5ue5GAsdDuW1FSpvst2FPmdjGQqdThsyE7qdUWckdDxn0EboeVakhdDhuA9bofOZrepC93cLKAu9jk4yEzKcuK8p5Hhrgp7Q9Ri6L6kJ31lO9lYSEr2BRkfofqTnlzSENqeylE1eOGY6zLujIOQ6kL0jLiR8jYeo8JXuxQgdWSHn+3TlhFuer8CjxIQMm+yTCQl3fCvMZyLCPcPp8ueSEHK8IeBc9YUGR67VqraQaZN9sppCrk32yWoJ2TbZJ6sj5HzP2veqvw+Y7c1V58qqAknmTNd7qObLWOZM17up4lN7JlulfTqQdpN9ujzVxzHJTug5zccyyU5pnAKkmWSntCjvWzfkK/B7Zbc1e/pN9rluywHzpq0wXxqW8FG9ljK961s3ukl2asvLPsJJdnKzC74D4yQ7vcFZIOFrmqv1ePpLY006ya7UYv7Dt2nHB/R/N9nRL42cedBbudvh2647n49mwzZ9PKMoiqIoiqIoiqIoiqIoiqLm9QfLUFe4shG+ygAAAABJRU5ErkJggg=="
                                     alt=""/>
                                <a style={{color: 'grey'}} href="#">{el}</a>
                            </div>)}
                    </Widget>
                    <Widget title={'Погода'}>
                        <div className="d-flex align-items-center">
                            <img
                                style={{maxWidth:'50px'}}
                                src="data:image/jpeg;base64,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"
                                alt="..."/>
                            <p>Температура воздуха: +25</p></div>
                    </Widget>
                </div>
            </div>
        </div>
    )
}
export default Yandex