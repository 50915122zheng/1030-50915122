// 顯示當前時間
document.getElementById('current-time').textContent = moment().format('YYYY-MM-DD HH:mm:ss');

// 格式化時間
document.getElementById('formatted-time').innerHTML = 
    `1. 標準格式：${moment().format('YYYY-MM-DD')}<br>` +
    `2. 12小時制：${moment().format('h:mm:ss a')}<br>` +
    `3. ISO格式：${moment().toISOString()}`;


// 日期加減計算
const futureDate = moment().add(5, 'days').format('YYYY-MM-DD');
const pastDate = moment().subtract(3, 'months').format('YYYY-MM-DD');
document.getElementById('calculated-date').textContent = `
未來5天後的日期：${futureDate}
三個月前的日期：${pastDate}
`;

// 多語系顯示（繁體中文）
moment.locale('zh-tw');
const localizedTime = moment().format('LLLL');
document.getElementById('localized-time').textContent = `當前時間：${localizedTime}`;
const localizedTime2 = moment().format('LLL');
document.getElementById('localized-time2').textContent = `當前時間：${localizedTime2}`;
