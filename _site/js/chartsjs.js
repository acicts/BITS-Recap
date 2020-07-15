// Only Change these things...

const allYears = [2018,2019,2020];
const allTasks = [82,58,200];
const allCodeTasks = [55,10,56];
const allDesignTasks = [23,75,86];
const allExloreTasks = [60,20,100];

// Don't change anything below...

var ctx = document.getElementById('alltasks').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: allYears,
        datasets: [{
            label: '# of Tasks',
            data: allTasks,
            backgroundColor: [
                'rgba(54, 162, 235, 0.4)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById('allcatogery').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: allYears,
        datasets: [{
            label: 'Code Tasks',
            data: allCodeTasks,
            backgroundColor:  'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        },
        {
            label: 'Design Tasks',
            data: allDesignTasks,
            backgroundColor: 'rgba(255, 159, 64, 0.4)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        },
        {
            label: 'Explore Tasks',
            data: allExloreTasks,
            backgroundColor:  'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
