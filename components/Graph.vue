
<script>
import Chart from 'chart.js/auto';

export default {
    props: ['data'],
    mounted() {
        const ctx = document.getElementById('myChart').getContext('2d');
        ctx.fillStyle = '#F9F9F9';
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    data: this.data,
                    borderWidth: 2,
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    fill: false,
                    backgroundColor: '#2FA6DA',
                    borderColor: '#2FA6DA'
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                
            }
        });
    }
}
</script>

<template>
    <canvas id="myChart"></canvas>
</template>
