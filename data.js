// KPI 대시보드 데이터
const dashboardData = [
    {
        month: '2025-12',
        examinee: 150,
        passed: 135,
        failed: 15,
        passRate: 90,
        avgScore: 78.5,
        maxScore: 98
    },
    {
        month: '2026-01',
        examinee: 165,
        passed: 150,
        failed: 15,
        passRate: 90.9,
        avgScore: 79.2,
        maxScore: 99
    },
    {
        month: '2026-02',
        examinee: 180,
        passed: 162,
        failed: 18,
        passRate: 90,
        avgScore: 77.8,
        maxScore: 97
    },
    {
        month: '2026-03',
        examinee: 200,
        passed: 186,
        failed: 14,
        passRate: 93,
        avgScore: 81.3,
        maxScore: 100
    },
    {
        month: '2026-04',
        examinee: 175,
        passed: 157,
        failed: 18,
        passRate: 89.7,
        avgScore: 79.6,
        maxScore: 98
    },
    {
        month: '2026-05',
        examinee: 190,
        passed: 171,
        failed: 19,
        passRate: 90,
        avgScore: 80.1,
        maxScore: 99
    }
];

// 월별 데이터 추출
const monthlyLabels = dashboardData.map(d => {
    const date = new Date(d.month);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
});

const monthlyPassed = dashboardData.map(d => d.passed);
const monthlyFailed = dashboardData.map(d => d.failed);

// 전체 통계
const totalStats = {
    totalPassed: dashboardData.reduce((sum, d) => sum + d.passed, 0),
    totalExaminee: dashboardData.reduce((sum, d) => sum + d.examinee, 0),
    avgPassRate: (dashboardData.reduce((sum, d) => sum + d.passRate, 0) / dashboardData.length).toFixed(1),
    avgScore: (dashboardData.reduce((sum, d) => sum + d.avgScore, 0) / dashboardData.length).toFixed(1),
    maxScore: Math.max(...dashboardData.map(d => d.maxScore))
};

totalStats.passRate = ((totalStats.totalPassed / totalStats.totalExaminee) * 100).toFixed(1);

// 구분별 현황 데이터 (카테고리별)
const categoryData = {
    labels: ['온라인', '오프라인', '하이브리드'],
    data: [45, 35, 20]
};
