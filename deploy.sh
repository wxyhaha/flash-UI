rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:wxyhaha/flash-UI-website.git &&
git remote add gitee git@gitee.com:joelW/flash-ui-website.git &&
git push -f -u origin master &&
git push -f -u gitee master &&

cd -
echo https://wxyhaha.github.io/flash-UI-website