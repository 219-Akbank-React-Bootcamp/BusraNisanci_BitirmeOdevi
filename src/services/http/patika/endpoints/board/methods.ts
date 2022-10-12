import service from '../../instance'
import { BoardRequestPayload, } from './types'



export const board = (payload: BoardRequestPayload) => service.post('board', payload)

export const getBoardAll = () => service.get('board')
