docker rm -f account
docker run --name account -d -p 9999:8888 ellvtr/codetest-account
# docker run --name account -d -p 8888:8888 ellvtr/codetest-account
