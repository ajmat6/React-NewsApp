import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    // //making an array of the articles:
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Uniform Civil Code In Karnataka Among BJP's Election Promises - NDTV",
    //         "description": "Implementation of the Uniform Civil Code, 10 lakh jobs in the manufacturing sector and a State Capital Region tag for Bengaluru are among the top promises made by the BJP in its manifesto for the May 10 Karnataka Assembly election.",
    //         "url": "https://www.ndtv.com/india-news/karnataka-assembly-election-2023-bjp-promises-uniform-civil-code-in-karnataka-state-capital-region-tag-for-bengaluru-in-election-manifesto-3994186",
    //         "urlToImage": "https://c.ndtvimg.com/2023-05/0c6651mo_bjp-releases-manifesto-ndtv-650_650x400_01_May_23.jpg",
    //         "publishedAt": "2023-05-01T06:09:00Z",
    //         "content": "Bengaluru: Implementation of the Uniform Civil Code, 10 lakh jobs in the manufacturing sector and a State Capital Region tag for Bengaluru are among the top promises made by the BJP in its manifesto … [+3515 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Earth.com"
    //         },
    //         "author": null,
    //         "title": "More research proves that air pollution causes heart problems - Earth.com",
    //         "description": "More research proves that air pollution causes heart problems • Earth.com",
    //         "url": "https://www.earth.com/news/more-research-proves-that-air-pollution-causes-heart-problems/",
    //         "urlToImage": "https://cff2.earth.com/uploads/2023/04/30212433/Air-pollution-6-scaled.jpg",
    //         "publishedAt": "2023-05-01T06:02:25Z",
    //         "content": "Air pollution has long been considered a significant environmental concern, but its impact on human health is now coming to the forefront with new research. \r\nA recent study published in the Canadian… [+6529 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Airplane-Sized Asteroid Nearing Earth Today, Says NASA - NDTV",
    //         "description": "Asteroid 2023 HY3 is travelling at a speed of 23,596 kilometres per hour and will pass by Earth at a distance of 6.3 million kilometres.",
    //         "url": "https://www.ndtv.com/feature/airplane-sized-asteroid-nearing-earth-today-says-nasa-3994182",
    //         "urlToImage": "https://i.ndtvimg.com/i/2017-04/asteroid-generic-istock-650_650x400_41492570432.jpg",
    //         "publishedAt": "2023-05-01T05:53:53Z",
    //         "content": "Asteroid 2023 HY3 belongs to the Amor group of asteroids. (Representational pic)\r\nAsteroids are celestial bodies in space that are thin, irregularly formed rocks made of metal or minerals that revolv… [+1645 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Free Press Journal"
    //         },
    //         "author": "FPJ Web Desk",
    //         "title": "Now AI Tool to identify cancer more accurately, better than current methods: study - Free Press Journal",
    //         "description": "",
    //         "url": "https://www.freepressjournal.in/viral/now-ai-tool-to-identify-cancer-more-accurately-better-than-current-methods-study",
    //         "urlToImage": "https://gumlet.assettype.com/freepressjournal/2020-08/d0946ebc-358e-46d9-b9a3-525f551672d3/cancer_twitter.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true",
    //         "publishedAt": "2023-05-01T05:24:29Z",
    //         "content": "Researchers, doctors, and scientists have developed an artificial intelligence (AI) model that can identify cancer accurately, according to a Guardian report. \r\nResearchers say it can speed up the di… [+2302 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Livelaw.in"
    //         },
    //         "author": "LIVELAW NEWS NETWORK",
    //         "title": "BREAKING| 'Irretrievable Breakdown of Marriage' A Ground To Dissolve Marriage Invoking Article 142 Powers ... - Live Law - Indian Legal News",
    //         "description": "In a significant verdict, a Constitution Bench of the Supreme Court on Monday held that it can invoke its special powers under Article 142 of the Constitution of India to grant divorce on the...",
    //         "url": "https://www.livelaw.in/top-stories/irretrievable-breakdown-of-marriage-a-ground-to-dissolve-marriage-invoking-article-142-powers-supreme-court-227617",
    //         "urlToImage": "https://www.livelaw.in/h-upload/2020/10/17/382973-sc-and-divorce.jpg",
    //         "publishedAt": "2023-05-01T05:18:20Z",
    //         "content": "In a significant verdict, a Constitution Bench of the Supreme Court on Monday held that it can invoke its special powers under Article 142 of the Constitution of India to grant divorce on the ground … [+3216 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Ludhiana gas: Toxic leak kills 11 in Indian city - BBC",
    //         "description": "Reports say high levels of hydrogen sulphide gas were detected in the area.",
    //         "url": "https://www.bbc.com/news/world-asia-india-65440546",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0B63/production/_129551920_b0be8895-24d7-45d8-a947-2972ce254095.jpg",
    //         "publishedAt": "2023-05-01T04:58:09Z",
    //         "content": "At least 11 people have died following a gas leak in northern India.\r\nWomen and children are among those who died in the port city of Ludhiana in Punjab state. Several people were found unconscious i… [+1344 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "News18"
    //         },
    //         "author": "Shaoni Sarkar",
    //         "title": "Salman Khan Says It's Better If Women's Bodies Are 'Covered', Gets Backlash On Twitter - News18",
    //         "description": "Salman Khan has defended his 'no low neckline' rule on set for women and is being called out over sexist opinions.",
    //         "url": "https://www.news18.com/viral/salman-khan-says-its-better-if-womens-bodies-are-covered-gets-backlash-on-twitter-7685551.html",
    //         "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/05/salman-khan-168291260216x9.png",
    //         "publishedAt": "2023-05-01T04:32:00Z",
    //         "content": "Salman Khan is being widely criticised over a no-low neckline rule for women on set. Shweta Tiwaris daughter, newcomer Palak Tiwari spoke about it during an interview, explaining how Salman did not w… [+1729 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "Aniruddha Dhar",
    //         "title": "India blocks 14 mobile apps used by terrorists in Pakistan - Hindustan Times",
    //         "description": "The Indian government has blocked 14 messenger mobile apps that were used by terrorists in Pakistan to transmit information to J&Kashmir. | Latest News India",
    //         "url": "https://www.hindustantimes.com/india-news/centre-blocks-14-mobile-apps-used-by-terrorists-in-pakistan-to-send-info-in-jammu-and-kashmir-101682913776616.html",
    //         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/01/1600x900/e8352db6-6cb2-11ec-afdc-402d14cff529_1641234871087_1682915064739.jpg",
    //         "publishedAt": "2023-05-01T04:26:56Z",
    //         "content": "The central government has blocked 14 messenger mobile applications that were used by terrorists in Pakistan as communication platforms to transmit information to Jammu and Kashmir.\r\nthe apps blocked… [+1206 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "HT Tech",
    //         "title": "LEAKED! Google Pixel 7a unboxing images show new design, colours - HT Tech",
    //         "description": "Leaked images of the Google Pixel 7a have surfaced online, giving us a good first glimpse at Google’s upcoming mid-range smartphone ahead of the Google I/O scheduled for May 10.",
    //         "url": "https://tech.hindustantimes.com/mobile/news/leaked-google-pixel-7a-unboxing-images-show-new-design-colours-71682913782003.html",
    //         "urlToImage": "https://images.hindustantimes.com/tech/img/2023/05/01/1600x900/pixel_7a_1682914626757_1682914636567.jpg",
    //         "publishedAt": "2023-05-01T04:23:17Z",
    //         "content": "Google's annual developer conference - Google I/O 2023 - will be held on May 10, where Google could announce the Pixel 7a alongside the rumoured Pixel Fold as well as the Android 14. The Google Pixel… [+2204 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Zee Business"
    //         },
    //         "author": "IANS",
    //         "title": "Garmin India launches Forerunner smartwatches with AMOLED displays - Zee Business",
    //         "description": "Priced at Rs 50,490, the Forerunner 265 comes in Black and Aqua colours, while the Forerunner 965 comes in Black and Amp Yellow options priced at Rs 67,490, which are available to buy across online and offline stores.",
    //         "url": "https://www.zeebiz.com/technology/news-garmin-india-launches-forerunner-smartwatches-with-amoled-displays-232897",
    //         "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/05/01/239761-garminwatch.jpg",
    //         "publishedAt": "2023-05-01T04:08:35Z",
    //         "content": "Leading wearable brand Garmin on Sunday launched Forerunner 965 and Forerunner 265 smartwatch series, with high-resolution AMOLED displays in India.\r\nPriced at Rs 50,490, the Forerunner 265 comes in … [+1521 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "EastMojo"
    //         },
    //         "author": "The Conversation",
    //         "title": "From platypus to parsecs and milliCrab: why do astronomers use such weird units? - EastMojo",
    //         "description": "The idea of a planet that’s 85% the mass of Earth seems straightforward. But what about a pulsar-wind nebula with a brightness of a few milliCrab?",
    //         "url": "http://www.eastmojo.com/world/2023/05/01/from-platypus-to-parsecs-and-millicrab-why-do-astronomers-use-such-weird-units/",
    //         "urlToImage": "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/07/james-webb-telescope-first-images.jpg?fit=1920%2C1080&ssl=1",
    //         "publishedAt": "2023-05-01T03:50:00Z",
    //         "content": "You may have heard about an asteroid set to fly near Earth that is the size of 18 platypus, or maybe the one thats the size of 33 armadillos, or even one the size of 22 tuna fish.\r\nNASA / ESA / J. He… [+6972 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Newly-Adopted Golden Retriever Walks 64-Km Over 27 Days Back To Former Owners - NDTV",
    //         "description": "The dog vanished for almost a month and covered an estimated 40 miles (64 km) to Tobermore, County Londonderry, back to his original owners.",
    //         "url": "https://www.ndtv.com/world-news/newly-adopted-golden-retriever-walks-64-km-over-27-days-back-to-former-owners-3993878",
    //         "urlToImage": "https://c.ndtvimg.com/2023-05/ik7dfgo_golden-retriever_625x300_01_May_23.jpg",
    //         "publishedAt": "2023-05-01T03:47:34Z",
    //         "content": "A golden retriever who went missing for 27 days turned up at his former home\r\nThey say there is ''No love like a dog's love.'' Exemplifying the same, a golden retriever, whose owners were forced to g… [+2440 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": "NDTV Sports Desk",
    //         "title": "Watch: Tim David Slams 3 Sixes To Clinch Win For Mumbai Indians. Sachin Tendulkar's Reaction Is Gold.. - NDTV Sports",
    //         "description": "Tim David slammed three sixes in three balls as Mumbai Indians beat Rajasthan Royals in IPL 2023.",
    //         "url": "https://sports.ndtv.com/ipl-2023/tim-david-slams-3-sixes-to-clinch-win-for-mumbai-indians-sachin-tendulkars-reaction-is-gold-watch-3993662",
    //         "urlToImage": "https://c.ndtvimg.com/2023-05/egpkdis_tim-david_625x300_01_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
    //         "publishedAt": "2023-05-01T03:46:26Z",
    //         "content": "Tim David emerged as the hero for Mumbai Indians as the all-rounder slammed three sixes in three balls to guide his team to victory over Rajasthan Royals in the Indian Premier League (IPL) 2023 encou… [+1890 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Uniindia.com"
    //         },
    //         "author": "Uniindia News Service",
    //         "title": "SpaceX launches Falcon Heavy Mission - United News of India",
    //         "description": "United Nations, May 1 (UNI) SpaceX has launched its sixth Falcon Heavy mission, carrying ViaSat-3 Americas and other satellites, after several delays, the company informs.",
    //         "url": "http://www.uniindia.com/spacex-launches-falcon-heavy-mission/world/news/2963148.html",
    //         "urlToImage": "",
    //         "publishedAt": "2023-05-01T03:35:00Z",
    //         "content": "More News01 May 2023 | 10:02 AMMexico City, May 1 (UNI) Paraguay's top electoral court on Sunday confirmed that ruling Colorado Party candidate Santiago Pena won the presidential elections.\r\nsee more… [+974 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "LSG vs RCB, Game Day: Preview - Royal Challengers Bangalore",
    //         "description": "Kohli and Faf’s long batting session at practice, DK’s thoughts on bouncing back, Mike Hesson’s take on the conditions, Sanjay Bangar on addressing the mista...",
    //         "url": "https://www.youtube.com/watch?v=ZrL-oTqsB0k",
    //         "urlToImage": "https://i.ytimg.com/vi/ZrL-oTqsB0k/maxresdefault.jpg",
    //         "publishedAt": "2023-05-01T03:33:04Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "India Today"
    //         },
    //         "author": "Janani K",
    //         "title": "Agent box office collection Day 3: Akhil Akkineni's film finds no takers, earns Rs 9 crore - India Today",
    //         "description": "Akhil Akkineni's Agent received a poor response from the box office from Day 1. In three days, the film hadn't even touched Rs 10 crore in India.",
    //         "url": "https://www.indiatoday.in/movies/regional-cinema/story/agent-box-office-collection-day-3-akhil-akkinenis-film-finds-no-takers-earns-rs-9-crore-2366814-2023-05-01",
    //         "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/akhil_akkineni_agent_box_office_collection_day_3-sixteen_nine.jpg?VersionId=oLdsmt6ux1K6bMS2dqyAbwGE7f7n8Bjd",
    //         "publishedAt": "2023-05-01T03:32:37Z",
    //         "content": "By Janani K: Director Surender Reddy's Agent, starring Akhil Akkineni, is a spy action thriller which graced the screens last week. Since Day 1, Agent has been receiving negative responses from the b… [+1505 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ThePrint"
    //         },
    //         "author": "Aadil Brar",
    //         "title": "India-China poles apart on LAC situation—Chinese scholar after Rajnath-Liu SCO meet in Delhi - ThePrint",
    //         "description": "At Shanghai Cooperation Organization summit in New Delhi, China's defence minister Li Shangfu told Rajnath Singh the LAC was ‘generally stable’. Singh said the basis of bilateral ties has 'eroded'.",
    //         "url": "https://theprint.in/opinion/chinascope/india-china-poles-apart-on-lac-situation-chinese-scholar-after-rajnath-liu-sco-meet-in-delhi/1548279/",
    //         "urlToImage": "https://static.theprint.in/wp-content/uploads/2023/04/SCO-meetingPTI.jpg",
    //         "publishedAt": "2023-05-01T03:00:54Z",
    //         "content": "Indias Defence Minister Rajnath Singh in conversation with his Chinese counterpart Li Shangfu In New Delhi. A Chinese scholars analysis of events leading up to the Galwan Valley clash. Pakistan Army … [+6754 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Indian Express"
    //         },
    //         "author": "The Indian Express",
    //         "title": "Birthday girl Anushka Sharma’s audition tape from 3 Idiots left Aamir Khan, Rajkumar Hirani impressed. Watch - The Indian Express",
    //         "description": null,
    //         "url": "https://indianexpress.com/article/entertainment/bollywood/birthday-girl-anushka-sharma-audition-tape-from-3-idiots-left-aamir-khan-rajkumar-hirani-impressed-watch-8579447/",
    //         "urlToImage": null,
    //         "publishedAt": "2023-05-01T02:48:17Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "News18"
    //         },
    //         "author": "Pritha Mallick",
    //         "title": "Wrestlers vs WFI Updates: Brij Bhushan 'Ready to Resign' if Protests Called Off; Punia Prioritises Justice - News18",
    //         "description": "Wrestler Bajrang Punia said while they would like to participate in the Asian Games, their priority is to seek justice for 'India's daughters', which is more significant than winning a medal",
    //         "url": "https://www.news18.com/india/wrestlers-vs-wfi-brij-live-updates-brij-bhushan-sharan-singh-jantar-mantar-protests-bajrang-punia-wrestling-federation-of-india-asian-games-medal-7685251.html",
    //         "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/04/vinesh-bajrang-168275800616x9.png",
    //         "publishedAt": "2023-05-01T02:38:00Z",
    //         "content": "The protests against Wrestling Federation of India chief Brij Bhushan Sharan Singh, who is facing sexual harassment allegations, and the protest by a section of top wrestlers including Bajrang Punia,… [+3681 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "HT Entertainment Desk",
    //         "title": "Aishwarya Rai, Aaradhya, Vikram, Anil Kapoor attend Ponniyin Selvan 2 screening - Hindustan Times",
    //         "description": "Aishwarya Rai, Aaradhya Bachchan, Vikram, Anil Kapoor, and Kartik Aaryan among others attended the screening of Ponniyin Selvan 2. The film released last week.",
    //         "url": "https://www.hindustantimes.com/entertainment/tamil-cinema/aishwarya-rai-aaradhya-bachchan-vikram-anil-kapoor-kartik-aaryan-attend-ponniyin-selvan-2-screening-see-pics-101682907605327.html",
    //         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/01/1600x900/Ponniyin_Selvan_1682908082244_1682908096929.jpg",
    //         "publishedAt": "2023-05-01T02:36:29Z",
    //         "content": "A special screening of Mani Ratnam's Ponniyin Selvan 2 was held at the Yash Raj Films studio in Mumbai on Sunday evening. Vikram, Aishwarya Rai, daughter Aaradhya Bachchan, Aditi Rao Hydari, Shriya S… [+2341 chars]"
    //     }
    // ]

    handleNextClick = async () => {
        // console.log("This runs after the render method");

        //if the page no is equal to ceil of the total no of news per page * no of pages then it is last page and you cannot go on the next page
        if(this.state.page < Math.ceil(this.state.totalResults/15)){
            let url = `https://newsapi.org/v2/everything?q=technology&from=2023-04-03&sortBy=publishedAt&apiKey=8b51c3d983c244c7b952fb04c988cbf4&pageSize=15&page=${this.state.page + 1}`; //increasing page no by 1

            let data = await fetch(url); //using async await 
            let myData = await data.json();
            console.log(myData);
            // this.setState({articles: myData.articles});

            this.setState({
                page: this.state.page + 1,
                articles: myData.articles
            });
        }

        else{
        
        }
    }

    handlePreviousClick = async () => {
        // console.log("This runs after the render method");

        let url = `https://newsapi.org/v2/everything?q=technology&from=2023-04-03&sortBy=publishedAt&apiKey=8b51c3d983c244c7b952fb04c988cbf4&pageSize=15&page=${this.state.page - 1}`; //Decreasing page value by 1

        let data = await fetch(url); //using async await 
        let myData = await data.json();
        console.log(myData);
        // this.setState({articles: myData.articles});

        this.setState({
            page: this.state.page - 1,
            articles: myData.articles
        })
    }

  //constructor of NewsItem and it will the part in console no of times as your newsitems are:
  constructor(){
    super(); //calling super class constructor (if not mentioned will give error)
    console.log("This is a news component constructor");
    this.state = {
        //making an object of the state and accesing articles array:
        // articles: this.articles,  when we were using static news
        articles: [],
        loading: false,
        page: 1
    }
  }

  async componentDidMount(){
    console.log("This runs after the render method");
    let url = "https://newsapi.org/v2/everything?q=technology&from=2023-04-03&sortBy=publishedAt&apiKey=8b51c3d983c244c7b952fb04c988cbf4&pageSize=15&page=1";

    let data = await fetch(url); //using async await 
    let myData = await data.json();
    var totalres = myData.totalResults;
    console.log(myData);
    this.setState({articles: myData.articles, totalResults: myData.totalResults}); //setting totalresults in the state
  }

  render() {
    return (
        <>
        <div className='container my-5'>
            <h1 className='text-align-center mx-5'>Newsmat - Today's Top Headlines</h1>
            <div className="row">
            {/* Mapping/looping using states and populating the cards: */}
            {/* map is a higher order js arrray traversal method */}
            {this.state.articles.map((element) => {
                // console.log(element)
                return <div className="col-md-4" key={element.url}>
                    {/* below ternary condition is applied for title and description if they become null */}
                    <NewsItem  title={element.title != null?element.title.slice(0,30):""} description={element.description != null? element.description.slice(0,80):""}  imageurl={element.urlToImage} newsurl={element.url}/>
                </div>
            })}
            </div>
        </div>

        <div className="container my-4 d-flex justify-content-around">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page==800} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
      
    )
  }
}

export default News
