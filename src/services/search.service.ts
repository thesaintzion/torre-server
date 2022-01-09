import axios from 'axios';
import configUtil from '../utils/config.util';

export const searchService = async (body: any) => {
    try {
        const resp = await axios.post(`${configUtil.torreApiBase}/people/_search?size=20&lang=en&aggregate=true`,  body);
        return resp.data

    } catch (e: any) {
        throw new Error(e)
    }    
}





