const app = require('./app');
const sequelize = require('./config/dbConfig');

const PORT = process.env.PORT || 3000;

sequelize.sync(), then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});