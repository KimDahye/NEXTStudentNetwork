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
### mongodb install
* https://docs.mongodb.org/v3.0/tutorial/install-mongodb-on-amazon/
* create /etc/yum.repos.d/mongodb-org-3.0.repo
```
[mongodb-org-3.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.0/x86_64/
gpgcheck=0
enabled=1
```

* install mongodb and start mongod
```
sudo yum install -y mongodb-org
sudo service mongod start
sudo chkconfig mongod on
```
