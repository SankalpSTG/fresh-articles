import { useEffect, useState } from 'react'
import { Parse } from 'rss-to-json'
import Article from '@/components/article/article'


export default function Home() {
  const [page, setPage] = useState(0)
  const [latestNews, setLatestNews] = useState(null)
  const [business, setBusiness] = useState(null)
  const [brokerageRecommendations, setBrokerageRecommendations] = useState(null)
  const [buzzingStocks, setBuzzingStocks] = useState(null)
  const [economy, setEconomy] = useState(null)
  const [marketReports, setMarketReports] = useState(null)
  const [internationalMarkets, setInternationalMarkets] = useState(null)
  const [marketEdge, setMarketEdge] = useState(null)
  const [marketOutlook, setMarketOutlook] = useState(null)
  const [technicals, setTechnicals] = useState(null)
  const [ipoNews, setIpoNews] = useState(null)
  const [insuranceNews, setInsuranceNews] = useState(null)
  const [results, setResults] = useState(null)
  const [technology, setTechnology] = useState(null)
  const [entertainment, setEntertainment] = useState(null)
  const [worldNews, setWorldNews] = useState(null)
  const [sports, setSports] = useState(null)
  const [currentAffairs, setCurrentAffairs] = useState(null)
  const [currency, setCurrency] = useState(null)
  const [topVideos, setTopVideos] = useState(null)
  
  const loadLatestNews = async () => {
    try{
        const rss = await Parse("https://www.moneycontrol.com/rss/latestnews.xml")
        setLatestNews(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the latest news")
    }
  }
  const loadBusiness = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/business.xml")
      setBusiness(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the business")
    }
  }
  const loadBrokerageRecommendations = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/brokeragerecos.xml")
      setBrokerageRecommendations(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the brokerage recommendations")
    }
  }
  const loadBuzzingStocks = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/buzzingstocks.xml")
      setBuzzingStocks(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the buzzing stocks")
    }
  }
  const loadEconomy = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/economy.xml")
      setEconomy(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the economy")
    }
  }
  const loadMarketReports = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/marketreports.xml")
      setMarketReports(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the market reports")
    }
  }
  const loadInternationalMarkets = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/internationalmarkets.xml")
      setInternationalMarkets(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the international markets")
    }
  }
  const loadMarketEdge = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/marketedge.xml")
      setMarketEdge(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the market edge")
    }
  }
  const loadMarketOutlook = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/marketoutlook.xml")
      setMarketOutlook(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the market outlook")
    }
  }
  const loadTechnicals = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/technicals.xml")
      setTechnicals(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the technicals")
    }
  }
  const loadIpoNews = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/iponews.xml")
      setIpoNews(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the ipo news")
    }
  }
  const loadInsuranceNews = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/insurancenews.xml")
      setInsuranceNews(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the insurance news")
    }
  }
  const loadResults = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/results.xml")
      setResults(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the results")
    }
  }
  const loadTechnology = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/technology.xml")
      setTechnology(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the technology")
    }
  }
  const loadEntertainment = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/entertainment.xml")
      setEntertainment(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the entertainment")
    }
  }
  const loadWorldNews = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/worldnews.xml")
      setWorldNews(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the world news")
    }
  }
  const loadSports = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/sports.xml")
      setSports(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the sports")
    }
  }
  const loadCurrentAffairs = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/currentaffairs.xml")
      setCurrentAffairs(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the current affairs")
    }
  }
  const loadCurrency = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/currency.xml")
      setCurrency(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the currency")
    }
  }
  const loadTopVideos = async () => {
    try{
      const rss = await Parse("https://www.moneycontrol.com/rss/topvideos.xml")
      setTopVideos(rss)
    }catch(e){
      console.log("Heyy, I am sorry but I couldn't get you the top videos")
    }
  }

  useEffect(() => {
    loadLatestNews()
    loadBusiness()
    loadBrokerageRecommendations()
    loadBuzzingStocks()
    loadEconomy()
    loadMarketReports()
    loadInternationalMarkets()
    loadMarketEdge()
    loadMarketOutlook()
    loadTechnicals()
    loadIpoNews()
    loadInsuranceNews()
    loadResults()
    loadTechnology()
    loadEntertainment()
    loadWorldNews()
    loadSports()
    loadCurrentAffairs()
    loadCurrency()
    loadTopVideos()
  }, [])

  const renderItem = (items) => {
    return items.map(item => <Article item={item}/>)
  }

  return <>
    <div>
      <div>
        <div className='tw-background-blue-500 font-bold'>
          Latest News
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {latestNews && renderItem(latestNews.items)}
        </div>
      </div>
      <div>
        <div>
          Business
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {business && renderItem(business.items)}
        </div>
      </div>
      <div>
        <div>
          Brokerage Recommendations
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {brokerageRecommendations && renderItem(brokerageRecommendations.items)}
        </div>
      </div>
      <div>
        <div>
          Buzzing Stocks
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {buzzingStocks && renderItem(buzzingStocks.items)}
        </div>
      </div>
      <div>
        <div>
          Economy
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {economy && renderItem(economy.items)}
        </div>
      </div>
      <div>
        <div>
          Market Reports
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {marketReports && renderItem(marketReports.items)}
        </div>
      </div>
      <div>
        <div>
          International Markets
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {internationalMarkets && renderItem(internationalMarkets.items)}
        </div>
      </div>
      <div>
        <div>
          Market Edge
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {marketEdge && renderItem(marketEdge.items)}
        </div>
      </div>
      <div>
        <div>
          Market Outlook
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {marketOutlook && renderItem(marketOutlook.items)}
        </div>
      </div>
      <div>
        <div>
          Technicals
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {technicals && renderItem(technicals.items)}
        </div>
      </div>
      <div>
        <div>
          IPO News
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {ipoNews && renderItem(ipoNews.items)}
        </div>
      </div>
      <div>
        <div>
          Insurance News
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {insuranceNews && renderItem(insuranceNews.items)}
        </div>
      </div>
      <div>
        <div>
          Results
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {results && renderItem(results.items)}
        </div>
      </div>
      <div>
        <div>
          Technology
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {technology && renderItem(technology.items)}
        </div>
      </div>
      <div>
        <div>
          Entertainment
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {entertainment && renderItem(entertainment.items)}
        </div>
      </div>
      <div>
        <div>
          World News
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {worldNews && renderItem(worldNews.items)}
        </div>
      </div>
      <div>
        <div>
          Sports
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {sports && renderItem(sports.items)}
        </div>
      </div>
      <div>
        <div>
          Current Affairs
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {currentAffairs && renderItem(currentAffairs.items)}
        </div>
      </div>
      <div>
        <div>
          Currency
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {currency && renderItem(currency.items)}
        </div>
      </div>
      <div>
        <div>
          Top Videos
        </div>
        <div className='tw-flex tw-items-center tw-w-full tw-flex-wrap tw-justify-center'>
          {topVideos && renderItem(topVideos.items)}
        </div>
      </div>
    </div>
  </>
}
