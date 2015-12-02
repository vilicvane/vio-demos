# VIO Minimum Demo

```sh
# clone this repo.
git clone https://github.com/vilic/vio-minimum-demo.git

# cd to the demo folder.
cd vio-minimum-demo

# install tsc and tsd command line tools.
npm install typescript tsd -g

# install dependencies.
npm install vio express consolidate handlebars --save

# install typings.
tsd install express consolidate core-js

# compile typescript.
tsc

# start node server.
node bld/server.js

# now visit http://localhost:1337/.
```
