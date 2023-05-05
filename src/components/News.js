import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    async update(){
        let url = `https://newsapi.org/v2/top-headlines?&sortBy=publishedAt&category=${this.props.category}&apiKey=8b51c3d983c244c7b952fb04c988cbf4&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

        this.setState({loading: true});

        let data = await fetch(url); 
        let myData = await data.json();
        console.log(myData);


        this.setState({
            page: this.state.page,
            totalResults: myData.totalResults,
            articles: myData.articles,
            loading: false
        })
    }

    // handleNextClick = async () => {
    //     await this.setState({page: this.state.page + 1});
    //     this.update(); //calling update function
    // }

    // handlePreviousClick = async () => {
    //     await this.setState({page: this.state.page - 1})
    //     this.update();
    // }

    //function to make starting letter of a string capital:
    captilizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  //constructor of NewsItem and it will the run in console no of times as your newsitems are:
  constructor(props){
    super(props); //calling super class constructor (if not mentioned will give error) , to pass props you have to mention props
    console.log("This is a news component constructor");
    this.state = {
        //making an object of the state and accesing articles array:
        // articles: this.articles,  when we were using static news
        articles: [],
        loading: true,
        page: 1,
        totalResults: 0, //default totalresults are zero
        nowArticles: 0
    }

    // document.title = `${this.captilizeFirstLetter(this.props.category)} - NewsMat` //changing the title dynamically
  }

  async componentDidMount(){
    this.update();
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?&sortBy=publishedAt&category=${this.props.category}&apiKey=8b51c3d983c244c7b952fb04c988cbf4&country=${this.props.country}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({loading: true});

    let data = await fetch(url); 
    let myData = await data.json();
    console.log(myData);


    this.setState({
        // nowArticles: this.nowArticles + this.articles.length,
        page: this.state.page,
        totalResults: myData.totalResults,
        articles: this.state.articles.concat(myData.articles),
        loading: false
    })
  };

  render() {
    return (
        <>
        <div className='container my-5'>
            {/* changing the headline dynamically */}
            <h1 className='text-center'>NewsMat - Top {this.captilizeFirstLetter(this.props.category)} Headlines</h1>

            {/* when loading state is true only then to show loading spinner */}
            {this.state.loading && <Spinner />}

            {/* react infiniter scroll */}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults} //has more conditions
                loader={this.state.loading && <Spinner />} //this worked for removing the spinner at the end of the articles
            >
            {/* Below container div is used for removing the horizontal scroller */}
            <div className="container">
            <div className="row">
            {/* Mapping/looping using states and populating the cards: */}
            {/* map is a higher order js arrray traversal method */}
            {/* when spinner is loading then not to show the news else show it */}
            {/* {!this.state.loading && this.state.articles.map((element) => { */}
            {this.state.articles.map((element) => {
                // console.log(element)
                return <div className="col-md-4" key={element.url}>
                    {/* below ternary condition is applied for title and description if they become null */}
                    <NewsItem  title={element.title != null?element.title.slice(0,30):""} description={element.description != null? element.description.slice(0,80):""}  imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} sources={element.source.name}/>
                </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
        </div>

        {/* Below are buttons used fro previous and next buttons */}
        {/* <div className="container my-4 d-flex justify-content-around">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page == Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
      
    )
  }
}

export default News
