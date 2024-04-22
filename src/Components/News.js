import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "CNBC" },
      author: "Holly Ellyatt",
      title:
        "Ukraine war live updates: Putin gives first comments on Iran attack; Ukraine 'ran out of missiles' to stop power plant destruction - CNBC",
      description:
        "Russian President Vladimir Putin has issued his first comments on the Iranian attack on Israel, calling on all sides to avoid a major regional confrontation.",
      url: "https://www.cnbc.com/2024/04/17/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107388575-1710750162068-gettyimages-2084805375-AFP_34LT3PY.jpeg?v=1710750760&w=1920&h=1080",
      publishedAt: "2024-04-17T08:27:00Z",
      content:
        "Russian President Vladimir Putin made his first comments on Tuesday on the Iranian attack on Israel, calling on all sides to exercise restraint.\r\nThe Kremlin published details of a telephone conversa… [+1357 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: "Paul Kasabian",
      title:
        "Stephen Curry, Warriors Eliminated by Kings as NBA Fans Call Out End of GSW Dynasty - Bleacher Report",
      description:
        "The Golden State Warriors' trying season—and perhaps its championship window as well— came to a screeching halt Tuesday after a 118-94 loss to the host…",
      url: "https://bleacherreport.com/articles/10117176-stephen-curry-warriors-eliminated-by-kings-as-nba-fans-call-out-end-of-gsw-dynasty",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1713328743/rhr7mnxlvaspndkcehph.jpg",
      publishedAt: "2024-04-17T05:07:57Z",
      content:
        "Ezra Shaw/Getty Images\r\nThe Golden State Warriors' trying seasonand perhaps its championship window as well came to a screeching halt Tuesday after a 118-94 loss to the host Sacramento Kings in the W… [+6765 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Jack Baer",
      title:
        "NBA play-in: Zion Williamson's 40-point night halted by leg injury in Pelicans loss vs. Lakers - Yahoo Sports",
      description:
        "Zion Williamson played a career-high 70 games this regular season.",
      url: "https://sports.yahoo.com/nba-play-in-zion-williamsons-40-point-night-halted-by-leg-injury-in-pelicans-loss-vs-lakers-022830286.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/lix3JtEG3z7QxBGUVWcovw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-04/b7a8fc40-fc5c-11ee-8fdf-1a3fda2c53e7",
      publishedAt: "2024-04-17T04:38:00Z",
      content:
        "Zion Williamson's injury issues reappeared in the Pelicans' NBA play-in tournament loss. (Photo by Jonathan Bachman/Getty Images)\r\nZion Williamson was having one of the best nights of his career in t… [+2222 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Maegan Vazquez",
      title:
        "Menendez's legal strategy may include blaming his wife, unsealed document says - The Washington Post",
      description:
        "A brief unsealed suggests the senator may seek to demonstrate that Nadine Menendez led him to believe “nothing unlawful was taking place.”",
      url: "https://www.washingtonpost.com/national-security/2024/04/16/bob-menendez-wife-unsealed-brief/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2LBJ45ULRWLD6VZOX623FES3NY.jpg&w=1440",
      publishedAt: "2024-04-17T04:20:00Z",
      content:
        "Newly unsealed court documents show that Sen. Bob Menendez (D-N.J.) may seek to blame his wife, Nadine Menendez, for withholding information in a case that led to federal bribery charges.\r\nIn passage… [+2006 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Bailey Johnson",
      title:
        "Capitals return to Stanley Cup playoffs by beating Flyers - The Washington Post",
      description:
        "The win gave the Capitals the Eastern Conference’s final playoff spot. They’ll face the New York Rangers in the opening round.",
      url: "https://www.washingtonpost.com/sports/2024/04/16/capitals-flyers-stanley-cup-playoffs/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XQ6YCQE5HFG7RCBPZWG7GHBHMM_size-normalized.jpg&w=1440",
      publishedAt: "2024-04-17T03:42:59Z",
      content:
        "PHILADELPHIA For the Washington Capitals, it all came down to Game 82. Six-plus months of wins, losses, triumph and pain, with the team at times looking like a surefire playoff squad and at others ap… [+6130 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jeremy Herb, Lauren del Valle",
      title:
        "Takeaways from the second day of jury selection in Trump’s hush money trial - CNN",
      description:
        "Seven jurors were placed Tuesday on the panel that will decide former President Donald Trump’s guilt or innocence in the New York hush money case, a process that has highlighted how difficult – and often contentious – it will be to pick a full jury.",
      url: "https://www.cnn.com/2024/04/16/politics/takeaways-trump-hush-money-trial-day-2/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/06-gettyimages-2147853916.JPG?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-04-17T02:41:00Z",
      content:
        "Seven jurors were placed Tuesday on the panel that will decide former President Donald Trumps guilt or innocence in the New York hush money case, a process that has highlighted how difficult and ofte… [+8068 chars]",
    },
    {
      source: { id: null, name: "9to5Mac" },
      author: "Chance Miller",
      title:
        "iPhone 16 Pro: Four new camera features coming this year - 9to5Mac",
      description:
        "The iPhone 16 Pro lineup will bring new features such as larger displays, a dedicated Capture button, and more. We’re...",
      url: "https://9to5mac.com/2024/04/16/iphone-16-pro-new-camera-features/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/iphone-16.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-04-17T02:23:00Z",
      content:
        "The iPhone 16 Pro lineup will bring new features such as larger displays, a dedicated Capture button, and more. We’re also expecting multiple noticeable improvements to the iPhone 16 Pro and iPhone 1… [+3692 chars]",
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Tatiana Tenreyro",
      title:
        "Kelly Clarkson Gets Emotional Recalling Pregnancy Hospitalizations Amid Arizona Abortion Ban - Hollywood Reporter",
      description:
        "\"It's just insane to me,\" the talk-show host and musician said of the 1864 law recently upheld by the state Supreme Court on Monday's edition of 'The Kelly Clarkson Show.'",
      url: "http://www.hollywoodreporter.com/news/general-news/kelly-clarkson-pregnancy-hospitalization-arizona-abortion-ban-1235875235/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/01/GettyImages-17146051501.jpg?w=1024",
      publishedAt: "2024-04-17T02:20:23Z",
      content:
        "Kelly Clarkson shared her own challenging pregnancy stories amid last week’s Arizona Supreme Court decision to allow the state to prepare to enforce a near-total abortion ban based on an 1864 law.\r\nO… [+2653 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Sarah Rumpf-Whitten",
      title:
        "'Googlers against genocide' lead sit-ins, protests coast-to-coast at tech giant's offices - Fox Business",
      description:
        "A group of Google employees staged sit-ins at three of the tech giant's offices to protest the company's work with the Israeli government.",
      url: "https://www.foxbusiness.com/technology/googlers-against-genocide-lead-sit-ins-protests-coast-coast-tech-giants-offices",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/Googlers-Against-Genocide-protest-outside-California-headquarters-1.jpg?ve=1&tl=1",
      publishedAt: "2024-04-17T01:34:00Z",
      content:
        "Google workers led sit-ins at headquarters from coast-to-coast, protesting the tech giant's contract with the Israeli military and the company's alleged complicity in the Israel-Hamas war.\r\nTech work… [+2855 chars]",
    },
    {
      source: { id: null, name: "WDSU New Orleans" },
      author: null,
      title:
        "Video: Space junk crashed through family's roof, NASA says - WDSU New Orleans",
      description:
        '"It was a tremendous sound. And it almost hit my son. He was two rooms over and heard it all," Otero recalled.',
      url: "https://www.wdsu.com/article/space-junk-crashed-family-house-roof-nasa/60517253",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/screenshot-2024-04-16-at-8-21-54-pm-661f166c3a355.jpg?crop=0.912xw:0.821xh;0.0481xw,0.0641xh&resize=1200:*",
      publishedAt: "2024-04-17T01:14:00Z",
      content:
        "A mysterious object, suspected to be space debris, crashed into a Florida family's home, leaving them in shock and seeking answers.\r\n\"It used to have a cylindrical shape and you can tell by the shape… [+1563 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Solomon Islands: The Pacific election being closely watched by China and the West - BBC.com",
      description:
        "The impoverished Solomon Islands is holding its first election since the country's pivot to Beijing.",
      url: "https://www.bbc.com/news/world-australia-68824299",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/10D02/production/_133166886_gettyimages-2147868134.jpg",
      publishedAt: "2024-04-17T01:13:16Z",
      content: null,
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Kristine Parks",
      title:
        "LA Mayor pleads for wealthy to help buy housing for the homeless: 'Unprecedented partnership' - Fox News",
      description:
        "Los Angeles Mayor Karen Bass called on wealthy residents to buy housing for the homeless as the city struggles to keep tens of thousands off the street.",
      url: "https://www.foxnews.com/media/la-mayor-pleads-wealthy-help-buy-housing-homeless-unprecedented-partnership",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/GettyImages-1605586797.jpg",
      publishedAt: "2024-04-17T01:00:00Z",
      content:
        'Los Angeles Mayor Karen Bass pleaded with "the most fortunate" to help fund housing for the homeless as part of a new strategy to tackle the crisis during her State of the City address on Monday.\r\n"W… [+2946 chars]',
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "CHRIS MEGERIAN",
      title:
        "Biden returns to his Scranton roots to pitch tax plan - The Associated Press",
      description:
        "President Joe Biden has made a nostalgic return to the house where he grew up in working-class Scranton, kicking off three days of campaigning across Pennsylvania by calling for higher taxes on the rich and casting Donald Trump as an out-of-touch elitist. Whe…",
      url: "https://apnews.com/article/joe-biden-scranton-pennsylvania-election-taxes-6b3de3a4807cbccdb5732442071f4f6e",
      urlToImage:
        "https://dims.apnews.com/dims4/default/3c8a993/2147483647/strip/true/crop/4896x2754+0+255/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa0%2F75%2Fc48bae122c2ef5b3cb1673737727%2Fcf19ed254d5242ce94f00db33c0c3ffa",
      publishedAt: "2024-04-17T00:56:00Z",
      content:
        "SCRANTON, Pa. (AP) President Joe Biden made a nostalgic return to the house where he grew up in working-class Scranton on Tuesday, kicking off three days of campaigning across Pennsylvania by calling… [+6942 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Richard Deitsch",
      title:
        "2024 WNBA Draft smashes record with 2.4 million viewers, a 307 percent increase over 2023 - The Athletic",
      description:
        "This WNBA Draft had an endless supply of players with name recognition and an obvious transcendent viewership draw in Caitlin Clark.",
      url: "https://theathletic.com/5420644/2024/04/16/wnba-draft-tv-ratings-viewership/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2024/04/16163428/GettyImages-2148758899.jpg",
      publishedAt: "2024-04-17T00:44:14Z",
      content:
        "You tuned in for Mondays 2024 WNBA Draft.\r\nBoy, did you ever.\r\nMondays draft, featuring Caitlin Clark, Angel Reese, Cameron Brink and a ton of other star college basketball players, averaged a record… [+1873 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title: "Biden treads diplomatic tightrope on Israel-Iran - BBC.com",
      description:
        "Iran's unprecedented weekend attack on Israel has changed the US political calculus in the region.",
      url: "https://www.bbc.com/news/world-us-canada-68832679",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/E52A/production/_133166685_gettyimages-2147846193.jpg",
      publishedAt: "2024-04-17T00:41:11Z",
      content: null,
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Meredith Deliso, Daniel Peck",
      title:
        "Dubai sees severe flooding after getting 2 years' worth of rain in 24 hours - ABC News",
      description:
        "Dubai International Airport briefly diverted some flights due to the weather.",
      url: "https://abcnews.go.com/International/dubai-flooding-heavy-rainfall/story?id=109321601",
      urlToImage:
        "https://i.abcnewsfe.com/a/3f6f8bc5-1c6f-4319-8073-3a24765cbff9/weather-emirates-dubai-flood-ap-lv-240416_1713295510064_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-04-16T23:47:44Z",
      content:
        "Dubai was hit with severe flooding on Tuesday after two years' worth of rain fell in just 24 hours, records show.\r\nOver a half foot -- 6.26 inches -- of rain was recorded in the United Arab Emirates … [+1236 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let URL =
      "https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef";
    let data = await fetch(URL);
    let oData = await data.json();
    console.log(oData);
    this.setState({ articles: oData.articles });
  }

  render() {
    return (
      <div className="container mt-2">
        <h2>InfoPulse: Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-3" key={ele.url}>
                <Newsitem
                  tittle={ele.title ? ele.title.slice(0, 45) : ""}
                  description={
                    ele.description ? ele.description.slice(0, 88) : ""
                  }
                  imgUrl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://img.freepik.com/premium-vector/no-result-found-empty-results-popup-design_586724-96.jpg?w=1060"
                  }
                  url={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark">
            previous
          </button>
          <button type="button" class="btn btn-dark">
            next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
