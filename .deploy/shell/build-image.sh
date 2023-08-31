# move file
echo "move file"
cp ./.deploy/docker/.dockerignore ./
cp ./.deploy/docker/$BUILD_ENV_DOCKER_FILE ./Dockerfile

# build image
echo "build image"
docker buildx build --platform linux/amd64 . -t "$BUILD_IMG_TAG"
# --platform linux/amd64: M1芯片
docker push $BUILD_IMG_TAG
docker rmi $BUILD_IMG_TAG --force

rm -f Dockerfile
rm -f .dockerignore
