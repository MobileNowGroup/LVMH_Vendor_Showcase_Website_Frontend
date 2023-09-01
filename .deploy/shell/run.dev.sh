# build
echo npm run build:dev
npm run build:dev

sh .deploy/shell/docker-app.sh
docker -v
export BUILD_IMG_TAG=mobilenowdev/lvmh_vendor_showcase_frontend:dev\
  BUILD_ENV_DOCKER_FILE=Dockerfile.dev\

sh .deploy/shell/build-image.sh
