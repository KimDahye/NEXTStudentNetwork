#!/bin/bash

PORT=3000
MAIN=index.js

get_pid() {
	echo `lsof -i :$PORT -t`
}

start() {
	pid=$(get_pid)
	
	if [ -n "$pid" ]
	then
		echo "NodeJS is already running (pid: $pid)"
	else
		node $MAIN		
	fi
	
	return 0	
}


stop() {
    pid=$(get_pid)

    if [ -n "$pid" ]
    then
        echo "[$pid] Stoping NodeJS"
	kill -9 $pid        
        
	echo "NodeJS is not running"
    fi

    return 0
}

case $1 in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        start
        ;;
    status)
        pid=$(get_pid)
        if [ -n "$pid" ]
        then
            echo "NodeJS is running with pid: $pid"
        else
            echo "NodeJS is not running"
        fi
        ;;
    *)
        echo $"Usage : $0 {start|stop|restart}"
        exit 1
esac
exit 0
