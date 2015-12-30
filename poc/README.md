## backend architecture
### amazon linux
* node.js + docker +  mongodb server 용으로 사용 
* aws ec2 instance (t2.micro - 1년간 무료)
* zsh, tmux, vim, git 설치  

### node.js install

* node.js 와 관리용으로 pm2 설치 
```
sudo yum -y update
sudo yum -y install nodejs npm --enablerepo=epel
npm -g install pm2
```
* http://stackoverflow.com/questions/27350634/how-to-yum-install-node-js-on-amazon-linux
* https://github.com/Unitech/pm2 
* pm2 사용법

```
pm2 start server.js
pm2 restart server.js
pm2 stop server.js
sudo yum install -y git
```
### docker install
* 관리의 편의를 위해 docker + mongodb 조합 이용

```
sudo yum install -y docker
sudo service docker start
sudo chkconfig docker on
sudo usermod -a -G docker ec2-user
# logout and re-login
docker info
```
### dockerizing MongoDB

```
docker volume create --name data
docker volume ls
docker pull mongo
docker run -p 27017:27017 --name nextin-mongo -d mongo
```
