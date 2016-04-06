# Enjoy Your Coding Guide 

## Develop Flow

1. `git pull` update your local file
2. `git checkout master` change to master branch
3. write your code
4. commit your changes to the repo

```
git add .
git commit -m "YOUR_COMMIT_MESSAGE"
git pull
git push
```
you need to pull before push in case other pushed the code when you are coding

#### Notice: Once you find there are any conflict, which is marked like the following form, please **fix** it and **commit**.
```
 <<<<<<< HEAD
 foo
 =======
 bar
 >>>>>>> branch-a
```
What you need to do is remove those punctuations and erroneous code so that it become what it should be.

## How to test localy

if you haven't install [fis](http://fex-team.github.io/fis3/), run the following command, you need to install [Node.js](https://nodejs.org/) first.

1. `npm install fis3 -g` to install fis3
2. `npm install` to install dependencies

now you can run on your machine

1. `fis3 server start` start a fis3 server and the post is `8080`
2. `fis3 release -cw` add a fis3 listener

## Deploy to GitHub Pages

Once you are sure that you want to publish, you can run this command.

1. fis3 release -d ../dist
2. `git checkout gh-pages`
3. `git merge master` and make sure there is **NO** conflict, fix them if any
2. `git push`
3. `git checkout master`

#### Remember to check if all the pages work corretcly.
========================

| Task          | Description   | Status  | Driver  |
| ------------- | ------------- | ------- | ------- |
| task_1        | 零基础HTML编码| Done    |  V_     |

