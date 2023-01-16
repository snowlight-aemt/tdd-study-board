const app = require('./app');
const { sequelize } = require('sequelize');

app.listen(8000, () => {
    console.log(`8000 포트로 서비스가 실행됬습니다.`);
});