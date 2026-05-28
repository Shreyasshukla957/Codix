import redis , { createClient } from 'redis';


const redisclient = createClient({
    username: 'default',
    password: process.env.REDIS_CONNECT as string,
    socket: {
        host: 'redis-18991.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 18991
    }
});
redisclient.on('error', err => console.log('Redis Client Error', err));



export const connectRedis = async():Promise<void> =>{
    await redisclient.connect();
    
}

export default redisclient;

