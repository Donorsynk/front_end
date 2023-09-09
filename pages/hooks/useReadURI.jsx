
import {useQuery} from 'react-query'
import axios from 'axios'

export default function useReadURI(uri) {
const API =`https://ipfs.io/ipfs/${uri}/metadata.json`
// const API =`https://ipfs.io/ipfs/bafyreiewmwddepibag75v35iwdhtiwx4x4bmxtdehe7g5guawg463iydym/metadata.json`

const uriDetails = async()=>{
    return await axios.get(API).then((res)=>res.data)
}

const {data, isLoading, isError} = useQuery(['URIDATA'], uriDetails)
return{data, isLoading, isError};

}
