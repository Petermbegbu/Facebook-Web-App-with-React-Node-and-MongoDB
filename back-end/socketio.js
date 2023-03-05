module.exports = (io) => {
    let connectedUsers = [];


    const getSocketId = (_senderId, receiverId) => {
        const receiver = connectedUsers.find(user => user.userId === receiverId);
        const sender = connectedUsers.find(user => user.userId === _senderId);

        return {sender, receiver};
    }


    io.on('connection', (socket) => {
        //Add a User
        socket.on("addUserId", (id) => {
            const result = connectedUsers.some((user) => user.userId === id );

            if (!result) {
                connectedUsers.push({userId: id, socketId: socket.id})

                console.log("A user connected");
            }

            io.emit("sendConnectedUsers", connectedUsers);
        })

        //Send private message
        socket.on("sendMessage", (data) => {
            const {_senderId, receiverId, text, _conversationId} = data;

            //We get the socket id of the receiver
            const {sender, receiver} = getSocketId(_senderId, receiverId);
            
            //finally, we send the text to the socket id
            if(receiver) {
                io.to(receiver?.socketId).emit("getPrivateText", {_senderId, text, _conversationId})
            } else {
                io.to(sender?.socketId).emit("getPrivateText", {_senderId, text, _conversationId})
            }
        })


        socket.on("disconnect", () => {
            connectedUsers = connectedUsers.filter((user) => user.socketId !== socket.id);

            console.log("A user disconnected")

            io.emit("sendConnectedUsers", connectedUsers);
        })
    });
}