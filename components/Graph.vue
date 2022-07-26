
<script>
import Chart from 'chart.js/auto';

export default {

    mounted() {
        const ctx = document.getElementById('myChart').getContext('2d');
        ctx.fillStyle = '#F9F9F9';
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    data: [{x: 'Сентябрь', y: 10000}, {x: 'Октябрь', y: 30000}, {x: 'Ноябрь', y: 100220}, {x: 'Декабрь', y: 100000}, {x: '113123123', y: 100000}, {x: '2445', y: 100000}, {x: '333', y: 100000}, {x: '33123', y: 100000}, {x: '12', y: 100000} ],
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
                scales: {
                    y: {
                        suggestedMax: 100000,
                        suggestedMin: 5000
                    },
                },
            }
        });
    }
}
</script>

<template>
    <canvas id="myChart"></canvas>
</template>
