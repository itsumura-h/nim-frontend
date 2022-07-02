mkdir -p /var/www/
rm -fr dist/*
rm -fr /var/www/*
nim js -d:release -d:nimExperimentalAsyncjsThen -o:dist/app.js app
cp index.html dist/index.html
cp dist/* /var/www/
