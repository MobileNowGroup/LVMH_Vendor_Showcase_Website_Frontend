# build
echo npm run build:stage
npm run build:stage

sh .deploy/shell/docker-app.sh
docker -v

export BUILD_IMG_TAG=registry.cn-hangzhou.aliyuncs.com/mn/lvmh_vendor_showcase_frontend1.1\
  BUILD_ENV_DOCKER_FILE=Dockerfile.dev\

sh .deploy/shell/build-image.sh
