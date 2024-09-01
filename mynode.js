const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'}); ;

const envFile = `export const env = {
    URL: '${process.env.URL}',
    PROJECT_ID: '${process.env.PROJECT_ID}',
    DATABASE_ID: '${process.env.DATABASE_ID}',
    USERS_COLLECTION_ID: '${process.env.USERS_COLLECTION_ID}',
    INVOICES_COLLECTION_ID: '${process.env.INVOICES_COLLECTION_ID}',
    CUSTOMERS_COLLECTION_ID: '${process.env.CUSTOMERS_COLLECTION_ID}',
    IMAGE_BUCKET_ID: '${process.env.IMAGE_BUCKET_ID}'
};
`;
const targetPath = path.join(__dirname, './src/environments/environment.development.ts');
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
    }
});
