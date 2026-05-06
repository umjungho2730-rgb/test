// 대시보드 초기화
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
});

function initDashboard() {
    // 통계 카드 업데이트
    updateStatCards();
    
    // 차트 초기화
    initCharts();
    
    // 테이블 업데이트
    updateDataTable();
    
    // 마지막 업데이트 시간
    updateLastModified();
}

// 통계 카드 업데이트
function updateStatCards() {
    document.getElementById('totalPassed').textContent = totalStats.totalPassed.toLocaleString();
    document.getElementById('passRate').textContent = totalStats.passRate;
    document.getElementById('maxScore').textContent = totalStats.maxScore;
    document.getElementById('avgScore').textContent = totalStats.avgScore;
}

// 차트 초기화
function initCharts() {
    initMonthlyChart();
    initCategoryChart();
}

// 월별 차트
function initMonthlyChart() {
    const ctx = document.getElementById('monthlyChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthlyLabels,
            datasets: [
                {
                    label: '합격자',
                    data: monthlyPassed,
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgb(16, 185, 129)',
                    borderWidth: 2,
                    borderRadius: 4
                },
                {
                    label: '불합격자',
                    data: monthlyFailed,
                    backgroundColor: 'rgba(239, 68, 68, 0.7)',
                    borderColor: 'rgb(239, 68, 68)',
                    borderWidth: 2,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#cbd5e1',
                        font: { size: 12 }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(51, 65, 85, 0.2)' }
                },
                x: {
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(51, 65, 85, 0.2)' }
                }
            }
        }
    });
}

// 구분별 차트
function initCategoryChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: categoryData.labels,
            datasets: [{
                data: categoryData.data,
                backgroundColor: [
                    'rgba(30, 64, 175, 0.8)',
                    'rgba(14, 165, 233, 0.8)',
                    'rgba(16, 185, 129, 0.8)'
                ],
                borderColor: [
                    'rgb(30, 64, 175)',
                    'rgb(14, 165, 233)',
                    'rgb(16, 185, 129)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#cbd5e1',
                        font: { size: 12 },
                        padding: 15
                    }
                }
            }
        }
    });
}

// 데이터 테이블 업데이트
function updateDataTable() {
    const tbody = document.getElementById('dataTableBody');
    tbody.innerHTML = '';
    
    dashboardData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.month}</td>
            <td>${row.examinee}</td>
            <td><span style="color: #10b981; font-weight: 600;">${row.passed}</span></td>
            <td><span style="color: #ef4444; font-weight: 600;">${row.failed}</span></td>
            <td>${row.passRate}%</td>
            <td>${row.avgScore}</td>
        `;
        tbody.appendChild(tr);
    });
}

// 마지막 업데이트 시간
function updateLastModified() {
    const now = new Date();
    const formattedDate = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('lastUpdate').textContent = formattedDate;
}

// 실시간 시간 업데이트
setInterval(function() {
    updateLastModified();
}, 60000); // 1분마다 업데이트
