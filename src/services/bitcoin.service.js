import axios from 'axios'
import { utilService } from './util.service.js'

const STORAGE_RATE = 'rate_db'
const STORAGE_MARKETPRICE = 'marketprice_db'
const STORAGE_AVGBLOCKSIZE = 'avgblocksize_db'

async function getRate(amount) {
    try {
        let rate = utilService.loadFromStorage(STORAGE_RATE)
        if (rate) return rate.data
        rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${amount}`)
        utilService.saveToStorage(STORAGE_RATE, rate)
        return rate.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getMarketPriceHistory() {
    try {
        let marketPriceHistory = utilService.loadFromStorage(STORAGE_MARKETPRICE)
        if (marketPriceHistory) return marketPriceHistory
        marketPriceHistory = await (axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'))
        utilService.saveToStorage(STORAGE_MARKETPRICE, marketPriceHistory)
        return marketPriceHistory.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getAvgBlockSize() {
    try {
        let avgBlockSize = utilService.loadFromStorage(STORAGE_AVGBLOCKSIZE)
        if(avgBlockSize) return avgBlockSize
        avgBlockSize = await (axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true').data)
        utilService.saveToStorage(STORAGE_AVGBLOCKSIZE, avgBlockSize)
        return avgBlockSize.data
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