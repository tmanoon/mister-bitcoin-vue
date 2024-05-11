<template>
  <section class="statistics" v-if="chartData.labels && chartData.datasets">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </section>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

import { bitcoinService } from "../services/bitcoin.service.js";

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {},
      chartOptions: {
        responsive: true, // Add other chart options as needed
      },
    };
  },
  async created() {
    try {
      const data = {};
      const marketPriceHistory = await bitcoinService.getMarketPriceHistory();
      const labels = marketPriceHistory.map((val) => val.date).slice(0, 10);
      const datasets = [
        { data: marketPriceHistory.map((val) => val.price).slice(0, 10) },
      ];
      data.labels = labels;
      console.log(data.labels);
      data.datasets = datasets;
      console.log(data.datasets);
      this.chartData = data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
.statistics {
  margin-block: 60px;
}
</style>
