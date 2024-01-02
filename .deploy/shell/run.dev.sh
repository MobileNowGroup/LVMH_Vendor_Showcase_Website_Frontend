# build
echo  git branch change 
git checkout develop
echo  new code pull 
git pull
echo  build code 
npm run build:dev

sh .deploy/shell/docker-app.sh
docker -v
export REGISTRY_REPO=registry.cn-hangzhou.aliyuncs.com\
  BUILD_IMG_TAG=mobilenowdev/lvmh_vendor_showcase_frontend:dev-1.0\
  BUILD_ENV_DOCKER_FILE=Dockerfile.dev\

sh .deploy/shell/build-image.sh
