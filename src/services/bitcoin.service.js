import axios from 'axios'
import { utilService } from './util.service.js'

const STORAGE_RATE = 'rate_db'
const STORAGE_MARKETPRICE = 'marketprice_db'
const STORAGE_AVGBLOCKSIZE = 'avgblocksize_db'

async function getRate(amount) {
    try {
        const cachedRate = utilService.loadFromStorage(STORAGE_RATE)
        if (cachedRate) return cachedRate

        const { data: rate } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${amount}`)

        utilService.saveToStorage(STORAGE_RATE, rate)
        return rate.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getMarketPriceHistory() {
    try {
        const cachedMarketPriceHistory = utilService.loadFromStorage(STORAGE_MARKETPRICE)
        if (cachedMarketPriceHistory) return cachedMarketPriceHistory

        let { data: marketPriceHistory } = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        const vals = marketPriceHistory.values
        marketPriceHistory = vals.map(val => {
            return {
                date: new Date(val.x * 1000).toLocaleDateString("en-US"),
                price: val.y
            }
        })
        utilService.saveToStorage(STORAGE_MARKETPRICE, marketPriceHistory)
        return marketPriceHistory
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getAvgBlockSize() {
    try {
        const cachedAvgBlockSize = utilService.loadFromStorage(STORAGE_AVGBLOCKSIZE)
        if (cachedAvgBlockSize) return cachedAvgBlockSize

        let { data: avgBlockSize } = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
        utilService.saveToStorage(STORAGE_AVGBLOCKSIZE, avgBlockSize)
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