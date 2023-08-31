#  #!/bin/sh

# echo "Starting....."

# echo "build"
# npm run build:prod

# echo "Delete current files"
# ssh ubuntu@mobilenowgroup.com << reallssh
# sudo rm -rf /var/www/html/frontend/mng-cms/fe/*
# exit
# reallssh

# # 将.nuxt文件夹下的所有内容上传到服务器的/var/www/html/frontend/mng-cms/fe/文件夹下
# echo "Upload...."
# scp -r ./dist/* ubuntu@mobilenowgroup.com:/var/www/html/frontend/mng-cms/fe/

# echo "Done"


# build
echo npm run build:prod
npm run build:prod

sh .deploy/shell/docker-app.sh
docker -v

export BUILD_IMG_TAG=registry.cn-hangzhou.aliyuncs.com/mn/registry.cn-hangzhou.aliyuncs.com/mn/lvmh_vendor_showcase_frontend1.1\
  BUILD_ENV_DOCKER_FILE=Dockerfile.prod\

sh .deploy/shell/build-image.sh
