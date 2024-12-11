FROM mongo:8.0.3

ENV MONGO_REPLICA_PORT 27017
ENV MONGO_REPLICA_HOST localhost

CMD mongod --port $MONGO_REPLICA_HOST --replySet rs0 --bind_ip 0.0.0.0 & MONGOD_PID=$!;