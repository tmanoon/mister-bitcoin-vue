import axios from 'axios'

const STORAGE_RATE = 'rate_db'
const STORAGE_MARKETPRICE = 'marketprice_db'
const STORAGE_AVGBLOCKSIZE = 'avgblocksize_db'

async function getRate(amount) {
    try {
        if (localStorage.getItem(STORAGE_RATE)) return JSON.parse(localStorage.getItem(STORAGE_RATE))
        const rate = await (axios.get('https://blockchain.info/tobtc?currency=USD&value=1').data)
        localStorage.setItem(STORAGE_RATE, JSON.stringify(rate))
        return rate
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getMarketPriceHistory() {
    try {
        if (localStorage.getItem(STORAGE_MARKETPRICE)) return JSON.parse(localStorage.getItem(STORAGE_MARKETPRICE))
        const marketPriceHistory = await (axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true').data)
        localStorage.setItem(STORAGE_MARKETPRICE, JSON.stringify(marketPriceHistory))
        return marketPriceHistory
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getAvgBlockSize() {
    try {
        if(localStorage.getItem(STORAGE_AVGBLOCKSIZE)) return JSON.parse(localStorage.getItem(STORAGE_AVGBLOCKSIZE))
        const avgBlockSize = await (axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true').data)
        localStorage.setItem(STORAGE_AVGBLOCKSIZE, JSON.stringify(avgBlockSize))
        return avgBlockSize
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}